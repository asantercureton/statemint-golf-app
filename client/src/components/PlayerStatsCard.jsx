import React from "react";
import { FaGolfBall, FaCalendarPlus, FaCalendarCheck, FaMapMarkedAlt } from "react-icons/fa";
import { GiGolfFlag, GiBirdClaw, GiEagleHead } from "react-icons/gi";
import { PiBirdFill } from "react-icons/pi";
import { MdOutlineGolfCourse } from "react-icons/md";



const statStyle = "flex flex-col items-center p-2 sm:p-4 rounded-2xl bg-white/10 backdrop-blur text-center text-white shadow-md";

const PlayerStatsCard = ({ stats }) => {
    const {
        aces,
        albatrosses,
        eagles,
        birdies,
        pars,
        teeTimesCreated,
        teeTimesJoined,
        coursesPlayed
    } = stats;

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-green-800 to-emerald-600 rounded-xl shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-4 text-center tracking-wide uppercase">Player Stats</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className={statStyle}>
                    <MdOutlineGolfCourse className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{aces}</span>
                    <span className="text-sm">Aces</span>
                </div>
                <div className={statStyle}>
                    <GiBirdClaw className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{albatrosses}</span>
                    <span className="text-sm">Albatrosses</span>
                </div>
                <div className={statStyle}>
                    <GiEagleHead className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{eagles}</span>
                    <span className="text-sm">Eagles</span>
                </div>
                <div className={statStyle}>
                    <PiBirdFill className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{birdies}</span>
                    <span className="text-sm">Birdies</span>
                </div>
                <div className={statStyle}>
                    <FaGolfBall className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{pars}</span>
                    <span className="text-sm">Pars</span>
                </div>
                <div className={statStyle}>
                    <FaCalendarPlus className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{teeTimesCreated}</span>
                    <span className="text-sm">Tee Times Created</span>
                </div>
                <div className={statStyle}>
                    <FaCalendarCheck className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{teeTimesJoined}</span>
                    <span className="text-sm">Joined Tee Times</span>
                </div>
                <div className={statStyle}>
                    <FaMapMarkedAlt className="text-xl mb-1" />
                    <span className="text-2xl font-semibold">{coursesPlayed}</span>
                    <span className="text-sm">Courses Played</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsCard;