import React from "react";
import { PiGolfFill } from "react-icons/pi";
import BadgeCard from "../components/BadgeCard";
import { FaHome } from "react-icons/fa";


const PlayerProfile = () => {
    return (
        <div className="player-profile-container flex flex-col items-center bg-gray-300 h-screen overflow-y-scroll">
            <div className="profile-card bg-white p-8 rounded-lg shadow-md w-96 mt-10">
                {/* <h2 className="text-2xl font-bold mb-6 text-center">Player Profile</h2> */}
                <div className="flex items-center justify-center mb-6">
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                        alt="Player Avatar"
                        className="w-48 h-48 object-cover rounded-full border-4 border-green-700"
                    />
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-semibold">Saint Embargo</h3>
                    <p className="text-gray-600 flex justify-center items-center"><PiGolfFill />Course Strategist</p>
                </div>
            </div>
            <div className="badges-container flex flex-wrap justify-center mt-8">
                <div className="badge-card bg-white p-6 rounded-lg shadow-md m-4 w-48">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Badge"
                        className="w-16 h-16 object-cover rounded-full mb-4"
                    />
                    <h4 className="text-lg font-bold">Badge Name</h4>
                    <p className="text-gray-600">Description of the badge.</p>
                </div>
                <div className="badge-card bg-white p-6 rounded-lg shadow-md m-4 w-48">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Badge"
                        className="w-16 h-16 object-cover rounded-full mb-4"
                    />
                    <h4 className="text-lg font-bold">Badge Name</h4>
                    <p className="text-gray-600">Description of the badge.</p>
                </div>
                <div className="badge-card bg-white p-6 rounded-lg shadow-md m-4 w-48">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Badge"
                        className="w-16 h-16 object-cover rounded-full mb-4"
                    />
                    <h4 className="text-lg font-bold">Badge Name</h4>
                    <p className="text-gray-600">Description of the badge.</p>
                </div>
                <div className="badge-card bg-white p-6 rounded-lg shadow-md m-4 w-48">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Badge"
                        className="w-16 h-16 object-cover rounded-full mb-4"
                    />
                    <h4 className="text-lg font-bold">Badge Name</h4>
                    <p className="text-gray-600">Description of the badge.</p>
                </div>
            </div>
            <div className="home-course-container bg-white rounded-xl shadow-md flex flex-col items-center p-4 mt-8">
                <h2 className="home-course flex justify-center items-center w-150 text-xl font-semibold"><FaHome />Home Course:</h2>
                <span>Charlotte National Golf Club</span>
            </div>
            <div className="stats-container bg-white rounded-xl shadow-md flex flex-col items-center p-4 mt-8 w-200">
                <h2 className="text-lg font-semibold">Stats Card</h2>
                <div className="stats flex flex-row flex-wrap items-center justify-around">
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">2</span>
                        <p className="text-sm font-semibold">Hole-in-ones</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">4</span>
                        <p className="text-sm font-semibold">Eagles</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">8</span>
                        <p className="text-sm font-semibold">Birdies</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">24</span>
                        <p className="text-sm font-semibold">Pars</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">12</span>
                        <p className="text-sm font-semibold">Tee Times Created</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">4</span>
                        <p className="text-sm font-semibold">Tee Times Joined</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">38</span>
                        <p className="text-sm font-semibold">Tee Times Played</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">98</span>
                        <p className="text-sm font-semibold">Average Score</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">92</span>
                    <p className="text-sm font-semibold">Best Round</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">49</span>
                    <p className="text-sm font-semibold">Courses</p>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <span className="text-center">12</span>
                    <p className="text-sm font-semibold">No-Shows</p>
                    </div>
                </div>
            </div>
            <div className="tee-times-container mt-8"></div>
        </div>)
}

export default PlayerProfile;