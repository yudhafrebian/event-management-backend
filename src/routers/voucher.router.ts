import { Router } from "express";
import {
  createVoucher,
  deleteVoucher,
  getActiveVoucher,
  getEvent,
  getVoucher,
} from "../controllers/voucher.controller";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.get("/event", verifyToken, getEvent);
route.get("/list", verifyToken, getActiveVoucher);
route.get("/:event_id/:code", getVoucher);
route.post("/create", verifyToken, createVoucher);
route.delete("/delete/:id", verifyToken, deleteVoucher);

export default route;
