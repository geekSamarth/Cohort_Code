import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    verificationToken: String,
    ResetPasswordToken: String,
    ResetPasswordExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
