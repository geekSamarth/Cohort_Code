import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnect from "./utils/dbConnect.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "process.env.BASE_URL",
    methods: ["GET,POST,DELETE"],
    allowedHeaders: ["Authorization", "Content-type"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// calling the database to setup the connection with the application
dbConnect();

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

// declaring routes

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});
