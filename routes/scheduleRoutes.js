import express from "express";
import {
  addSchedule,
  deleteSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
} from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/schedules", getSchedules);
router.get("/schedules/:id", getScheduleById);

router.post("/schedules", addSchedule);

router.put("/schedules/:id", updateSchedule);

router.delete("/schedules/:id", deleteSchedule);

export default router;
