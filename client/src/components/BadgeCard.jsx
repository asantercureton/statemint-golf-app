import React from "react";

const BadgeCard = ({ badges }) => {
    return (<div className="bg-emerald-600 p-4 rounded-xl shadow-lg h-35 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-white">BADGES EARNED</h2>
        <div className=" flex flex-row overflow-x-scroll no-scrollbar overflow-y-hidden p-2 w-full">
            {badges && badges.map((badge, index) => (
                <div key={index} className="bg-emerald-100 flex flex-row m-1 h-12 w-32 rounded-lg shadow-md items-center p-2">
                    <img src={badge.image} alt={badge.name} className="w-18 h-12 object-cover rounded-t-lg" />
                    <div className="ml-4 flex flex-col items-start">
                        <h3 className="font-semibold mt-2">{badge.name}</h3>
                        {/* <p className="text-gray-600">{badge.description}</p>
                            <p className="text-gray-400 mt-1">Unlocked on: {new Date(badge.date).toLocaleDateString()}</p> */}
                    </div>
                </div>))}
        </div>
    </div>
    );
}

export default BadgeCard;