import Badge from "../models/Badge";

export const getBadges = async (req, res) => {
    const badges = await Badge.find();
    res.json(badges);
}
export const createBadge = async (req, res) => {
    const newBadge = new Badge(req.body);
    const saved = await newBadge.save();
    res.status(201).json(saved);
}
export const getBadgeById = async (req, res) => {
    const { id } = req.params;
    const badge = await Badge.findById(id);
    if (!badge) {
        return res.status(404).json({ message: "Badge not found" });
    }
    res.json(badge);
}
export const updateBadge = async (req, res) => {
    const { id } = req.params;
    const updatedBadge = await Badge.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBadge) {
        return res.status(404).json({ message: "Badge not found" });
    }
    res.json(updatedBadge);
}
export const deleteBadge = async (req, res) => {
    const { id } = req.params;
    const deletedBadge = await Badge.findByIdAndDelete(id);
    if (!deletedBadge) {
        return res.status(404).json({ message: "Badge not found" });
    }
    res.json({ message: "Badge deleted" });
}
