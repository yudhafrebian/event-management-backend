import { Request, Response } from "express";
import prisma from "../config/prisma";
import { v4 as uuidv4 } from "uuid";
import { cloudUpload } from "../config/cloudinary";

export const handleCheckout = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = res.locals.data.id;
    const {
      event_id,
      total_price,
      usePoints,
      useVoucher,
      tickets,
      sub_total,
      voucher_discount,
      point_discount,
      voucher_code
    }: {
      event_id: number;
      total_price: number;
      usePoints: boolean;
      useVoucher: boolean;
      sub_total: number;
      voucher_discount: number;
      point_discount: number;
      voucher_code: string;
      tickets: {
        id: number;
        type_name: string;
        price: number;
      }[];
    } = req.body;

    if (!event_id || !tickets || tickets.length === 0) {
      throw "Invalid data";
    }

    const invoiceId = `INV-${uuidv4().slice(0, 8).toUpperCase()}`;

    const transaction = await prisma.transactions.create({
      data: {
        user_id: userId,
        event_id,
        invoice_id: invoiceId,
        total_price: total_price,
        sub_total,
        voucher_discount,
        point_discount,
        expired_date: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
        expired_hours: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      },
    });

    if(usePoints){
      await prisma.points.updateMany({
        where:{user_id: userId},
        data:{points_amount:0}
      })
    }

    if(useVoucher){
      await prisma.vouchers.updateMany({
        where:{code:voucher_code, quota:{gt:0}},
        data:{quota:{decrement:1}}
      })
    }

    const createDetails = await prisma.transaction_detail.createMany({
      data: tickets.map((ticket) => ({
        code: `${ticket.type_name.slice(0, 3).toUpperCase()}-${uuidv4()
          .slice(0, 4)
          .toUpperCase()}`,
        event_id,
        ticket_id: ticket.id,
        transaction_id: transaction.id,
        price: ticket.price,
      })),
    });

    const ticketCounts: Record<number, number> = {};
    tickets.forEach((ticket) => {
      ticketCounts[ticket.id] = (ticketCounts[ticket.id] || 0) + 1;
    });

    await Promise.all(
      Object.entries(ticketCounts).map(([ticketId, count]) =>
        prisma.ticket_types.update({
          where: { id: parseInt(ticketId) },
          data: {
            quota: {
              decrement: count,
            },
          },
        })
      )
    );
    res.status(200).send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateTransactionStatus = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { transactionId, newStatus } = req.body;

    console.log(req.body);

    if (!transactionId || !newStatus) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const validStatuses = ["Pending", "Confirming", "Approved", "Rejected", "Expired"];
    if (!validStatuses.includes(newStatus)) {
      return res.status(400).send({ message: "Invalid status" });
    }

    const current = await prisma.transactions.findUnique({
      where: { id: transactionId },
      include: {
        transaction_detail: true,
      },
    });

    if (!current) {
      return res.status(404).send({ message: "Transaction not found" });
    }

    const ticketCounts: Record<number, number> = {};
    current.transaction_detail.forEach((detail) => {
      ticketCounts[detail.ticket_id] =
        (ticketCounts[detail.ticket_id] || 0) + 1;
    });

    const now = new Date();
    if (now.getTime() > current.expired_hours.getTime()) {
      await prisma.transactions.update({
        where: { id: transactionId },
        data: { status: "Expired" },
      });
      return res.status(200).send({ message: "Transaction has expired" });
    }

    const shouldRestoreQuota =
      current.transaction_detail.length > 0 &&
      current.status === "Pending" &&
      ["Canceled", "Rejected", "Expired"].includes(newStatus);

    if (shouldRestoreQuota) {
      await prisma.$transaction([
        ...Object.entries(ticketCounts).map(([ticketId, count]) =>
          prisma.ticket_types.update({
            where: { id: parseInt(ticketId) },
            data: {
              quota: {
                increment: count,
              },
            },
          })
        ),
        prisma.transactions.update({
          where: { id: transactionId },
          data: { status: newStatus },
        }),
      ]);
    } else {
      await prisma.transactions.update({
        where: { id: transactionId },
        data: { status: newStatus },
      });
    }

    res.status(200).send({
      message: "Transaction status updated successfully",
      transactionId,
      newStatus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error", error });
  }
};


