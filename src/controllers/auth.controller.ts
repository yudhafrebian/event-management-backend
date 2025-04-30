import { Request, Response } from "express";
import prisma from "../config/prisma";
import { hash, genSalt, compare } from "bcrypt";
import { createToken } from "../utils/createToken";

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const existingUsers = await prisma.users.findUnique({
      where: { email: req.body.email },
    });

    if (existingUsers) {
      throw "Email has been used";
    }

    const referralCode = await prisma.referral_coupons.findFirst({
      // ERROR findFirst is reading old data
      where: { code: req.body.referral_code },
    });
    console.log(referralCode);

    if (!referralCode) {
      throw "Invalid referral code";
    }
    // check if code is used
    const checkCode = await prisma.referral_coupons.findUnique({
      where: { id: referralCode.id },
    });

    const salt = await genSalt();
    const hashNewPassword = await hash(req.body.password, salt);
    console.log(req.body);

    const newUsers = await prisma.users.create({
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
    const referralPoints = await prisma.points.create({
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
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const signIn = async (req: Request, res: Response): Promise<any> => {
  try {
    console.log(req.body.email);

    const users = await prisma.users.findUnique({
      where: { email: req.body.email },
    });

    if (!users) {
      throw "Invalid email";
    }

    const isValidPassword = await compare(req.body.password, users.password);

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
      token: createToken({
        id: users.id,
        is_verified: users.is_verified,
        role: users.role,
      }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const keepLogin = async (req: Request, res: Response): Promise<any> => {
  try {
    console.log(res.locals.data.id);
    const users = await prisma.users.findUnique({
      where: { id: res.locals.data.id },
    });

    return res.status(200).send({
      email: users?.email,
      first_name: users?.first_name,
      last_name: users?.last_name,
      is_verified: users?.is_verified,
      role: users?.role,
      token: createToken({
        id: users?.id,
        is_verified: users?.is_verified,
        role: users?.role,
      }),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    if (!req.body) {
      throw "No data to update";
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
