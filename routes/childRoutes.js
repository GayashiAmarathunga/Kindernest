import express from "express";
import {
  deleteChild,
  getChild,
  getChildren,
} from "../controllers/childController.js";

const router = express.Router();

router.get("/", getChildren);

router.get("/:id", getChild);

router.delete("/:id", deleteChild);

export default router;
