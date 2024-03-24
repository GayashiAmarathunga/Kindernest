import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  getTaskbyId,
  updateTask,
} from "../controllers/taskEventController.js";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskbyId);

router.post("/tasks", addTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
