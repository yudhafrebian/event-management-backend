import { Router } from "express";
import { getAllOrganizer, getDetailOrganizer } from "../controllers/orginazer.controller";


const route = Router()

route.get("/all", getAllOrganizer)
route.get("/:name", getDetailOrganizer)

export default route