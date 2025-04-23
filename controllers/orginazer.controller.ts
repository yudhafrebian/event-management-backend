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
      where: { organizer_name: req.params.name },
      include: {
        users: true,
      },
    });

    const detailEvents = await prisma.events.findMany({
      where: { organizer_id: detail?.id},
      include: {
        ticket_types: true,
      },
    });

    const totalEvents = await prisma.events.count({
      where: { organizer_id: detail?.id },
    });
    res.status(200).send({ detail, detailEvents, totalEvents });
  } catch (error) {
    res.status(500).send(error);
  }
};
