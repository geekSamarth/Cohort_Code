import User from "../models/User.models.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  // extracting user info from the req.body
  const { email, password, name } = req.body;
  // do some basic validation on the user info fetched from the req.body
  try {
    if (!email || !password || !name) {
      res.status(400).json({
        success: false,
        message: "All fields are required!!",
      });
    }
    // check whether the password is more than 6 character long
    if (password.length < 6) {
      res.status(400).json({
        message: "password should be more than 6 characters",
      });
    }
    // check whether the user is already existed or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).json({
        success: false,
        message: "User already exists, please login!!",
      });
    }

    // creating a new user in the database
    const user = await User.create({
      email,
      password,
      name,
    });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not registered",
      });
    }

    // create a verification token and save it in the database
    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = new Date.now() + 10 * 60 * 1000; //for 10 minutes
    console.log(token);
    user.verificationToken = token;
    user.verificationTokenExpiry = tokenExpiry;
    await user.save();

    // send the email to user to verify the email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false,
      auth: {
        yser: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDERMAIL,
      to: user.email,
      subject: "Please verify your email",
      text: `Please click on the below link to verify your email, the link is valid for 10 minutes only.
      ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
    };
    await transporter.sendMail(mailOptions);

    // finally sending the successfull user registration message to the frontend

    res.status(201).json({
      success: true,
      message: "User registered successfully!!, check your email to verify.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "User not registered!!",
    });
  }
};

export const verifyUser = async (req, res) => {
  // extract token from the url using req.params
  const { token } = req.params;
  console.log(token);
  if (!token) {
    res.status(400).json({
      success: false,
      message: "Invalid Token!",
    });
  }

  const user = await User.findOne({
    verificationToken: token,
    verificationTokenExpiry: { $gt: Date.now() },
  });
  console.log(user);
  if (!user) {
    res.status(400).json({
      success: false,
      message: "Invalid Token",
    });
  }
  // set is verified field to true
  user.isVerified = true;

  // set the verificationToken and verificationTokenExpiry field to undefined in the db and save it
  user.verificationToken = undefined;
  user.verificationTokenExpiry = undefined;
  await user.save();

  res.status(201).json({
    success: true,
    message: "User verified successfully!!",
  });
};

export const login = async (req, res) => {
  // collecting data from the req.body
  const { email, password } = req.body();
  // validate the data
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    // finding if user exists or not
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not exists.",
      });
    }
    // check if the user is verified or not
    if (!user.isVerified) {
      res.status(400).json({
        success: false,
        message: "please verify yourself first.",
      });
    }
    // checking for the password to be correct or not
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      res.status(400).json({
        success: false,
        message: "Your password is incorrect",
      });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);
    res.status(201).json({
      success: true,
      message: "User logged in successfully!",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
      message: "Login Failed!",
    });
  }
};
