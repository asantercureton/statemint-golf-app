import React from "react";

const BadgeCard = ({ badges }) => {
    return (
        <div className="badge-card flex justify-center mr-6 bg-white p-6 rounded-lg shadow-md mb-1 border border-green-700 h-1 w-30">
            <div className="flex items-center mb-4">
                <img
                    src={badges.image || "https://via.placeholder.com/150"}
                    alt={badges.name}
                    className="w-4 h-4 object-cover rounded-full"
                />
                <div>
                    <h2 className="text-sm font-bold">{badges.name}</h2>
                    {/* <p className="text-gray-700">{badges.description}</p> */}
                    {/* <p className="text-sm text-gray-500">Awarded on: {new Date(badges.date).toLocaleDateString()}</p> */}
                </div>
            </div>
        </div>
    );
}

export default BadgeCard;