import React from "react";

const CreateTeeTime = () => {
    // This component will handle the creation of a new tee time
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Create Tee Time</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="course">Course</label>
                    <input type="course" id="course" className="tee-course w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="date">Date</label>
                    <input type="date" id="date" className="tee-date w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                    <input type="time" id="time" className="tee-time w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="time">Max # of Players</label>
                    <input type="maxPlayers" id="maxPlayers" className="tee-maxPlayers w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="time">Players</label>
                    <input type="players" id="players" className="tee-players w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="create-tee-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Tee Time</button>
            </form>
        </div>
    );
}

export default CreateTeeTime;