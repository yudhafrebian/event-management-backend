import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getVoucher = async (req: Request, res: Response): Promise<any> => {
  try {

    const response = await prisma.vouchers.findFirst({
      where: { code: req.params.code, event_id: parseInt(req.params.event_id) },
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

export const createVoucher = async (req: Request, res: Response): Promise<any> => {
  try {
    const {event_name} =req.body
    const event = await prisma.events.findUnique({
      where: { title: event_name },
    })
    if(!event) {
      return res.status(404).send({ message: "Event not found" });
    }
    const response = await prisma.vouchers.create({
      data: {
        event_id: event.id,
        code: req.body.code,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        disc_amount: req.body.disc_amount,
        quota: req.body.quota,
      },
    });
    

    res.status(201).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const getEvent = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = res.locals.data.id;
    console.log("userId", userId);

    const organizer = await prisma.organizers.findFirst({
      where: { user_id: userId },
    });
    console.log("organizer", organizer);

    if (!organizer) {
      return res.status(404).send({ message: "Organizer not found" });
    }

    const response = await prisma.events.findMany({
      where: { organizer_id: organizer.id },
    });

    res.status(200).send({
      message: "Events retrieved successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error in getEvent:", error);
    res.status(500).send({ message: "Server error", error });
  }
};
