"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const voucher_controller_1 = require("../controllers/voucher.controller");
const route = (0, express_1.Router)();
route.get("/:code", voucher_controller_1.getVoucher);
exports.default = route;
