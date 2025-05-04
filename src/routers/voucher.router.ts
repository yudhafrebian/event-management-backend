import { Router } from "express";
import { getVoucher } from "../controllers/voucher.controller";

const route = Router();

route.get("/:code", getVoucher)

export default route