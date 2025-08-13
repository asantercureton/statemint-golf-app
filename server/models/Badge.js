import mongoose from "mongoose"

const badgeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    iconUrl: { type: String, required: true },
}, { timestamps: true });

const Badge = mongoose.model("Badge", badgeSchema);

export default Badge;