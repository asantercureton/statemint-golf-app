import React from "react";
import { PiGolfFill } from "react-icons/pi";
import BadgeCard from "../components/BadgeCard";
import { FaHome } from "react-icons/fa";
import PlayerStatsCard from "../components/PlayerStatsCard";
import HomeCourse from "../components/HomeCourse";
import { FaRegEdit } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import PerformanceTrendChart from "../components/PerformanceTrendChart";

const mockRounds = [
    { round: "Round 1", score: 102 },
    { round: "Round 2", score: 95 },
    { round: "Round 3", score: 92 },
    { round: "Round 4", score: 87 },
    { round: "Round 5", score: 100 },
    { round: "Round 6", score: 98 },
];

const mockBadges = [
    {
        name: "Mr. Chipington",
        description: "Achieved 10 chip-ins.",
        date: "2023-10-01",
        image: "https://example.com/golf-pro-badge.png"
    },
    {
        name: "Birdie Master",
        description: "Scored 50 birdies.",
        date: "2023-11-15",
        image: "https://example.com/birdie-master-badge.png"
    },
    {
        name: "Eagle Eye",
        description: "Scored 20 eagles.",
        date: "2023-12-20",
        image: "https://example.com/eagle-eye-badge.png"
    },
    {
        name: "Albatross Achiever",
        description: "Scored 5 albatrosses.",
        date: "2024-01-10",
        image: "https://example.com/albatross-achiever-badge.png"
    },
    {
        name: "Ace of Aces",
        description: "Scored 1 hole-in-one.",
        date: "2024-02-05",
        image: "https://example.com/ace-of-aces-badge.png"
    },
    {
        name: "Course Conqueror",
        description: "Played 100 different courses.",
        date: "2024-03-15",
        image: "https://example.com/course-conqueror-badge.png"
    },
    {
        name: "Tee Time Titan",
        description: "Created 50 tee times.",
        date: "2024-04-20",
        image: "https://example.com/tee-time-titan-badge.png"
    },
    {
        name: "Golf Guru",
        description: "Achieved a handicap of 5 or lower.",
        date: "2024-05-30",
        image: "https://example.com/golf-guru-badge.png"
    },
    {
        name: "Weather Warrior",
        description: "Played in all weather conditions.",
        date: "2024-06-10",
        image: "https://example.com/weather-warrior-badge.png"
    },
    {
        name: "Long Drive Legend",
        description: "Hit a drive over 300 yards.",
        date: "2024-07-25",
        image: "https://example.com/long-drive-legend-badge.png"
    }];

const mockCourse = {
    name: "Charlotte National Golf Club",
    location: "Indian Trail, NC",
}

const mockStats = {
    aces: 1,
    albatrosses: 0,
    eagles: 5,
    birdies: 10,
    pars: 20,
    teeTimesCreated: 15,
    teeTimesJoined: 30,
    coursesPlayed: 25
};

const PlayerProfile = () => {
    return (
        <div className="player-profile-container flex flex-col items-center bg-gray-300 h-screen overflow-y-no-scroll">
            <div className="profile-card bg-white p-8 rounded-lg shadow-md w-full">
                <h2 className="text-2xl font-bold mb-20 text-center">PLAYER PROFILE</h2>
                <div className="flex justify-around mb-6">
                    <IoArrowBack className="text-2xl text-gray-500 mr-2 cursor-pointer" onClick={() => window.history.back()} />
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                        alt="Player Avatar"
                        className="w-48 h-48 object-cover rounded-full border-4 border-green-700"
                    />
                    <FaRegEdit className="text-2xl text-gray-500 mr-2" onClick={() => alert('Edit Player Profile!')} />
                </div>
                <div className="text-center">
                    <h3 className="text-5xl font-bold mb-2">Saint Embargo</h3>
                    <p className="text-gray-600 text-2xl flex justify-center items-center"><PiGolfFill />Course Strategist</p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex flex-col justify-center items-center bg-amber-200 p-4 w-30 rounded-xl mt-4">
                            <p className="text-gray-600 text-4xl mt-2 mb-2">19.8</p>
                            <p className="text-gray-600 text-lg mb-2">Handicap</p>
                        </div>
                        {/* <div className="flex flex-col justify-center items-center bg-amber-200 p-4 w-1/3 rounded-xl mt-4">
                            <p className="text-gray-600 text-4xl mt-2 mb-2">---</p>
                            <p className="text-gray-600 text-lg mb-2">Trending</p>
                        </div> */}
                    </div>

                    <div className="flex justify-center">
                        <HomeCourse course={mockCourse} />
                    </div>
                    <div className="flex justify-center mt-8">
                        <BadgeCard badges={mockBadges} />
                    </div>
                    <div className="mt-8">
                        <PlayerStatsCard stats={mockStats} />
                    </div>
                    <div className="flex justify-center">
                        <PerformanceTrendChart data={mockRounds} />
                    </div>
                </div>
            </div>
        </div>);
}

export default PlayerProfile;