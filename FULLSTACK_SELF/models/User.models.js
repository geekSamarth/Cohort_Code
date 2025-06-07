import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign(
    { id: this._id },
    process.env.ACCESS_JWT_SECRET,
    {
      expiresIn: process.env.ACCESS_JWT_EXPIRY,
    }
  );
  // console.log('accesstoken',accessToken);
  return accessToken;
};

userSchema.methods.generateRefreshToken = function () {
  // console.log('user id',this._id)
  const refreshToken = jwt.sign(
    { id: this._id },
    process.env.REFRESH_JWT_SECRET,
    {
      expiresIn: process.env.REFRESH_JWT_EXPIRY,
    }
  );
  // console.log('refresh token',refreshToken);
  return refreshToken;
};

const User = mongoose.model("User", userSchema);
export default User;
