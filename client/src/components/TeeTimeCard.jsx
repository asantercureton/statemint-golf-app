import React from "react";

const TeeTimeCard = ({ teeTimes }) => {

    const spotsAvailable = teeTimes.maxPlayers - teeTimes.players.length;
    const isFull = spotsAvailable <= 0;

    return (
        <div className="tee-time-card flex bg-white p-6 rounded-lg shadow-md max mt-1 mb-4 max-h-115 w-90">
            <div className="mr-4 flex-shrink-0">
                <div className="flex flex-col">
                    <span className="text-md text-gray-700 text-center p-2 mb-2 font-semibold border-b border-gray-400 w-full h-10">{new Date(teeTimes.date).toLocaleDateString()}</span>
                    <div className="flex flex-row justify-between items-center h-20">
                        <div className="w-3/5">
                            <h4 className="text-lg font-bold mr-2">{teeTimes.course}</h4>
                            <p className="text-gray-700 text-sm font-semibold">{teeTimes.location}</p>
                        </div>
                        <div className="flex flex-row items-center bg-gray-100 rounded-full p-1 w-1/5">
                            <div className="mr-1 p-1">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                                    alt="Weather Icon"
                                    className="w-4 h-4 object-cover mb-1"
                                />
                            </div>
                            <span className="text-gray-700 text-sm font-bold mb-1">72°F</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-items-center mb-2">
                    <div className="flex flex-col items-center w-full max-w-4xl h-10 mb-2">
                        <p className="text-center text-emerald-800 text-4xl font-semibold rounded p-1">{teeTimes.time}</p>
                    </div>
                    <div className="mr-2">
                        <div className="border border-emerald-300 rounded p-1 mt-1 mb-2">
                            <h3 className="text-sm text-center text-emerald-800 font-semibold mb-1 mt-2 mr-1 w-75">Players Confirmed:</h3>
                            <ul className="list-disc flex flex-wrap justify-center ml-2">
                                {teeTimes.players.length > 0 ? (
                                    teeTimes.players.map((player, index) => (
                                        <li key={index} className="flex flex-col p-2 items-center mb-1">
                                            <img
                                                src={player.image || "https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"}
                                                alt={player.name}
                                                className="w-10 h-10 border-2 border-emerald-700 object-cover rounded-full"
                                            />
                                            <span className="text-sm text-emerald-700">{player.name}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">Join me!</li>
                                )}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-between items-center ml-1 p-1 rounded">
                            <p className={`${isFull ? 'text-red-500' : 'text-green-500'} text-sm font-semibold ml-2`}>
                                {isFull ? "This tee time is full" : `${spotsAvailable} spot(s) available`}
                            </p>
                            <div className="w-full mb-4">
                                <a
                                    className='flex justify-center items-center rounded h-10 mt-4 text-sm font-semibold'
                                    href={'/my-teetimes'}
                                    style={{ background: isFull ? 'rgb(252, 189, 0)' : 'rgb(80, 150, 255)', color: isFull ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)' }}
                                >
                                    {isFull ? "Join Waitlist" : "Join Tee Time"}
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>)
};

export default TeeTimeCard;