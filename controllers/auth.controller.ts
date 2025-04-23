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

    const salt = await genSalt();
    const hashNewPassword = await hash(req.body.password, salt);
    console.log(req.body);

    const newUsers = await prisma.users.create({
      data: {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: hashNewPassword,
        referral_code: req.body.referral_code,
      },
    });
    console.log(newUsers);

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
      token: createToken({ id: users?.id }),
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
    //
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
