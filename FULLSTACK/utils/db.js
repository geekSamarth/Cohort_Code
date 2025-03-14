import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected successfully to mongodb");
    })
    .catch((err) => {
      console.log("Error connecting to mongodb");
    });
};

export default dbConnect;
