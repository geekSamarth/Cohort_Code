import express from "express";
import {
  getUserProfile,
  login,
  registerUser,
  verifyUser,
  logout,
} from "../controllers/auth.controllers.js";
import isLoggedIn from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);

// secured routes or protected routes

router.post("/logout", isLoggedIn, logout);
router.get("/profile", isLoggedIn, getUserProfile);
export default router;
