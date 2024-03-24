import express from "express";
import { getSchedules } from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/", getSchedules);

export default router;
