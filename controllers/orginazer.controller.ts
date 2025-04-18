import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getAllOrganizer = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await prisma.organizers.findMany({
      include: {
        users: true,
      },
    });

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getDetailOrganizer = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const detail = await prisma.organizers.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        users: true,
      },
    });

    const detailEvents = await prisma.events.findMany({
      where: { organizer_id: parseInt(req.params.id) },
      include: {
        ticket_types: true,
      },
    })
    res.status(200).send({detail, detailEvents});
  } catch (error) {
    res.status(500).send(error);
  }
};
