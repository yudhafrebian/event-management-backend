import { Router } from "express";
import { detailEvents, getEvents } from "../controllers/event.controller";

const route = Router();

route.get("/all", getEvents);
route.get("/:id", detailEvents);

export default route;
