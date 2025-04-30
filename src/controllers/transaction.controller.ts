import { Request, Response } from "express";
import prisma from "../config/prisma";
import { v4 as uuidv4 } from "uuid";

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
    res.status(200).send(transaction,);
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
      ticketCounts[detail.ticket_id] = (ticketCounts[detail.ticket_id] || 0) + 1;
    });

    const shouldRestoreQuota =
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

    res.status(200).send({ message: "Transaction status updated" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

