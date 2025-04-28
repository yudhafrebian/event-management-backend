import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    //read token from req header
    const token = req.header("Authorization")?.split(" ")[1];
    console.log("token:", token);

    if (!token) {
      throw "Token doesn't exist";
    }
    //verify token data
    const checkToken = verify(token, process.env.TOKEN_KEY || "secret key");
    console.log("check token:", checkToken);

    res.locals.data = checkToken;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
