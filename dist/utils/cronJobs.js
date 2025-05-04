"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const prisma_1 = __importDefault(require("../config/prisma"));
node_cron_1.default.schedule("* * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    try {
        const expiredTransactions = yield prisma_1.default.transactions.findMany({
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
            const ticketCounts = {};
            trx.transaction_detail.forEach((detail) => {
                ticketCounts[detail.ticket_id] =
                    (ticketCounts[detail.ticket_id] || 0) + 1;
            });
            yield prisma_1.default.$transaction([
                ...Object.entries(ticketCounts).map(([ticketId, count]) => prisma_1.default.ticket_types.update({
                    where: { id: parseInt(ticketId) },
                    data: {
                        quota: {
                            increment: count,
                        },
                    },
                })),
                prisma_1.default.transactions.update({
                    where: { id: trx.id },
                    data: {
                        status: "Expired",
                    },
                }),
            ]);
            console.log(`Transaction ID ${trx.id} expired and quota restored.`);
        }
    }
    catch (error) {
        console.error(error);
    }
}));
node_cron_1.default.schedule("* * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    try {
        const expiredTransactions = yield prisma_1.default.transactions.findMany({
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
            const ticketCounts = {};
            trx.transaction_detail.forEach((detail) => {
                ticketCounts[detail.ticket_id] =
                    (ticketCounts[detail.ticket_id] || 0) + 1;
            });
            yield prisma_1.default.$transaction([
                ...Object.entries(ticketCounts).map(([ticketId, count]) => prisma_1.default.ticket_types.update({
                    where: { id: parseInt(ticketId) },
                    data: {
                        quota: {
                            increment: count,
                        },
                    },
                })),
                prisma_1.default.transactions.update({
                    where: { id: trx.id },
                    data: {
                        status: "Canceled",
                    },
                }),
            ]);
            console.log(`Transaction ID ${trx.id} Rejected and quota restored.`);
        }
    }
    catch (error) {
        console.error(error);
    }
}));
