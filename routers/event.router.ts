import { Router } from "express";
import { detailEvents, getAllCategory, getEvents } from "../controllers/event.controller";

const route = Router();

route.get("/all", getEvents);
route.get("/categories", getAllCategory)
route.get("/:title", detailEvents);

export default route;
