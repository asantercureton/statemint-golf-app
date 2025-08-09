import React from "react";

const Scorecard = ({ scorecard, player }) => {

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">SCORECARD</h2>
            {player.map((player, index) => (
                <div key={index} className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{player.name}</h3>
                    <div>
                        <span className="text-gray-600 font-semibold text-2xl mr-1">{player.score}</span>
                        <span className="text-gray-600 text-xl">({player.coursePar - player.score})</span>
                    </div>
                </div>
            ))}
            <div className="grid grid-cols-9">
                {scorecard.map((hole, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 p-4 border border-emerald-800">
                        <h3 className="text-xs">{hole.holeNumber}</h3>
                        <p className="font-semibold text-2xl">{hole.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Scorecard;