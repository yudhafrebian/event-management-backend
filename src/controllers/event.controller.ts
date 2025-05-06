import { Request, Response } from "express";
import prisma from "../config/prisma";
import { Category } from "../../prisma/generated/client";
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
        description: true,
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
    const { title, description, start_date, end_date, location, category } =
      req.body;

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

export const detailTicket = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { title, type_name } = req.params;
    const detail = await prisma.ticket_types.findFirst({
      where: {
        type_name: { equals: type_name },
        events: { title: { equals: title } },
      },
      include: {
        events: true,
      },
    });
    if (!detail) {
      return res
        .status(404)
        .send({ message: "Ticket not found for this event" });
    }

    res.status(200).send(detail);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateEvent = async (
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
      ticket_types,
    } = req.body;

    console.log("incoming data", req.body);

    // Find the organizer based on the user ID
    const organizer = await prisma.organizers.findFirst({
      where: { user_id: res.locals.data.id },
    });

    if (!organizer) {
      throw "Organizer not found";
    }

    // Find the event to update
    const event = await prisma.events.findUnique({
      where: { title: req.params.title },
    });

    if (!event) {
      throw "Event not found";
    }

    // Prepare the update data
    const updateData: any = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (start_date) updateData.start_date = new Date(start_date);
    if (end_date) updateData.end_date = new Date(end_date);
    if (location) updateData.location = location;
    if (category) updateData.category = category;

    // Handle file upload if a new file is provided
    // if (req.file) {
    //   const upload = await cloudUpload(req.file);
    //   updateData.event_picture = upload.secure_url;
    // }

    // // Update the event in the database
    // const updatedEvent = await prisma.events.update({
    //   where: { id: event.id },
    //   data: updateData,
    // });

    // // Update ticket types if provided
    // if (ticket_types) {
    //   const parsedTicketTypes = JSON.parse(ticket_types);
    //   await prisma.ticket_types.deleteMany({
    //     where: { event_id: event.id },
    //   });
    //   await prisma.ticket_types.createMany({
    //     data: parsedTicketTypes.map((ticket: any) => ({
    //       ...ticket,
    //       event_id: event.id,
    //     })),
    //   });
    // }

    // res.status(200).send({ success: true, updatedEvent });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to update event", details: error });
  }
};

export const getAttendeeList = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { event_id } = req.params;

    // Validate event_id
    if (!event_id) {
      return res.status(400).send({ error: "Event ID is required" });
    }

    // Find transactions with the given event_id
    const transactions = await prisma.transactions.findMany({
      where: { event_id: parseInt(event_id, 10) },
      select: { user_id: true },
    });

    if (!transactions || transactions.length === 0) {
      return res
        .status(404)
        .send({ message: "No attendees found for this event" });
    }

    // Extract unique user IDs
    const userIds = [
      ...new Set(transactions.map((transaction) => transaction.user_id)),
    ];

    // Fetch user details for the retrieved user IDs
    const users = await prisma.users.findMany({
      where: { id: { in: userIds } },
      select: { id: true, first_name: true, last_name: true },
    });

    // Format the attendee list
    const attendeeList = users.map((user) => ({
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
    }));

    res.status(200).send({ attendees: attendeeList });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: "Failed to fetch attendee list", details: error });
  }
};
