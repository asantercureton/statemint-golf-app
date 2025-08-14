import PlayerStats from "../models/PlayerStats";

export const getPlayerStats = async (req, res) => {
    const stats = await PlayerStats.find();
    res.json(stats);
}

export const createPlayerStats = async (req, res) => {
    const newStats = new PlayerStats(req.body);
    const saved = await newStats.save();
    res.status(201).json(saved);
}

export const getPlayerStatsById = async (req, res) => {
    const { id } = req.params;
    const stats = await PlayerStats.findById(id);
    if (!stats) {
        return res.status(404).json({ message: "Player stats not found" });
    }
    res.json(stats);
}

export const updatePlayerStats = async (req, res) => {
    const { id } = req.params;
    const updatedStats = await PlayerStats.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedStats) {
        return res.status(404).json({ message: "Player stats not found" });
    }
    res.json(updatedStats);
}

export const deletePlayerStat = async (req, res) => {
    const { id } = req.params;
    const deletedStat = await PlayerStats.findByIdAndDelete(id);
    if (!deletedStat) {
        return res.status(404).json({ message: "Player stat not found" });
    }
    res.json(deletedStat);
}