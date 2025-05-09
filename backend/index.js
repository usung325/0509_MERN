import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(5001, () => {
  connectDB();
  console.log("server started @ http://localhost:5001");
});
