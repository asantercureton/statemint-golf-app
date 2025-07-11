import React from "react";

const TeeTimeCard = ({ teeTimes }) => {

    const spotsAvailable = teeTimes.maxPlayers - teeTimes.players.length;
    const isFull = spotsAvailable <= 0;

    return (
        <div className="tee-time-card flex bg-white p-6 rounded-lg shadow-md max m-4 border border-green-700 max-h-75 w-135">
            <div className="mr-4">
                <img
                    src={teeTimes.image || "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"}
                    alt={teeTimes.course}
                    className="w-40 h-30 object-cover rounded-t-lg mb-4"
                />

                <h2 className="text-xl font-bold mb-2">{teeTimes.course}</h2>
                <p className="text-gray-700 mb-1">Date: {new Date(teeTimes.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-4">Time: {teeTimes.time}</p>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row">
                    <h3 className="text-xl font-semibold mb-2">Players:</h3>
                    <ul className="list-disc flex flex-wrap pl-5">
                        {teeTimes.players.length > 0 ? (
                            teeTimes.players.map((player, index) => (
                                <li key={index} className="flex flex-col text-center mb-2 mr-4">
                                    <img
                                        src={player.image || "https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"}
                                        alt={player.name}
                                        className="w-15 h-15 object-cover rounded-full mr-2"
                                    />
                                    <span className="text-sm text-gray-700">{player.name}</span>
                                </li>
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
            </div>
        </div>)
};

export default TeeTimeCard;