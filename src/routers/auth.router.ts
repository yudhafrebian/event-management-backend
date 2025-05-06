import { Router } from "express";
import {
  keepLogin,
  register,
  signIn,
  updateProfile,
  verifyAccount,
} from "../controllers/auth.controller";
import { verifyToken } from "../middleware/verifyToken";
import { uploaderMemory } from "../middleware/uploader";

const route = Router();

route.post("/register", register);
route.post("/signin", signIn);
route.get("/keepLogin", verifyToken, keepLogin);
route.patch("/verify", verifyToken, verifyAccount);
route.patch(
  "/updateProfile",
  verifyToken,
  uploaderMemory().single("img"),
  updateProfile
);

export default route;
