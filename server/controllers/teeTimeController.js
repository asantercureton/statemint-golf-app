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

export const waitlistTeeTime = async (req, res) => {
  const { id } = req.params;
  const { player } = req.body;

  const teeTime = await TeeTime.findById(id);
  // Assuming there's a waitlist array in the schema
  teeTime.waitlist.push(player);
  await teeTime.save();
  res.json(teeTime);
};

export const updateTeeTime = async (req, res) => {
  const { id } = req.params;
  const updatedTeeTime = await TeeTime.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedTeeTime) {
    return res.status(404).json({ message: "Tee time not found" });
  }
  res.json({ message: "Tee time updated" });
};

export const deleteTeeTime = async (req, res) => {
  const { id } = req.params;
  const deletedTeeTime = await TeeTime.findByIdAndDelete(id);
  if (!deletedTeeTime) {
    return res.status(404).json({ message: "Tee time not found" });
  }
  res.json({ message: "Tee time deleted" });
};

export const host = async (req, res) => {
  const { id } = req.params;
  const { host } = req.body;

  const teeTime = await TeeTime.findById(id);
  if (!teeTime) {
    return res.status(404).json({ message: "Tee time not found" });
  }

  teeTime.host = host;
  await teeTime.save();
  res.json(teeTime);
}