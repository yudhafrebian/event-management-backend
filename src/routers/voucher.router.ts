import { Router } from "express";
import { createVoucher, getEvent, getVoucher } from "../controllers/voucher.controller";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.get("/event", verifyToken, getEvent)
route.get("/:event_id/:code", getVoucher)
route.post("/create", verifyToken, createVoucher)

export default route