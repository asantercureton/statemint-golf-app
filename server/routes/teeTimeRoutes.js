import express from "express";
import { getTeeTimes, createTeeTime, joinTeeTime } from "../controllers/teeTimeController.js";

const router = express.Router();

router.get("/", getTeeTimes);
router.post("/", createTeeTime);
router.put("/:id/join", joinTeeTime);

export default router;