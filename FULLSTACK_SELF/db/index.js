import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connection to MongoDB Successful");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", error);
    });
};

export default dbConnect;
