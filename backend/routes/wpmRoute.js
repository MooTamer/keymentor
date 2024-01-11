import express from "express";
import { WPM } from "../models/wpmModel.js";

const router = express.Router();

router.post("/wpm", (req, res) => {
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
  export default router;