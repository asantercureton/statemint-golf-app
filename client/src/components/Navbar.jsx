import React from "react";
import { useState } from "react";


const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        setLoggedIn(!loggedIn);
    }


    return (
        <div className="bg-green-700 flex items-center justify-between p-4">
            <div className="statemint-logo">
                <img src="/" alt="StateMint Logo" />
            </div>
            <div className="user-profile">
                {loggedIn ? (
                    <button className="w-35 h-35 rounded-full bg-yellow-400 hover:bg-yellow-500">
                        <img src="/" alt="User Profile" className="profile-pic" />
                        <span className="username">Username</span>
                    </button>) : (
                    <button className="w-35 h-35 rounded-full bg-yellow-400 hover:bg-yellow-500 border-4 border-indigo-500" onClick={handleLogin}>
                        <span className="register">Login/Signup</span>
                    </button>)
                }
            </div>

        </div>);
}

export default Navbar;