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
exports.detailTicket = exports.getAllCities = exports.getAllCategory = exports.v = exports.createEvent = exports.detailEvents = exports.getEvents = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const client_1 = require("../prisma/generated/client");
const cloudinary_1 = require("../config/cloudinary");
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(res.locals.data);
        const { search, location, from, to, category } = req.query;
        const conditions = [];
        if (search) {
            conditions.push({
                OR: [
                    {
                        title: { contains: search, mode: "insensitive" },
                    },
                    {
                        description: { contains: search, mode: "insensitive" },
                    },
                ],
            });
        }
        if (category) {
            conditions.push({
                category: { equals: category },
            });
        }
        if (location) {
            conditions.push({
                location: { contains: location, mode: "insensitive" },
            });
        }
        if (from || to) {
            const dateFilter = {};
            if (from)
                dateFilter.gte = new Date(from);
            if (to)
                dateFilter.lte = new Date(to);
            conditions.push({ start_date: dateFilter });
        }
        const where = conditions.length > 0 ? { AND: conditions } : {};
        const response = yield prisma_1.default.events.findMany({
            where,
            include: {
                ticket_types: true,
            },
        });
        res.status(200).send(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});
exports.getEvents = getEvents;
const detailEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const detail = yield prisma_1.default.events.findUnique({
            where: { title: req.params.title },
            select: {
                id: true,
                organizer_id: true,
                event_picture: true,
                title: true,
                location: true,
                start_date: true,
                end_date: true,
                category: true,
                organizer: true,
                description: true,
                ticket_types: true,
            },
        });
        const quota = detail === null || detail === void 0 ? void 0 : detail.ticket_types.reduce((acc, cur) => acc + cur.quota, 0);
        const price = detail === null || detail === void 0 ? void 0 : detail.ticket_types.map((item) => item.price).sort((a, b) => a - b);
        if (!detail) {
            throw "Event not found";
        }
        res.status(200).send({ detail, quota, price });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.detailEvents = detailEvents;
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, start_date, end_date, location, category } = req.body;
        const organizer = yield prisma_1.default.organizers.findFirst({
            where: { user_id: res.locals.data.id },
        });
        if (!organizer) {
            throw "Organizer not found";
        }
        if (!req.file) {
            throw "File not found";
        }
        const ticket_types = JSON.parse(req.body.ticket_types);
        const upload = yield (0, cloudinary_1.cloudUpload)(req.file);
        const newEvent = yield prisma_1.default.events.create({
            data: {
                organizer_id: organizer.id,
                title,
                description,
                start_date: new Date(start_date),
                end_date: new Date(end_date),
                location,
                category,
                event_picture: upload.secure_url,
                ticket_types: {
                    createMany: {
                        data: ticket_types,
                    },
                },
            },
        });
        res.status(201).send(newEvent);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.createEvent = createEvent;
const v = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.v = v;
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = Object.values(client_1.Category);
        res.status(200).send(categories);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllCategory = getAllCategory;
const getAllCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.default.cities.findMany({
            where: { country: "Indonesia" },
            orderBy: {
                city: "asc",
            },
        });
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllCities = getAllCities;
const detailTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const detail = yield prisma_1.default.ticket_types.findFirst({
            where: { type_name: { equals: req.params.name, mode: "insensitive" } },
            include: {
                events: true
            }
        });
        res.status(200).send(detail);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.detailTicket = detailTicket;
