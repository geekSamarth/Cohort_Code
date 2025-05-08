import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnect from "./db/index.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

// connect to db
dbConnect();

// defining routes
app.use("/api/v1/users", userRoutes);
app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});
