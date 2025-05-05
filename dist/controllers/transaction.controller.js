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
exports.getStatus = exports.getOrganizerTransaction = exports.getUserPoints = exports.uploadProof = exports.transactionDetail = exports.getTransactionList = exports.updateTransactionStatus = exports.handleCheckout = void 0;
const client_1 = require("../../prisma/generated/client");
const prisma_1 = __importDefault(require("../config/prisma"));
const uuid_1 = require("uuid");
const cloudinary_1 = require("../config/cloudinary");
const emailSender_1 = require("../utils/emailSender");
const handleCheckout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        const { event_id, total_price, usePoints, useVoucher, tickets, sub_total, voucher_discount, point_discount, voucher_code, status, } = req.body;
        if (!event_id || !tickets || tickets.length === 0) {
            throw "Invalid data";
        }
        const invoiceId = `INV-${(0, uuid_1.v4)().slice(0, 8).toUpperCase()}`;
        const transaction = yield prisma_1.default.transactions.create({
            data: {
                user_id: userId,
                event_id,
                invoice_id: invoiceId,
                total_price: total_price,
                sub_total,
                status: status,
                voucher_discount,
                point_discount,
                voucher_code,
                expired_date: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
                expired_hours: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
            },
        });
        if (usePoints) {
            yield prisma_1.default.points.updateMany({
                where: { user_id: userId },
                data: { points_amount: 0 },
            });
        }
        if (useVoucher) {
            yield prisma_1.default.vouchers.updateMany({
                where: { code: voucher_code, quota: { gt: 0 } },
                data: { quota: { decrement: 1 } },
            });
        }
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
        console.log(req.body);
        if (!transactionId || !newStatus) {
            return res.status(400).send({ message: "Missing required fields" });
        }
        const validStatuses = [
            "Pending",
            "Confirming",
            "Approved",
            "Rejected",
            "Expired",
        ];
        if (!validStatuses.includes(newStatus)) {
            return res.status(400).send({ message: "Invalid status" });
        }
        const current = yield prisma_1.default.transactions.findUnique({
            where: { id: transactionId },
            include: {
                transaction_detail: true,
                users: true,
            },
        });
        if (!current) {
            return res.status(404).send({ message: "Transaction not found" });
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
            return res.status(200).send({ message: "Transaction has expired" });
        }
        const shouldRestoreQuota = current.transaction_detail.length > 0 &&
            current.status === "Pending" &&
            ["Canceled", "Rejected", "Expired"].includes(newStatus);
        yield prisma_1.default.$transaction([
            ...Object.entries(ticketCounts).map(([ticketId, count]) => prisma_1.default.ticket_types.update({
                where: { id: parseInt(ticketId) },
                data: { quota: { increment: count } },
            })),
            prisma_1.default.transactions.update({
                where: { id: transactionId },
                data: { status: newStatus },
            }),
        ]);
        if (current.point_discount && current.point_discount > 0) {
            const existingPoint = yield prisma_1.default.points.findFirst({
                where: { user_id: current.user_id },
                orderBy: { created_at: "desc" },
            });
            if (existingPoint) {
                yield prisma_1.default.points.update({
                    where: { id: existingPoint.id },
                    data: { points_amount: { increment: current.point_discount } },
                });
            }
            else {
                yield prisma_1.default.points.create({
                    data: {
                        user_id: current.user_id,
                        points_amount: current.point_discount,
                    },
                });
            }
        }
        if (current.voucher_code &&
            current.voucher_discount &&
            current.voucher_discount > 0) {
            yield prisma_1.default.vouchers.updateMany({
                where: { code: current.voucher_code },
                data: { quota: { increment: 1 } },
            });
        }
        if (newStatus === "Approved") {
            try {
                const tickets = current.transaction_detail.map((detail) => ({
                    code: detail.code,
                }));
                yield (0, emailSender_1.sendEmailTicket)(current.users.email, "Your Ticket Confirmation", null, {
                    email: current.users.email,
                    tickets: tickets
                });
                console.log("email sent");
            }
            catch (error) {
                console.log(error);
            }
        }
        res.status(200).send({
            message: "Transaction status updated successfully",
            transactionId,
            newStatus,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error", error });
    }
});
exports.updateTransactionStatus = updateTransactionStatus;
const getTransactionList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;
        const [transaction, totalCount] = yield Promise.all([
            prisma_1.default.transactions.findMany({
                where: { user_id: userId },
                include: {
                    events: true,
                },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            prisma_1.default.transactions.count({
                where: { user_id: userId },
            }),
        ]);
        const ticketDetail = yield prisma_1.default.transaction_detail.findMany({
            where: { transaction_id: { in: transaction.map((a) => a.id) } },
        });
        const totalPricesPerTransaction = {};
        ticketDetail.forEach((detail) => {
            if (!totalPricesPerTransaction[detail.transaction_id]) {
                totalPricesPerTransaction[detail.transaction_id] = detail.price;
            }
            else {
                totalPricesPerTransaction[detail.transaction_id] += detail.price;
            }
        });
        const responseData = transaction.map((item) => ({
            transaction: item,
            totalPricesPerTransaction: totalPricesPerTransaction[item.id] || 0,
        }));
        res.status(200).send({
            data: responseData,
            pagination: {
                total: totalCount,
                page,
                limit,
                totalPages: Math.ceil(totalCount / limit),
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
exports.getTransactionList = getTransactionList;
const transactionDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceId = req.params.invoice_id;
        const response = yield prisma_1.default.transactions.findFirst({
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
        const ticketCount = yield prisma_1.default.transaction_detail.groupBy({
            by: ["ticket_id"],
            where: { transaction_id: response.id },
            _count: { ticket_id: true },
        });
        const ticketTypeIds = ticketCount.map((item) => item.ticket_id);
        const ticketTypes = yield prisma_1.default.ticket_types.findMany({
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
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.transactionDetail = transactionDetail;
const uploadProof = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            throw "No file attached";
        }
        const upload = yield (0, cloudinary_1.cloudUpload)(req.file);
        const transaction = yield prisma_1.default.transactions.findFirst({
            where: { invoice_id: req.params.invoice_id },
        });
        if (!transaction) {
            throw "Transaction not found";
        }
        const updateProof = yield prisma_1.default.transactions.update({
            where: { id: transaction.id },
            data: { payment_proof: upload.secure_url, status: "Confirmating" },
        });
        res.status(200).send(updateProof);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.uploadProof = uploadProof;
const getUserPoints = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        const points = yield prisma_1.default.points.findMany({
            where: { user_id: userId },
        });
        const totalPoints = points
            .map((a) => a.points_amount)
            .reduce((a, b) => a + b, 0);
        res.status(200).send({ total_point: totalPoints });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getUserPoints = getUserPoints;
const getOrganizerTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        const organizer = yield prisma_1.default.organizers.findFirst({
            where: { user_id: userId },
        });
        if (!organizer) {
            throw "Organizer not found";
        }
        const event = yield prisma_1.default.events.findMany({
            where: { organizer_id: organizer.id },
        });
        const transaction = yield prisma_1.default.transactions.findMany({
            where: { event_id: { in: event.map((a) => a.id) } },
            include: {
                events: true,
            },
        });
        res.status(200).send(transaction);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getOrganizerTransaction = getOrganizerTransaction;
const getStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status = Object.values(client_1.Status);
        res.status(200).send(status);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getStatus = getStatus;
