import React from "react";

const TeeTimeCard = ({ teeTimes }) => {

    const spotsAvailable = teeTimes.maxPlayers - teeTimes.players.length;
    const isFull = spotsAvailable <= 0;

    return (
        <div className="tee-time-card flex bg-white p-6 rounded-lg shadow-md max mt-4 border border-green-700 max-h-70 w-100">
            <div className="mr-4">
                <div className="flex flex-row mb-2">
                    <img
                        src={teeTimes.image || "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"}
                        alt={teeTimes.course}
                        className="w-20 h-15 object-cover rounded-lg mb-1 mr-4"
                    />
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold mr-2">{teeTimes.course}</h2>
                        <p className="text-gray-700 text-xs font-semibold flex flex-wrap">{teeTimes.location}</p>
                    </div>

                </div>
                <div className="flex flex-row flex-start mb-2">
                    <div className="mr-1">
                        <p className="text-gray-700 text-sm font-semibold">Date: {new Date(teeTimes.date).toLocaleDateString()}</p>
                        <p className="text-gray-700 text-sm font-semibold">Tee Time: {teeTimes.time}</p>

                        <div>
                            <button
                                className={`flex justify-center items-center rounded w-30 h-15 mt-4 ${isFull ? 'text-amber-500 text-xs' : 'text-emerald-500 text-xs'}`}
                            >
                                {isFull ? "Join Waitlist" : "Join Tee Time"}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center ml-4">
                        <div>
                            <h3 className="text-md font-semibold mb-2 mr-1">Players:</h3>
                        </div>
                        <ul className="list-disc flex flex-wrap ml-2">
                            {teeTimes.players.length > 0 ? (
                                teeTimes.players.map((player, index) => (
                                    <li key={index} className="flex flex-col text-center mb-2 mr-4">
                                        <img
                                            src={player.image || "https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"}
                                            alt={player.name}
                                            className="w-5 h-5 object-cover rounded-full mr-2"
                                        />
                                        <span className="text-xs text-gray-700">{player.name}</span>
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-500">Join me!</li>
                            )}
                        </ul>
                        <p className={`${isFull ? 'text-red-500' : 'text-green-500'} text-xs font-bold ml-2`}>
                            {isFull ? "This tee time is full" : `${spotsAvailable} spot(s) available`}
                        </p>
                    </div>
                </div>

            </div>
        </div>)
};

export default TeeTimeCard;