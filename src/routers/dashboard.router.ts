import { Router } from "express";
import { getEvents, updateEvent } from "../controllers/dashboard.controller";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.get("/all", verifyToken, getEvents);
route.patch("/update", updateEvent);

export default route;
