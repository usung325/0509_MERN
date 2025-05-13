import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import callRoutes from "./routes/call.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json()); //middleware. allows us to accept JSON data in the req.body

app.use("/api/calls", callRoutes);

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.listen(PORT, () => {
  connectDB();
  console.log(`server started @ http://localhost:${PORT}`);
});
