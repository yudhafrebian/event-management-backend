import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getEvents = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await prisma.events.findMany({
        include: {
            ticket_types: true
        }
    });

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const detailEvents = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const detail = await prisma.events.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        organizer_id:true,
        event_picture:true,
        title:true,
        about:true,
        location:true,
        start_date:true,
        end_date:true,
        category:true,
        organizer:true,
        ticket_types: true
      }
    });

    const quota = detail?.ticket_types.reduce((acc:number, cur:any) => acc + cur.quota, 0);
    const price = detail?.ticket_types.map((item:any) => item.price).sort((a:number,b:number) => a - b);

    if (!detail) {
      throw "Event not found";
    }

    res.status(200).send({detail, quota, price});
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
