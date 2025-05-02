import { Request, Response } from "express";
import prisma from "../config/prisma";
import { hash, genSalt, compare } from "bcrypt";
import { createToken } from "../utils/createToken";
import { cloudUpload } from "../config/cloudinary";

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    // check if referral code exist
    const referralCode = await prisma.users.findFirst({
      where: { referral_code: req.body.referral_code },
    });
    console.log(referralCode?.referral_code, "code by id", referralCode?.id);

    if (!referralCode) {
      // if referral code not exist
      throw "Invalid referral code";
    }
    const existingUsers = await prisma.users.findUnique({
      where: { email: req.body.email },
    });

    if (existingUsers) {
      throw "Email has been used";
    }

    const salt = await genSalt();
    const hashNewPassword = await hash(req.body.password, salt);

    const newUsers = await prisma.users.create({
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
      const referralPoints = await prisma.points.create({
        data: {
          user_id: referralCode.id,
          points_amount: 10000,
          expire_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), //90 days
        },
      });
      console.log("points added", referralPoints.points_amount);

      // give voucher to user who used the code
      const referralVoucher = await prisma.referral_coupons.create({
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

    const userPoints = await prisma.points.findMany({
      where: { user_id: users?.id },
    });
    const totalPoints = userPoints
      .map((a) => a.points_amount)
      .reduce((a, b) => a + b, 0);

    return res.status(200).send({
      id: users?.id,
      email: users?.email,
      password: users?.password,
      first_name: users?.first_name,
      last_name: users?.last_name,
      profile_picture: users?.profile_picture,
      is_verified: users?.is_verified,
      role: users?.role,
      code: users?.referral_code,
      token: createToken({
        id: users?.id,
        is_verified: users?.is_verified,
        role: users?.role,
      }),
      points: totalPoints,
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

    const userPoints = await prisma.points.findMany({
      where: { user_id: users?.id },
    });
    const totalPoints = userPoints
      .map((a) => a.points_amount)
      .reduce((a, b) => a + b, 0);

    return res.status(200).send({
      id: users?.id,
      email: users?.email,
      password: users?.password,
      first_name: users?.first_name,
      last_name: users?.last_name,
      profile_picture: users?.profile_picture,
      is_verified: users?.is_verified,
      role: users?.role,
      code: users?.referral_code,
      token: createToken({
        id: users?.id,
        is_verified: users?.is_verified,
        role: users?.role,
      }),
      points: totalPoints,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

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

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // ERROR REQUEST CONTAINS UNDEFINED
    console.log(req.body);
    console.log(req.file);

    const { first_name, last_name, email, password } = req.body;
    const file = req.file;

    if (!first_name && !last_name && !email && !password && !file) {
      throw "No data provided to update";
    }

    const updateData: any = {};

    // Update profile fields if provided
    if (first_name) updateData.first_name = first_name;
    if (last_name) updateData.last_name = last_name;
    if (email) updateData.email = email;
    if (password) {
      const salt = await genSalt();
      updateData.password = await hash(password, salt);
    }

    // Upload profile image to cloud if file is provided
    if (file) {
      console.log("file upload info :", file);
      const cloudRes = await cloudUpload(file);
      console.log(cloudRes);
      updateData.profile_picture = cloudRes.secure_url;
    }

    console.log(updateData);

    // Update user in the database
    const updatedUser = await prisma.users.update({
      where: { id: res.locals.data.id },
      data: updateData,
    });

    console.log(updatedUser);

    return res.status(200).send({
      success: true,
      message: "Update Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
