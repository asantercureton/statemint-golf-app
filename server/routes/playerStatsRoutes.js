import express from "express";
import { getPlayerStats, createPlayerStats, updatePlayerStats, deletePlayerStat, getPlayerStatsById } from "../controllers/playerStatsController.js";

const router = express.Router();

router.get("/", getPlayerStats);
router.post("/", createPlayerStats);
router.get("/:id", getPlayerStatsById);
router.put("/:id", updatePlayerStats);
router.delete("/:id", deletePlayerStat);

export default router;