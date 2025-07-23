import React from "react";
import { useState } from "react";


const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        setLoggedIn(loggedIn);
    }


    return (
        <div className="bg-emerald-950 flex items-center justify-around p-4 h-20 w-full">
            <div className="statemint-logo">
                <img src="/" alt="StateMint Logo" />
            </div>
            <div>
                {loggedIn ? (
                    <button className="bg-green-600 flex items-center justify-center hover:bg-green-700 border-4 border-indigo-500" onClick={console.log("Profile button clicked")}>
                        <img src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="User Profile" className="profile-pic w-20 h-20 mt-4 rounded-full border-3 border-green-500" />
                        <span className="username text-sm">Username</span>
                    </button>) : (
                    <button className="bg-yellow-400 hover:bg-yellow-500 border-4 border-indigo-500" onClick={handleLogin}>
                        <span className="register">Login</span>
                    </button>)
                }
            </div>
            {/* <div>
                <button onClick={handleLogin} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">=</button>
            </div> */}

        </div>);
}

export default Navbar;