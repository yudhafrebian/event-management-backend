"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = require("../controllers/event.controller");
const verifyToken_1 = require("../middleware/verifyToken");
const uploader_1 = require("../middleware/uploader");
const route = (0, express_1.Router)();
route.get("/all", event_controller_1.getEvents);
route.get("/categories", event_controller_1.getAllCategory);
route.get("/locations", event_controller_1.getAllCities);
route.get("/:title/transaction/:type_name", event_controller_1.detailTicket);
route.get("/:title", event_controller_1.detailEvents);
route.post("/create", verifyToken_1.verifyToken, (0, uploader_1.uploaderMemory)().single("event_picture"), event_controller_1.createEvent);
exports.default = route;
