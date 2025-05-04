import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getVoucher = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await prisma.vouchers.findFirst({
      where: { code: req.params.code },
    });

    if (!response) {
      return res.status(404).send({ message: "Voucher not found" });
    }

    const now = new Date();

    if (response.start_date > now) {
      return res.status(400).send({ message: "Voucher not found" });
    }

    if (response.end_date < now) {
      return res.status(400).send({ message: "Voucher expired" });
    }

    if(response.quota === 0) {
      return res.status(400).send({ message: "Voucher out of stock" });
    }

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
