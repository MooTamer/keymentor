import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import wpmRoute from "./routes/wpmRoute.js";
import { wpmModel } from "./models/wpmModel.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api", wpmRoute);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
