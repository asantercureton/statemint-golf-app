import express from "express";
import { getBadges, createBadge, updateBadge, deleteBadge,getBadgeById } from "../controllers/badgeController.js";

const router = express.Router();

router.get("/", getBadges);
router.post("/", createBadge);
router.get("/:id", getBadgeById);
router.put("/:id", updateBadge);
router.delete("/:id", deleteBadge);

export default router;