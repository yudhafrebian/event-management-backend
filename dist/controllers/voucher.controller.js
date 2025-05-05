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
exports.getEvent = exports.createVoucher = exports.deleteVoucher = exports.getActiveVoucher = exports.getVoucher = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const getVoucher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.default.vouchers.findFirst({
            where: { code: req.params.code, event_id: parseInt(req.params.event_id) },
        });
        if (!response) {
            return res.status(404).send({ message: "Voucher not found" });
        }
        const now = new Date();
        if (response.start_date > now) {
            return res.status(400).send({ message: "Voucher not found" });
        }
        if (response.end_date < now) {
            return res.status(400).send({ message: "Voucher expired" });
        }
        if (response.quota === 0) {
            return res.status(400).send({ message: "Voucher out of stock" });
        }
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getVoucher = getVoucher;
const getActiveVoucher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield prisma_1.default.vouchers.findMany({
            where: { event_id: { in: event.map((a) => a.id) } },
            include: {
                events: true,
            },
        });
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getActiveVoucher = getActiveVoucher;
const deleteVoucher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.default.vouchers.delete({
            where: { id: parseInt(req.params.id) },
        });
        res
            .status(200)
            .send({ message: "Voucher deleted", success: true, data: response });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteVoucher = deleteVoucher;
const createVoucher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { event_name } = req.body;
        const event = yield prisma_1.default.events.findUnique({
            where: { title: event_name },
        });
        if (!event) {
            return res.status(404).send({ message: "Event not found" });
        }
        const response = yield prisma_1.default.vouchers.create({
            data: {
                event_id: event.id,
                code: req.body.code,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                disc_amount: req.body.disc_amount,
                quota: req.body.quota,
            },
        });
        res.status(201).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createVoucher = createVoucher;
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.data.id;
        console.log("userId", userId);
        const organizer = yield prisma_1.default.organizers.findFirst({
            where: { user_id: userId },
        });
        console.log("organizer", organizer);
        if (!organizer) {
            return res.status(404).send({ message: "Organizer not found" });
        }
        const response = yield prisma_1.default.events.findMany({
            where: { organizer_id: organizer.id },
        });
        res.status(200).send({
            message: "Events retrieved successfully",
            data: response,
        });
    }
    catch (error) {
        console.error("Error in getEvent:", error);
        res.status(500).send({ message: "Server error", error });
    }
});
exports.getEvent = getEvent;
