import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { handleCheckout, updateTransactionStatus } from "../controllers/transaction.controller";

const route = Router();

route.post("/create", verifyToken, handleCheckout)
route.patch("/status", updateTransactionStatus)

export default route