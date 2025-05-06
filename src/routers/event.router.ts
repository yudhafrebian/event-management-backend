import { Router } from "express";
import {
  createEvent,
  detailEvents,
  detailTicket,
  getAllCategory,
  getAllCities,
  getAttendeeList,
  getEvents,
  updateEvent,
} from "../controllers/event.controller";
import { verifyToken } from "../middleware/verifyToken";
import { uploaderMemory } from "../middleware/uploader";

const route = Router();

route.get("/all", getEvents);
route.get("/categories", getAllCategory);
route.get("/locations", getAllCities);
route.get("/:title/transaction/:type_name", detailTicket);
route.get("/:title", detailEvents);
route.get("/attendee", getAttendeeList);
route.patch(
  "/update/:id",
  verifyToken,
  uploaderMemory().single("event_picture"),
  updateEvent
);
route.post(
  "/create",
  verifyToken,
  uploaderMemory().single("event_picture"),
  createEvent
);

export default route;
