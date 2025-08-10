import React from "react";

const MyTeeTimes = () => {
    const isConfirmed = true; // Placeholder for tee time confirmation status
    // This will eventually be fetched from the backend API

    const teeTimes = []; // Placeholder for tee times data
    // This will eventually be fetched from the backend API

    if (teeTimes.length === 0) {
        return (
            <div className="my-tee-times p-6 min-h-screen">
                <h2 className="text-2xl font-bold mb-4">My Tee Times</h2>
                <p className="text-gray-700">You have no upcoming tee times.</p>
            </div>
        );
    }
    
    // Render the list of tee times associated with the user, whether confirmed or waitlisted, with a confirmation status
    return (
        <div className="my-tee-times p-6 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">My Tee Times</h2>
            <ul className="space-y-4">
                {teeTimes.map((teeTime) => (
                    <li key={teeTime.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{teeTime.course}</h3>
                        <p className="text-gray-700">Date: {new Date(teeTime.date).toLocaleDateString()}</p>
                        <p className="text-gray-700">Time: {teeTime.time}</p>
                        <p className="text-gray-700">Players: {teeTime.players.length}/{teeTime.maxPlayers}</p>
                        <p className="text-gray-700">Status: {isConfirmed ? 'Round Confirmed' : 'Awaiting Confirmation'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default MyTeeTimes;