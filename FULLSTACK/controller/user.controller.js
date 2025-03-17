import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
export const registerUser = async (req, res) => {
  // get data from user
  // validate that data
  // check if user already exists
  // create a user in database
  // create a verification token
  // save that token in database
  // send token as email to user
  // send success status to user

  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;
    await user.save();

    // send email

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: User.email, // list of receivers
      subject: "Verify your email", // Subject line
      text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${User.verificationToken}`,
    };
    await transporter.sendMail(mailOption);
    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};
