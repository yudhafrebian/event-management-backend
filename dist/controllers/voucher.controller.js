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
exports.getVoucher = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const getVoucher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.default.vouchers.findFirst({
            where: { code: req.params.code },
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
