import React from "react";

const BadgeCard = ({ badge }) => {
    return (
        <div className="bg-gray-100 flex items-center p-4 rounded-lg shadow-md">
            <img className="text-lg font-semibold" src={badge.image} alt={badge.name} />
            <h3 className="text-lg font-semibold">{badge.name}</h3>
            <p className="text-sm text-gray-600">{badge.description}</p>
            <span className="text-xs text-gray-500">Earned on: {badge.date}</span>
        </div>
    );
}

export default BadgeCard;