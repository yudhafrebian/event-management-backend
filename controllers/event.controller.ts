import { Request, Response } from "express";
import prisma from "../config/prisma";
import { Category } from "@prisma/client";

export const getEvents = async (req: Request, res: Response): Promise<any> => {
  try {
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

    if(category){
      conditions.push({
        category: {equals: category as string},
      })
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
        about: true,
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
export const a = async (req: Response, res: Response): Promise<any> => {
  try {
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
}