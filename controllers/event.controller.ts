import { Request, Response } from "express";
import prisma from "../config/prisma";
import { Category } from "@prisma/client";
import { cloudUpload } from "../config/cloudinary";

export const getEvents = async (req: Request, res: Response): Promise<any> => {
  try {
    console.log(res.locals.data);
    const { search, location, from, to, category } = req.query;

    const conditions: any[] = [];

    if (search) {
      conditions.push({
        OR: [
          {
            title: { contains: search as string, mode: "insensitive" },
          },
          {
            description: { contains: search as string, mode: "insensitive" },
          },
        ],
      });
    }

    if (category) {
      conditions.push({
        category: { equals: category as string },
      });
    }

    if (location) {
      conditions.push({
        location: { contains: location as string, mode: "insensitive" },
      });
    }

    if (from || to) {
      const dateFilter: any = {};
      if (from) dateFilter.gte = new Date(from as string);
      if (to) dateFilter.lte = new Date(to as string);

      conditions.push({ start_date: dateFilter });
    }

    const where = conditions.length > 0 ? { AND: conditions } : {};

    const response = await prisma.events.findMany({
      where,
      include: {
        ticket_types: true,
      },
    });

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const detailEvents = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const detail = await prisma.events.findUnique({
      where: { title: req.params.title },
      select: {
        id: true,
        organizer_id: true,
        event_picture: true,
        title: true,
        location: true,
        start_date: true,
        end_date: true,
        category: true,
        organizer: true,
        ticket_types: true,
      },
    });

    const quota = detail?.ticket_types.reduce(
      (acc: number, cur: any) => acc + cur.quota,
      0
    );
    const price = detail?.ticket_types
      .map((item: any) => item.price)
      .sort((a: number, b: number) => a - b);

    if (!detail) {
      throw "Event not found";
    }

    res.status(200).send({ detail, quota, price });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const createEvent = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {
      title,
      description,
      start_date,
      end_date,
      location,
      category,
    } = req.body;

    const organizer = await prisma.organizers.findFirst({
      where: { user_id: res.locals.data.id },
    });

    if (!organizer) {
      throw "Organizer not found";
    }
    if (!req.file) {
      throw "File not found";
    }
    const ticket_types = JSON.parse(req.body.ticket_types);
    const upload = await cloudUpload(req.file);

    const newEvent = await prisma.events.create({
      data: {
        organizer_id: organizer.id,
        title,
        description,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        location,
        category,
        event_picture: upload.secure_url,
        ticket_types: {
          createMany: {
            data: ticket_types,
          },
        },
      },
    });
    res.status(201).send(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const v = async (req: Response, res: Response): Promise<any> => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = Object.values(Category);
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllCities = async (req: Request, res: Response) => {
  try {
    const response = await prisma.cities.findMany({
      where: { country: "Indonesia" },
      orderBy: {
        city: "asc",
      },
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const detailTicket = async (req: Request, res: Response):Promise<any> => {
  try {
      const detail = await prisma.ticket_types.findFirst({
          where:{type_name: req.params.type_name},
          include:{
              events: true
          }
      })

      res.status(200).send(detail);
  } catch (error) {
      res.status(500).send(error);
  }
};