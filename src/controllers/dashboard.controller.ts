import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getEvents = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = res.locals.data.id;

    const organizer = await prisma.organizers.findFirst({
      where: { user_id: userId },
    });
    console.log(userId);

    console.log("organizer id", organizer);

    const events = await prisma.events.findMany({
      where: { organizer_id: organizer?.id },
      include: { ticket_types: true },
    });

    res.status(200).send(events);
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = async (
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
      where: { organizer_id: detail?.id },
      include: {
        ticket_types: true,
      },
    });

    const update = await prisma.events.update({
      where: { title: req.params.title },
      data: {
        event_picture: req.body.event_image,
        title: req.body.title,
        location: req.body.location,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        category: req.body.category,
        description: req.body.description,
      },
    });
    res.status(200).send({ update });
  } catch (error) {
    res.status(500).send(error);
  }
};
