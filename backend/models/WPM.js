import mongoose from "mongoose";

const WPMSchema = new mongoose.Schema({
  Level: {
    type: Number,
    required: true,
  },
  WPM: {
    type: Number,
    required: true,
  },
});

export const WPM = mongoose.model("WPM", WPMSchema);
