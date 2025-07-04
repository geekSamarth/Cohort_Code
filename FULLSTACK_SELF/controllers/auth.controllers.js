import User from "../models/User.models.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// controller for generating access and refresh token using user id

async function generateAccessAndRefreshToken(userId, req, res) {
  // console.log(userId)
  try {
    //  more secure
    const user = await User.findById(userId); // extra db call
    // console.log(user)
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save();
    return { accessToken, refreshToken, user };
  } catch (error) {
    return res.status(400).json({
      message: "refresh token error",
    });
  }
}

// controller for generating new refresh token

export const getNewRefreshToken = async (req, res) => {
  try {
    // checking for refresh token from cookies
    const incomingRefreshToken = req.cookies?.refreshToken;
    if (!incomingRefreshToken) {
      res.status(401).json({
        success: false,
        message: "missing refresh token",
      });
    }
    // extracting user info by decoding the incoming refresh token from cookies
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_JWT_SECRET
    );
    console.log(decodedToken);

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not found, in refresh token",
      });
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(decodedToken?._id);

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", newRefreshToken, cookieOptions);
    res.status(200).json({
      success: true,
      accessToken,
      message: "new access token generated",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "failed to refresh token",
      error: error.message,
    });
  }
};

//  controller for registering a new user

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be 8 characters long",
    });
  }
  try {
    // checking for existing user or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists, please login!",
      });
    }
    // create a new user in the database
    const user = await User.create({ name, email, password });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User registration operation failed!",
      });
    }

    // creating a token to send in the mail for user verification process
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;
    await user.save();

    // using mail service to send the verification mail to the user

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDERMAIL,
      to: user.email,
      subject: "Please verify your email",
      text: `Please click on the below link to verify your email, the link is valid for 10 minutes only.
      ${process.env.BASE_URL}:${process.env.PORT}/api/v1/users/verify/${token}`,
    };

    // console.log(mailOptions);

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "User created successfully, please verify your email first! ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
      message: "User registration failed!!",
    });
  }
};

// controller for verifying a user

export const verifyUser = async (req, res) => {
  // extract token from the url using req.params
  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Token not found!",
    });
  }

  const user = await User.findOne({
    verificationToken: token,
  });
  console.log(user);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid Token",
    });
  }
  // set is verified field to true
  user.isVerified = true;

  // set the verificationToken and verificationTokenExpiry field to undefined in the db and save it
  user.verificationToken = undefined;
  await user.save();

  return res.status(201).json({
    success: true,
    message: "User verified successfully!!",
  });
};

// controller for user login

export const login = async (req, res) => {
  // collecting data from the req.body
  const { email, password } = req.body;
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
      return res.status(400).json({
        success: false,
        message: "user not exists.",
      });
    }
    // check if the user is verified or not
    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "please verify yourself first.",
      });
    }
    // checking for the password to be correct or not
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Your password is incorrect",
      });
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );
    // console.log("login tokens", accessToken, refreshToken);
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res
      .cookie("accesstoken", accessToken, cookieOptions)
      .cookie("refreshtoken", refreshToken, cookieOptions)
      .status(201)
      .json({
        success: true,
        message: "User logged in successfully!",
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

// controller for user logout

export const logout = async (req, res) => {
  try {
    const id = req.user.id;
    console.log(id)
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please Login first",
      });
    }
    user.refreshToken = undefined;
    await user.save();

    // deleting cookies containing the tokens
    if (!req.cookies?.refreshToken || !req.cookies?.accessToken) {
      return res.status(400).json({
        success: false,
        message: "User not logged In",
      });
    }
    return req
    .clearCookie("accesstoken")
    .clearCookie("refreshToken")
    .status(200)
    .json({
      success: true,
      message: "User logged out successfully!!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      message: "logout failed!",
    });
  }
};

// controller for fetching the user profile

export const getUserProfile = async (req, res) => {
  // get user if from req.user

  try {
    const id = req.user.id;
    const user = await User.findById(id).select("-password");
    console.log("user info", user);
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    res.status(201).json({
      success: true,
      message: "Fetching user information",
      user,
    });
  } catch (error) {
    console.log("error while fetching user", error);
    res.status(400).json({
      success: false,
      message: "User Profile fetching failed!",
    });
  }
};

// controller for changing the old password

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  // check if user provide both the old and the new password

  if (!oldPassword || !newPassword) {
    res.status(400).json({
      success: false,
      message: "All fields are necessary!",
    });
  }
  try {
    const id = req.user.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({
        success: false,
        error,
        message: "Please login first to change the password",
      });
    }
    // comapre the old password from db and the user provided

    const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatched) {
      res.status(400).json({
        success: false,
        error,
        message: "Old password is wrong",
      });
    }

    // setting the new password for the user
    user.password = newPassword;
    await user.save();
    res.status(201).json({
      success: true,
      message: "user password changed",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "changing password operation failed!!",
      error,
    });
  }
};

// controller for forgot password functionality

export const forgotPassword = async (req, res) => {
  // fetching the user email from the req.body
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not found",
      });
      // generating a token for sending via mail to the user

      const forgotLinkToken = await crypto.randomBytes(32).toString("hex");
      user.resetPasswordToken = forgotLinkToken;
      user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
      await user.save();

      // appending a mail service to send a mail to the user

      const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        secure: false,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.MAILTRAP_SENDERMAIL,
        to: user.email,
        subject: "Reset your password",
        text: `Please click on the below link to reset your password, the link is valid for only 10 minutes.
      ${process.env.BASE_URL}/api/v1/users/reset-password/${forgotLinkToken}`,
      };
      await transporter.sendMail(mailOptions);
      res.status(201).json({
        success: true,
        message: "Password reset link sent to your registered email",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "forgot password operation failed",
      error,
    });
  }
};

// controller for reset password functionality

export const resetPassword = async (req, res) => {
  // extracting params from url using req.params
  const { token } = req.params;
  const { password } = req.body;

  if (!password || !token) {
    res.status(400).json({
      success: false,
      message: "password is required",
    });
  }

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not found!",
        error,
      });
    }
    user.isVerified = true;
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.status(201).json({
      success: true,
      message: "User password reset successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "reset password operation failed",
      error,
    });
  }
};
