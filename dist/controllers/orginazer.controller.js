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
exports.getDetailOrganizer = exports.getAllOrganizer = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const getAllOrganizer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.default.organizers.findMany({
            include: {
                users: true,
            },
        });
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllOrganizer = getAllOrganizer;
const getDetailOrganizer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const detail = yield prisma_1.default.organizers.findUnique({
            where: { organizer_name: req.params.name },
            include: {
                users: true,
            },
        });
        const detailEvents = yield prisma_1.default.events.findMany({
            where: { organizer_id: detail === null || detail === void 0 ? void 0 : detail.id },
            include: {
                ticket_types: true,
            },
        });
        const totalEvents = yield prisma_1.default.events.count({
            where: { organizer_id: detail === null || detail === void 0 ? void 0 : detail.id },
        });
        res.status(200).send({ detail, detailEvents, totalEvents });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getDetailOrganizer = getDetailOrganizer;
