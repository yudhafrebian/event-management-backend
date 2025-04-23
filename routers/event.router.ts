import { Router } from "express";
import { detailEvents, getAllCategory, getAllCities, getEvents } from "../controllers/event.controller";

const route = Router();

route.get("/all", getEvents);
route.get("/categories", getAllCategory)
route.get("/locations", getAllCities)
route.get("/:title", detailEvents);

export default route;