export const getTransactionList = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = res.locals.data.id;
    const transaction = await prisma.transactions.findMany({
      where: { user_id: userId },
      include: {
        events: true,
      },
    });

    const ticketDetail = await prisma.transaction_detail.findMany({
      where: { transaction_id: { in: transaction.map((a) => a.id) } },
    });

    const totalPricesPerTransaction: Record<number, number> = {};
    ticketDetail.forEach((detail) => {
      if (!totalPricesPerTransaction[detail.transaction_id]) {
        totalPricesPerTransaction[detail.transaction_id] = detail.price;
      } else {
        totalPricesPerTransaction[detail.transaction_id] += detail.price;
      }
    });

    const responseData = transaction.map((item) => ({
      transaction: item,
      totalPricesPerTransaction: totalPricesPerTransaction[item.id] || 0,
    }));

    res.status(200).send(responseData);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const transactionDetail = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const invoiceId = req.params.invoice_id;
    const response = await prisma.transactions.findFirst({
      where: { invoice_id: invoiceId },
      include: {
        events: true,
        transaction_detail: {
          include: {
            ticket_types: {
              select: {
                type_name: true,
              },
            },
          },
        },
      },
    });

    if (!response) {
      throw "Transaction not found";
    }

    const ticketCount = await prisma.transaction_detail.groupBy({
      by: ["ticket_id"],
      where: { transaction_id: response.id },
      _count: { ticket_id: true },
    });

    const ticketTypeIds = ticketCount.map((item) => item.ticket_id);

    const ticketTypes = await prisma.ticket_types.findMany({
      where: { id: { in: ticketTypeIds } },
      select: { id: true, type_name: true },
    });

    const ticketSummary = ticketCount.map((item) => {
      const type = ticketTypes.find((t) => t.id === item.ticket_id);
      return {
        ticket_id: item.ticket_id,
        type_name: type ? type.type_name : "Unknown",
        quantity: item._count.ticket_id,
      };
    });

    res.status(200).send({
      transaction: response,
      ticketSummary: ticketSummary,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const uploadProof = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    if (!req.file) {
      throw "No file attached";
    }

    const upload = await cloudUpload(req.file);

    const transaction = await prisma.transactions.findFirst({
      where: { invoice_id: req.params.invoice_id },
    });

    if (!transaction) {
      throw "Transaction not found";
    }

    const updateProof = await prisma.transactions.update({
      where: { id: transaction.id },
      data: { payment_proof: upload.secure_url, status: "Confirmating" },
    });

    res.status(200).send(updateProof);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserPoints = async (req: Request, res: Response):Promise<any> => {
  try {
    const userId = res.locals.data.id;
    const points = await prisma.points.findMany({
      where: { user_id: userId },
    });

    const totalPoints = points
      .map((a) => a.points_amount)
      .reduce((a, b) => a + b, 0);
    res.status(200).send({ total_point: totalPoints });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getOrganizerTransaction = async(req: Request, res: Response):Promise<any> => {
  try {

    const userId = res.locals.data.id
    const organizer = await prisma.organizers.findFirst({
      where: { user_id: userId }
    }) 

    if (!organizer) {
      throw "Organizer not found";
    }

    const event = await prisma.events.findMany({
      where: { organizer_id: organizer.id},
    })


    const transaction = await prisma.transactions.findMany({
      where: { event_id: { in: event.map((a) => a.id) } },
      include: {
        events: true
      }
    });

    res.status(200).send(transaction);
    
  } catch (error) {
    res.status(500).send(error);
  }
  
}