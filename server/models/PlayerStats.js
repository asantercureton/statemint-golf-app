import mongoose from "mongoose";

const playerStatsSchema = new mongoose.Schema({
    playerId: { type: String, required: true }, // could also be ObjectId ref to users
    teeTimesCreated: { type: Number, default: 0 },
    teeTimesJoined: { type: Number, default: 0 },
    roundsPlayed: { type: Number, default: 0 },
    coursesPlayed: { type: Number, default: 0 },
    badgesEarned: { type: Number, default: 0 },
    handicapScore: { type: Number, default: null },
    best9Score: { type: Number, default: null },
    best18Score: { type: Number, default: null },
    avgPutts: { type: Number, default: 0 },
    fairwaysAcc: { type: Number, default: 0 },
    greensInRegulation: { type: Number, default: 0 },
    totalAces: { type: Number, default: 0 },
    totalAlbatrosses: { type: Number, default: 0 },
    totalEagles: { type: Number, default: 0 },
    totalBirdies: { type: Number, default: 0 },
    totalPars: { type: Number, default: 0 },
    totalBogeys: { type: Number, default: 0 },
    totalDoubleBogeysOrWorse: { type: Number, default: 0 },
}, { timestamps: true });

const PlayerStats = mongoose.model("PlayerStats", playerStatsSchema);

export default PlayerStats;