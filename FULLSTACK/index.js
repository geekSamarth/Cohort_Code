import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./utils/db.js";

// import all routes

import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET,POST,DELETE,OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Cohort!");
});
app.get("/samarth", (req, res) => {
  res.send("samarth");
});
app.get("/gaurav", (req, res) => {
  res.send("gaurav");
});
// connect to db
dbConnect();

// user routes

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
