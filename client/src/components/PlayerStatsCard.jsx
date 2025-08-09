import React from "react";
import { FaGolfBall, FaCalendarPlus, FaCalendarCheck, FaMapMarkedAlt, FaRegAngry } from "react-icons/fa";
import { GiGolfFlag, GiBirdClaw, GiEagleHead } from "react-icons/gi";
import { FaRegFaceRollingEyes } from "react-icons/fa6";


import { SiHoneybadger } from "react-icons/si";

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
        bogeys,
        doubleBogeys,
        fairwayAccuracy,
        greensInRegulation,
        puttAverage,
        roundsPlayed,
        teeTimesCreated,
        teeTimesJoined,
        coursesPlayed,
        badgesEarned,
    } = stats;

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-green-800 to-emerald-600 rounded-xl shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-4 text-center tracking-wide uppercase">Player Stats</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div className={statStyle}>
                    {/* <MdOutlineGolfCourse className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{aces}</span>
                    <span className="text-xs">Aces</span>
                </div>
                <div className={statStyle}>
                    {/* <GiBirdClaw className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{albatrosses}</span>
                    <span className="text-xs">Albatrosses</span>
                </div>
                <div className={statStyle}>
                    {/* <GiEagleHead className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{eagles}</span>
                    <span className="text-xs">Eagles</span>
                </div>
                <div className={statStyle}>
                    {/* <PiBirdFill className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{birdies}</span>
                    <span className="text-xs">Birdies</span>
                </div>
                <div className={statStyle}>
                    {/* <FaGolfBall className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{pars}</span>
                    <span className="text-xs">Pars</span>
                </div>

                <div className={statStyle}>
                    {/* <FaRegFaceRollingEyes className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{bogeys}</span>
                    <span className="text-xs">Bogeys</span>
                </div>
                <div className={statStyle}>
                    {/* <FaRegAngry className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{doubleBogeys}</span>
                    <span className="text-xs">Double Bogeys+</span>
                </div>
                <div className={statStyle}>
                    {/* <FaGolfBall className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{puttAverage}</span>
                    <span className="text-xs">Putts Per Round</span>
                </div>
                <div className={statStyle}>
                    {/* <FaGolfBall className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{fairwayAccuracy}</span>
                    <span className="text-xs">FIR %</span>
                </div>
                <div className={statStyle}>
                    {/* <FaGolfBall className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{greensInRegulation}</span>
                    <span className="text-xs">GIR %</span>
                </div>

                <div className={statStyle}>
                    {/* <FaCalendarPlus className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{teeTimesCreated}</span>
                    <span className="text-xs">Tee Times Created</span>
                </div>
                <div className={statStyle}>
                    {/* <FaCalendarCheck className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{teeTimesJoined}</span>
                    <span className="text-xs">Joined Tee Times</span>
                </div>
                <div className={statStyle}>
                    {/* <FaMapMarkedAlt className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{roundsPlayed}</span>
                    <span className="text-xs">Rounds Played</span>
                </div>
                <div className={statStyle}>
                    {/* <FaMapMarkedAlt className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{coursesPlayed}</span>
                    <span className="text-xs">Courses Played</span>
                </div>
                <div className={statStyle}>
                    {/* <SiHoneybadger className="text-xl mb-1" /> */}
                    <span className="text-4xl font-semibold mb-1">{badgesEarned}</span>
                    <span className="text-xs">Badges Earned</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsCard;