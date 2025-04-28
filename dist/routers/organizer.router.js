"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orginazer_controller_1 = require("../controllers/orginazer.controller");
const route = (0, express_1.Router)();
route.get("/all", orginazer_controller_1.getAllOrganizer);
route.get("/:name", orginazer_controller_1.getDetailOrganizer);
exports.default = route;
