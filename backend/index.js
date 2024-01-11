import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { WPM } from "./models/WPM.js";
const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
app.post("/wpm", (req, res) => {
  const wpm = new WPM({
    Level: req.body.Level,
    WPM: req.body.WPM,
  });
  wpm
    .save()
    .then(() => {
      res.status(201).send("WPM saved");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error");
    });
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
