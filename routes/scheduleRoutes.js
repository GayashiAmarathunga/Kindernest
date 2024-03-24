import express from "express";
import {
  addSchedule,
  getScheduleById,
  getSchedules,
} from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/schedules", getSchedules);
router.get("/schedules/:id", getScheduleById);

router.post("/schedules", addSchedule);

export default router;
