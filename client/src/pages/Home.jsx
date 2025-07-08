import React from "react";
import TeeTimeCard from "../components/TeeTimeCard";

const Home = () => {
    return (
        <div className="home-container bg-gray-100 h-210 md:h-full p-6 overflow-y-scroll">
            <TeeTimeCard teeTimes={{
                course: 'Birkdale Golf Club',
                date: 'July 6, 2025',
                time: '7:20 AM',
                maxPlayers: 4,
                players: ['Saint', 'Cello', 'Trey']
                }}/>
            <TeeTimeCard teeTimes={{
                course: 'Warrior Golf Club',
                date: 'July 20, 2025',
                time: '7:40 AM',
                maxPlayers: 4,
                players: ['Saint', 'Cello', 'Trey', 'Jeremy']
                }}/>
            <TeeTimeCard teeTimes={{
                course: 'Birkdale Golf Club',
                date: 'July 6, 2025',
                time: '7:20 AM',
                maxPlayers: 4,
                players: ['Saint', 'Cello', 'Trey']
                }}/>
            <TeeTimeCard teeTimes={{
                course: 'Warrior Golf Club',
                date: 'July 20, 2025',
                time: '7:40 AM',
                maxPlayers: 4,
                players: ['Saint', 'Cello', 'Trey', 'Jeremy']
                }}/>
            <BadgeCard badge={{
                name: "Golf Pro",
                description: "Awarded for completing 100 rounds of golf.",
                date: "2023-10-01",
                image: "https://example.com/golf-pro-badge.png"
            }} />
        </div>);
}

export default Home;