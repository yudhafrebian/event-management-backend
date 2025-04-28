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
exports.updateProfile = exports.keepLogin = exports.signIn = exports.register = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const bcrypt_1 = require("bcrypt");
const createToken_1 = require("../utils/createToken");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUsers = yield prisma_1.default.users.findUnique({
            where: { email: req.body.email },
        });
        if (existingUsers) {
            throw "Email has been used";
        }
        const referralCode = yield prisma_1.default.referral_coupons.findFirst({
            // ERROR findFirst is reading old data
            where: { code: req.body.referral_code },
        });
        console.log(referralCode);
        if (!referralCode) {
            throw "Invalid referral code";
        }
        // check if code is used
        const checkCode = yield prisma_1.default.referral_coupons.findUnique({
            where: { id: referralCode.id },
        });
        const salt = yield (0, bcrypt_1.genSalt)();
        const hashNewPassword = yield (0, bcrypt_1.hash)(req.body.password, salt);
        console.log(req.body);
        const newUsers = yield prisma_1.default.users.create({
            data: {
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: hashNewPassword,
                role: req.body.role,
            },
        });
        console.log(newUsers);
        console.log(req.body.referral_code);
        // add points in user db of code owner
        const referralPoints = yield prisma_1.default.points.create({
            data: {
                user_id: referralCode.user_id,
                points_amount: 10000,
                expire_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), //90 days
            },
        });
        console.log("points added", referralPoints.points_amount);
        // give voucher to user who used the code
        // const referralVoucher = await prisma.vouchers
        return res.status(200).send({
            success: true,
            message: "Register Success",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.register = register;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body.email);
        const users = yield prisma_1.default.users.findUnique({
            where: { email: req.body.email },
        });
        if (!users) {
            throw "Invalid email";
        }
        const isValidPassword = yield (0, bcrypt_1.compare)(req.body.password, users.password);
        if (!isValidPassword) {
            throw "Invalid password";
        }
        return res.status(200).send({
            id: users.id,
            first_name: users.first_name,
            last_name: users.last_name,
            email: users.email,
            is_verified: users.is_verified,
            role: users.role,
            points: users.points,
            token: (0, createToken_1.createToken)({
                id: users.id,
                is_verified: users.is_verified,
                role: users.role,
            }),
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.signIn = signIn;
const keepLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(res.locals.data.id);
        const users = yield prisma_1.default.users.findUnique({
            where: { id: res.locals.data.id },
        });
        return res.status(200).send({
            email: users === null || users === void 0 ? void 0 : users.email,
            first_name: users === null || users === void 0 ? void 0 : users.first_name,
            last_name: users === null || users === void 0 ? void 0 : users.last_name,
            is_verified: users === null || users === void 0 ? void 0 : users.is_verified,
            role: users === null || users === void 0 ? void 0 : users.role,
            token: (0, createToken_1.createToken)({
                id: users === null || users === void 0 ? void 0 : users.id,
                is_verified: users === null || users === void 0 ? void 0 : users.is_verified,
                role: users === null || users === void 0 ? void 0 : users.role,
            }),
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.keepLogin = keepLogin;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body) {
            throw "No data to update";
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.updateProfile = updateProfile;
