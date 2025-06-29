import {
  createTask,
  deleteTask,
  updateTask,
  getMyTask,
  getSingleTask,
} from "../controller/taskController.js";
import express from "express";

import { isAuthenticated } from "../midddlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticated, createTask);
router.delete("/delete/:id", isAuthenticated, deleteTask);
router.put("/update/:id", isAuthenticated, updateTask);
router.get("/mytask", isAuthenticated, getMyTask);
router.get("/single/:id", isAuthenticated, getSingleTask);

export default router;
