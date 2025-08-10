import React from "react";
import TeeTimeCard from "../components/TeeTimeCard";
import Weather from "../components/Weather";

const Dashboard = () => {
    return (
        // Create a responsive dashboard for desktop and mobile that displays all available tee times
        <div className="dashboard-container flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <p className="mt-2 text-center text-gray-600 text-xs">
                Not your account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
            </p>
            <div className="dashboard-header w-full max-w-4xl text-center mb-2 p-4 shadow-md bg-white rounded-lg mt-2">
                <h2 className="text-4xl font-semibold mt-2 mb-1">Welcome, Asante!</h2>
                <p className="text-md text-gray-700 mt-4 p-4">Explore the dashboard for available tee times, check the weather, and join your friends on the course!</p>
            </div>
            <div className="dashboard-weather w-full max-w-4xl px-4">
                <div className="flex flex-col items-center mt-6">
                    <h2 className="text-2xl font-bold mb-4">Weather Forecast</h2>
                    <Weather />
                </div>
                <div className="flex flex-col justify-center items-center mt-4">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-4">Available Tee Times</h2>
                        <a href="/my-teetimes" className="px-4 py-2 rounded text-sm">View My Tee Times</a>
                    </div>

                    <div className="tee-times-list grid grid-cols-1 lg:grid-cols-2 gap-1 justify-items-center mt-2">
                        <TeeTimeCard teeTimes={{
                            course: 'Birkdale Golf Club',
                            location: 'Huntersville, NC',
                            date: 'July 6, 2025',
                            time: '7:20 AM',
                            maxPlayers: 4,
                            players: [
                                { name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                                { name: 'Cello', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                                { name: 'Trey', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                            ]
                        }} />
                        <TeeTimeCard teeTimes={{
                            course: 'Warrior Golf Club',
                            location: 'China Grove, NC',
                            date: 'July 20, 2025',
                            time: '7:40 AM',
                            maxPlayers: 4,
                            players: [
                                { name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                                { name: 'Cello', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                                { name: 'Trey', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                                { name: 'Ced', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' }
                            ]
                        }} />
                        <TeeTimeCard teeTimes={{
                            course: 'Brushy Mountain Golf Club',
                            location: 'Hickory, NC',
                            date: 'June 15, 2025',
                            time: '7:20 AM',
                            maxPlayers: 4,
                            players: [
                                { name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                                { name: 'Cello', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                            ]
                        }} />
                        <TeeTimeCard teeTimes={{
                            course: 'Sapona Golf Club',
                            location: 'Lexington, NC',
                            date: 'July 20, 2025',
                            time: '7:40 AM',
                            maxPlayers: 4,
                            players: [
                                { name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
                            ]
                        }} />
                    </div>
                </div>
            </div>
        </div>);
}

export default Dashboard;