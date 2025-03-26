import express from "express";
import {
  forgotPassword,
  login,
  logout,
  registerUser,
  resetPassword,
  userProfile,
  verifyUser,
} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/userprofile", isLoggedIn, userProfile);
router.get("/logout", isLoggedIn, logout);
router.post("forgetpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
export default router;
