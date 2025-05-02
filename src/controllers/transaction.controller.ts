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
      tickets,
    }: {
      event_id: number;
      tickets: {
        id: number;
        type_name: string;
        price: number;
      }[];
    } = req.body;

    console.log(event_id, tickets);

    if (!event_id || !tickets || tickets.length === 0) {
      throw "Invalid data";
    }

    const invoiceId = `INV-${uuidv4().slice(0, 8).toUpperCase()}`;

    const transaction = await prisma.transactions.create({
      data: {
        user_id: userId,
        event_id,
        invoice_id: invoiceId,
        expired_date: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
        expired_hours: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      },
    });

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

    if (!transactionId || !newStatus) {
      throw "Missing required fields";
    }

    const current = await prisma.transactions.findUnique({
      where: { id: transactionId },
      include: {
        transaction_detail: true,
      },
    });

    if (!current) {
      throw "Transaction not found";
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
    }

    const shouldRestoreQuota =
      ["Canceled", "Rejected", "Expired"].includes(current.status) &&
      current.status === newStatus;

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

    res.status(200).send({ message: "Transaction status updated" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
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

    const totalPrice = response.transaction_detail.reduce(
      (acc: number, cur: any) => acc + cur.price,
      0
    );

    res.status(200).send({
      transaction: response,
      totalPrice: totalPrice,
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
