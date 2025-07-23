import React from "react";

const Scorecard = ({ scorecard }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">SCORECARD</h2>
            <div className="grid grid-cols-3 gap-4">
                {scorecard.map((hole, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Hole {hole.holeNumber}</h3>
                        <p>Par: {hole.par}</p>
                        <p>Score: {hole.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Scorecard;