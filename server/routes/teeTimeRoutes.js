import express from "express";
import { getTeeTimes, createTeeTime, joinTeeTime, waitlistTeeTime, updateTeeTime, deleteTeeTime } from "../controllers/teeTimeController.js";

const router = express.Router();

router.get("/", getTeeTimes);
router.post("/", createTeeTime);
router.put("/:id/join", joinTeeTime);
router.put("/:id/waitlist", waitlistTeeTime);
router.put("/:id", updateTeeTime);
router.delete("/:id", deleteTeeTime);

export default router;