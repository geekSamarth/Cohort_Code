import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.routes.js";
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET,POST,DELETE,OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "text checked",
  });
});
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
