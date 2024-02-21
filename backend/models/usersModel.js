import mongoose from "mongoose";
import { WPM } from "./wpmModel.js";

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  WPM: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WPM",
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const WPM = mongoose.model("WPM", WPMSchema);
