import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { getTransactionList, handleCheckout, updateTransactionStatus } from "../controllers/transaction.controller";

const route = Router();

route.get("/list", verifyToken, getTransactionList)
route.post("/create", verifyToken, handleCheckout)
route.patch("/status", updateTransactionStatus)

export default route