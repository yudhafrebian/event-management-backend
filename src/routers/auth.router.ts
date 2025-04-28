import { Router } from "express";
import { keepLogin, register, signIn } from "../controllers/auth.controller";
import { verifyToken } from "../middleware/verifyToken";

const route = Router();

route.post("/register", register);
route.post("/signin", signIn);
route.get("/keepLogin", verifyToken, keepLogin);

export default route;
