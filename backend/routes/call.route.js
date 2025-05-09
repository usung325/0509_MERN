import express from "express";
import mongoose from "mongoose";
import Call from "../models/call.model.js";
import { getCalls, createCall } from "../controllers/call.controller.js";

const router = express.Router();

router.get("/", getCalls);

router.post("/", createCall);

export default router;
