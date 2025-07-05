import React from "react";
import TeeTimeCard from "../components/TeeTimeCard";
import Weather from "../components/Weather";
import BadgeCard from "../components/BadgeCard";

const Dashboard = () => {
    return (
        <div>
            <TeeTimeCard />
            <Weather />
            <BadgeCard badge={{
                name: "Golf Pro",
                description: "Awarded for completing 100 rounds of golf.",
                date: "2023-10-01",
                image: "https://example.com/golf-pro-badge.png"
            }} />
        </div>);
}

export default Dashboard;