import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("MongoDB connection established !!");
    });
  } catch (error) {
    console.log("Error while connecting to the MongoDB!!", eror);
  }
};

export default dbConnect;
