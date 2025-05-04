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
const cloudinary_1 = require("../config/cloudinary");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if referral code exist
        const referralCode = yield prisma_1.default.users.findFirst({
            where: { referral_code: req.body.referral_code },
        });
        console.log(referralCode === null || referralCode === void 0 ? void 0 : referralCode.referral_code, "code by id", referralCode === null || referralCode === void 0 ? void 0 : referralCode.id);
        if (!referralCode) {
            // if referral code not exist
            throw "Invalid referral code";
        }
        const existingUsers = yield prisma_1.default.users.findUnique({
            where: { email: req.body.email },
        });
        if (existingUsers) {
            throw "Email has been used";
        }
        const salt = yield (0, bcrypt_1.genSalt)();
        const hashNewPassword = yield (0, bcrypt_1.hash)(req.body.password, salt);
        const newUsers = yield prisma_1.default.users.create({
            data: {
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: hashNewPassword,
                role: req.body.role,
            },
        });
        console.log(newUsers.id, "new user id");
        console.log(referralCode.id, "referral code owner id");
        // if code exist
        if (referralCode) {
            // add points in user db of code owner
            const referralPoints = yield prisma_1.default.points.create({
                data: {
                    user_id: referralCode.id,
                    points_amount: 10000,
                    expire_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), //90 days
                },
            });
            console.log("points added", referralPoints.points_amount);
            // give voucher to user who used the code
            const referralVoucher = yield prisma_1.default.referral_coupons.create({
                data: {
                    user_id: newUsers.id,
                    code: "ReferralCoupon" + newUsers.id,
                    disc_amunt: 10000,
                    expires_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), //90 days
                },
            });
            console.log("voucher created", referralVoucher.code);
        }
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
        const userPoints = yield prisma_1.default.points.findMany({
            where: { user_id: users === null || users === void 0 ? void 0 : users.id },
        });
        const totalPoints = userPoints
            .map((a) => a.points_amount)
            .reduce((a, b) => a + b, 0);
        return res.status(200).send({
            id: users === null || users === void 0 ? void 0 : users.id,
            email: users === null || users === void 0 ? void 0 : users.email,
            password: users === null || users === void 0 ? void 0 : users.password,
            first_name: users === null || users === void 0 ? void 0 : users.first_name,
            last_name: users === null || users === void 0 ? void 0 : users.last_name,
            profile_picture: users === null || users === void 0 ? void 0 : users.profile_picture,
            is_verified: users === null || users === void 0 ? void 0 : users.is_verified,
            role: users === null || users === void 0 ? void 0 : users.role,
            code: users === null || users === void 0 ? void 0 : users.referral_code,
            token: (0, createToken_1.createToken)({
                id: users === null || users === void 0 ? void 0 : users.id,
                is_verified: users === null || users === void 0 ? void 0 : users.is_verified,
                role: users === null || users === void 0 ? void 0 : users.role,
            }),
            points: totalPoints,
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
        const userPoints = yield prisma_1.default.points.findMany({
            where: { user_id: users === null || users === void 0 ? void 0 : users.id },
        });
        const totalPoints = userPoints
            .map((a) => a.points_amount)
            .reduce((a, b) => a + b, 0);
        return res.status(200).send({
            id: users === null || users === void 0 ? void 0 : users.id,
            email: users === null || users === void 0 ? void 0 : users.email,
            password: users === null || users === void 0 ? void 0 : users.password,
            first_name: users === null || users === void 0 ? void 0 : users.first_name,
            last_name: users === null || users === void 0 ? void 0 : users.last_name,
            profile_picture: users === null || users === void 0 ? void 0 : users.profile_picture,
            is_verified: users === null || users === void 0 ? void 0 : users.is_verified,
            role: users === null || users === void 0 ? void 0 : users.role,
            code: users === null || users === void 0 ? void 0 : users.referral_code,
            token: (0, createToken_1.createToken)({
                id: users === null || users === void 0 ? void 0 : users.id,
                is_verified: users === null || users === void 0 ? void 0 : users.is_verified,
                role: users === null || users === void 0 ? void 0 : users.role,
            }),
            points: totalPoints,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.keepLogin = keepLogin;
// export const updateUserProfile = async (
//   req: Request,
//   res: Response
// ): Promise<any> => {
//   try {
//     if (!req.body) {
//       throw "Input new data to update";
//     }
//     const updateProfile = await prisma.users.update({
//       where: { id: res.locals.data.id },
//       data: {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         profile_picture: `/profile-img/${req.file?.filename}`,
//       },
//     });
//     console.log(updateProfile);
//     const updateUser = prisma.users.update({
//       where: { id: res.locals.data.id },
//       data: {
//         email: req.body.email,
//         password: req.body.password,
//       },
//     });
//     console.log(updateUser);
//     return res.status(200).send({
//       success: true,
//       message: "Update Success",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// };
// export const uploadProfileImgCloud = async (
//   req: Request,
//   res: Response
// ): Promise<any> => {
//   try {
//     console.log("file upload info :", req.file);
//     if (!req.file) {
//       throw "No file attached";
//     }
//     const cloudRes = await cloudUpload(req.file);
//     console.log(cloudRes);
//     await prisma.users.update({
//       data: {
//         profile_picture: cloudRes.secure_url,
//       },
//       where: {
//         id: res.locals.data.id,
//       },
//     });
//     return res.status(200).send({
//       success: true,
//       message: "Uploade Success",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send(error);
//   }
// };
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // ERROR REQUEST CONTAINS UNDEFINED
        console.log(req.body);
        console.log(req.file);
        const { first_name, last_name, email, password } = req.body;
        const file = req.file;
        if (!first_name && !last_name && !email && !password && !file) {
            throw "No data provided to update";
        }
        const updateData = {};
        // Update profile fields if provided
        if (first_name)
            updateData.first_name = first_name;
        if (last_name)
            updateData.last_name = last_name;
        if (email)
            updateData.email = email;
        if (password) {
            const salt = yield (0, bcrypt_1.genSalt)();
            updateData.password = yield (0, bcrypt_1.hash)(password, salt);
        }
        // Upload profile image to cloud if file is provided
        if (file) {
            console.log("file upload info :", file);
            const cloudRes = yield (0, cloudinary_1.cloudUpload)(file);
            console.log(cloudRes);
            updateData.profile_picture = cloudRes.secure_url;
        }
        console.log(updateData);
        // Update user in the database
        const updatedUser = yield prisma_1.default.users.update({
            where: { id: res.locals.data.id },
            data: updateData,
        });
        console.log(updatedUser);
        return res.status(200).send({
            success: true,
            message: "Update Success",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.updateProfile = updateProfile;
