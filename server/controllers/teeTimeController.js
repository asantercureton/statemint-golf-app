import TeeTime from "../models/TeeTime.js";

export const getTeeTimes = async (req, res) => {
  const teeTimes = await TeeTime.find();
  res.json(teeTimes);
};

export const createTeeTime = async (req, res) => {
  const newTeeTime = new TeeTime(req.body);
  const saved = await newTeeTime.save();
  res.status(201).json(saved);
};

export const joinTeeTime = async (req, res) => {
  const { id } = req.params;
  const { player } = req.body;

  const teeTime = await TeeTime.findById(id);
  if (teeTime.players.length >= teeTime.maxPlayers) {
    return res.status(400).json({ message: "Tee time is full" });
  }

  teeTime.players.push(player);
  await teeTime.save();
  res.json(teeTime);
};