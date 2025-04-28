"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createToken = (data) => {
    return (0, jsonwebtoken_1.sign)(data, process.env.TOKEN_KEY || "secretKey");
};
exports.createToken = createToken;
