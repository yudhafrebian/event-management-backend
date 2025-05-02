import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { getTransactionList, handleCheckout, transactionDetail, updateTransactionStatus, uploadProof } from "../controllers/transaction.controller";
import { uploaderMemory } from "../middleware/uploader";

const route = Router();

route.get("/list", verifyToken, getTransactionList)
route.get("/:invoice_id", transactionDetail)
route.post("/create", verifyToken, handleCheckout)
route.patch("/status", updateTransactionStatus)
route.patch("/payment/:invoice_id", verifyToken, uploaderMemory().single("payment_proof"), uploadProof)

export default route