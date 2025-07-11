import React from "react";
import TeeTimeCard from "../components/TeeTimeCard";
import PlayerProfile from "./PlayerProfile";
// import BadgeCard from "../components/BadgeCard";

const Dashboard = () => {
    return (
        <div className="dashboard-container flex flex-row flex-wrap justify-center bg-gray-300 h-screen overflow-y-scroll">
            <PlayerProfile />
            <TeeTimeCard teeTimes={{
                course: 'Birkdale Golf Club',
                date: 'July 6, 2025',
                time: '7:20 AM',
                maxPlayers: 4,
                players: [
                    {name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                    {name: 'Cello', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                    {name: 'Trey', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                ]
                }}/>
            <TeeTimeCard teeTimes={{
                course: 'Warrior Golf Club',
                date: 'July 20, 2025',
                time: '7:40 AM',
                maxPlayers: 4,
                players: [
                    {name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                    {name: 'Cello', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                    {name: 'Trey', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                    {name: 'Ced', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}
                ]
                }}/>
            <TeeTimeCard teeTimes={{
                course: 'Brushy Mountain Golf Club',
                date: 'June 15, 2025',
                time: '7:20 AM',
                maxPlayers: 4,
                players: [
                    {name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                    {name: 'Cello', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                ]
                }}/>
            <TeeTimeCard teeTimes={{
                course: 'Sapona Golf Club',
                date: 'July 20, 2025',
                time: '7:40 AM',
                maxPlayers: 4,
                players: [
                    {name: 'Saint', image: 'https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'},
                ]
                }}/>
        </div>);
}

export default Dashboard;