import mongoose from "mongoose";

const teeTimeSchema = new mongoose.Schema({
  course: { type: String, required: true },
  location: { type: String, required: true },
  datetime: { type: String, required: true },
  players: [{ type: String }], // could also be ObjectId ref to users
  maxPlayers: { type: Number, default: 4 },
}, { timestamps: true });

const TeeTime = mongoose.model("TeeTime", teeTimeSchema);

export default TeeTime;