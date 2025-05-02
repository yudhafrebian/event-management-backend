import cron from "node-cron";
import prisma from "../config/prisma";

cron.schedule("* * * * *", async () => {
  const now = new Date();

  try {
    const expiredTransactions = await prisma.transactions.findMany({
      where: {
        status: "Pending",
        expired_hours: {
          lt: now,
        },
      },
      include: {
        transaction_detail: true,
      },
    });

    for (const trx of expiredTransactions) {
      const ticketCounts: Record<number, number> = {};
      trx.transaction_detail.forEach((detail) => {
        ticketCounts[detail.ticket_id] =
          (ticketCounts[detail.ticket_id] || 0) + 1;
      });

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
          where: { id: trx.id },
          data: {
            status: "Expired",
          },
        }),
      ]);

      console.log(`Transaction ID ${trx.id} expired and quota restored.`);
    }
  } catch (error) {
    console.error(error);
  }
});

cron.schedule("* * * * *", async () => {
  const now = new Date();

  try {
    const expiredTransactions = await prisma.transactions.findMany({
      where: {
        status: "Pending",
        expired_date: {
          lt: now,
        },
      },
      include: {
        transaction_detail: true,
      },
    });

    for (const trx of expiredTransactions) {
      const ticketCounts: Record<number, number> = {};
      trx.transaction_detail.forEach((detail) => {
        ticketCounts[detail.ticket_id] =
          (ticketCounts[detail.ticket_id] || 0) + 1;
      });

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
          where: { id: trx.id },
          data: {
            status: "Canceled",
          },
        }),
      ]);

      console.log(`Transaction ID ${trx.id} Rejected and quota restored.`);
    }
  } catch (error) {
    console.error(error);
  }
});