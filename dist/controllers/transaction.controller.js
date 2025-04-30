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
exports.getTransactionList = exports.updateTransactionStatus = exports.handleCheckout = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const uuid_1 = require("uuid");
const handleCheckout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        const { event_id, tickets, } = req.body;
        console.log(event_id, tickets);
        if (!event_id || !tickets || tickets.length === 0) {
            throw "Invalid data";
        }
        const invoiceId = `INV-${(0, uuid_1.v4)().slice(0, 8).toUpperCase()}`;
        const transaction = yield prisma_1.default.transactions.create({
            data: {
                user_id: userId,
                event_id,
                invoice_id: invoiceId,
                expired_date: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
                expired_hours: new Date(new Date().getTime() + 2 * 60 * 1000),
            },
        });
        const createDetails = yield prisma_1.default.transaction_detail.createMany({
            data: tickets.map((ticket) => ({
                code: `${ticket.type_name.slice(0, 3).toUpperCase()}-${(0, uuid_1.v4)()
                    .slice(0, 4)
                    .toUpperCase()}`,
                event_id,
                ticket_id: ticket.id,
                transaction_id: transaction.id,
                price: ticket.price,
            })),
        });
        const ticketCounts = {};
        tickets.forEach((ticket) => {
            ticketCounts[ticket.id] = (ticketCounts[ticket.id] || 0) + 1;
        });
        yield Promise.all(Object.entries(ticketCounts).map(([ticketId, count]) => prisma_1.default.ticket_types.update({
            where: { id: parseInt(ticketId) },
            data: {
                quota: {
                    decrement: count,
                },
            },
        })));
        res.status(200).send(transaction);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.handleCheckout = handleCheckout;
const updateTransactionStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { transactionId, newStatus } = req.body;
        if (!transactionId || !newStatus) {
            throw "Missing required fields";
        }
        const current = yield prisma_1.default.transactions.findUnique({
            where: { id: transactionId },
            include: {
                transaction_detail: true,
            },
        });
        if (!current) {
            throw "Transaction not found";
        }
        const ticketCounts = {};
        current.transaction_detail.forEach((detail) => {
            ticketCounts[detail.ticket_id] =
                (ticketCounts[detail.ticket_id] || 0) + 1;
        });
        const now = new Date();
        if (now.getTime() > current.expired_hours.getTime()) {
            yield prisma_1.default.transactions.update({
                where: { id: transactionId },
                data: { status: "Expired" },
            });
        }
        const shouldRestoreQuota = ["Canceled", "Rejected", "Expired"].includes(current.status) &&
            current.status === newStatus;
        if (shouldRestoreQuota) {
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
                    where: { id: transactionId },
                    data: { status: newStatus },
                }),
            ]);
        }
        else {
            yield prisma_1.default.transactions.update({
                where: { id: transactionId },
                data: { status: newStatus },
            });
        }
        res.status(200).send({ message: "Transaction status updated" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
exports.updateTransactionStatus = updateTransactionStatus;
const getTransactionList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        const response = yield prisma_1.default.transactions.findMany({
            where: { user_id: userId }
        });
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getTransactionList = getTransactionList;
