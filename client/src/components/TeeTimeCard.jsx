import React from "react";

const TeeTimeCard = ({ teeTimes }) => {

    const spotsAvailable = teeTimes.maxPlayers - teeTimes.players.length;
    const isFull = spotsAvailable <= 0;

    return (
        <div className="tee-time-card flex bg-yellow-600 p-6 rounded-lg shadow-md max mb-6 border border-green-700 max-h-75">
            <div>
                <img
                    src={teeTimes.image || "https://via.placeholder.com/150"}
                    alt={teeTimes.course}
                    className="w-24 h-16 object-cover rounded-t-lg mb-4"
                />
            </div>
            <div className="mr-4">
                <h2 className="text-2xl font-bold mb-4">{teeTimes.course}</h2>
                <p className="text-gray-700 mb-2">Date: {new Date(teeTimes.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-2">Time: {teeTimes.time}</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Players:</h3>
                <ul className="list-disc pl-5">
                    {teeTimes.players.length > 0 ? (
                        teeTimes.players.map((player, index) => (
                            <li key={index} className="text-gray-700">{player}</li>
                        ))
                    ) : (
                        <li className="text-gray-500">Join me!</li>
                    )}
                </ul>
            </div>
            <div>
                <p className={`text-${isFull ? 'red' : 'green'}-500 font-bold ml-2`}>
                    {isFull ? "This tee time is full" : `${spotsAvailable} spot(s) available`}
                </p>
                <button
                    className={`mt-4 ml-1 px-4 py-2 rounded ${isFull ? 'bg-gray-400 text-orange-600' : 'bg-blue-500 hover:bg-blue-600 text-green-700'}`}
                    disabled={isFull}
                >
                    {isFull ? "Join Waitlist" : "Join Tee Time"}
                </button>
            </div>
        </div>)
};

export default TeeTimeCard;