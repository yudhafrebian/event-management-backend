import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { getOrganizerTransaction, getStatus, getTransactionList, getUserPoints, handleCheckout, transactionDetail, updateTransactionStatus, uploadProof } from "../controllers/transaction.controller";
import { uploaderMemory } from "../middleware/uploader";

const route = Router();

route.get("/status", getStatus)
route.get("/list", verifyToken, getTransactionList)
route.get("/points", verifyToken, getUserPoints)
route.get("/organizer/list", verifyToken, getOrganizerTransaction)
route.get("/:invoice_id", transactionDetail)
route.post("/create", verifyToken, handleCheckout)
route.patch("/status", verifyToken, updateTransactionStatus)
route.patch("/payment/:invoice_id", verifyToken, uploaderMemory().single("payment_proof"), uploadProof)

export default route