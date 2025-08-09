import React from "react";
import TeeTimeCard from "../components/TeeTimeCard";
import PlayerProfile from "./PlayerProfile";
import Scorecard from "../components/Scorecard";
// import BadgeCard from "../components/BadgeCard";

const Dashboard = () => {
    return (
        <div className="dashboard-container grid grid-cols-1 sm:grid-cols-2 justify-items-center bg-gray-300 w-auto overflow-y-scroll no-scrollbar">
            {/* <PlayerProfile /> */}
            {/* <Scorecard scorecard={[
                { holeNumber: 1, par: 4, score: 4 },
                { holeNumber: 2, par: 3, score: 2 },
                { holeNumber: 3, par: 5, score: 6 },
                { holeNumber: 4, par: 4, score: 3 },
                { holeNumber: 5, par: 4, score: 5 },
                { holeNumber: 6, par: 3, score: 3 },
                { holeNumber: 7, par: 5, score: 4 },
                { holeNumber: 8, par: 4, score: 4 },
                { holeNumber: 9, par: 3, score: 2 },
                { holeNumber: 10, par: 4, score: 4 },
                { holeNumber: 11, par: 3, score: 2 },
                { holeNumber: 12, par: 5, score: 6 },
                { holeNumber: 13, par: 4, score: 3 },
                { holeNumber: 14, par: 4, score: 5 },
                { holeNumber: 15, par: 3, score: 3 },
                { holeNumber: 16, par: 5, score: 4 },
                { holeNumber: 17, par: 4, score: 4 },
                { holeNumber: 18, par: 3, score: 2 },
            ]} player={[{name: 'Saint Embargo', coursePar: 72, score: 87}]} /> */}

            <TeeTimeCard teeTimes={{
                course: 'Birkdale Golf Club',
                location: 'Huntersville, NC',
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
                location: 'China Grove, NC',
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
                location: 'Hickory, NC',
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
                location: 'Lexington, NC',
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