import User from "../models/User.model.js";
import crypto from "crypto";
export const registerUser = async (req, res) => {
  // sending mail for verification using token
  // send response back to the user

  // collect data from req.body

  const { email, password, name } = req.body;

  // validate that data

  if (!name || !email || !password) {
    res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  } else if (password.length < 8 || !email.includes("@")) {
    res.status(400).json({
      success: false,
      message: "your password must have 8 character",
    });
  }

  // check if user already exists or not

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({
      success: false,
      message: "User already exists !",
    });
  }

  // if new user that create it in the database

  const user = await User.create({
    name,
    email,
    password,
  });
  if (!user) {
    res.status(400).json({
      success: false,
      message: "User registration failed !",
    });
  }

  // create a verification token
  const token = crypto.randomBytes(32).toString("hex");
  console.log(token);

  // save that token in database
  user.verificationToken = token;

  
};
