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
                    <button className="bg-yellow-400 hover:bg-yellow-500 border-4 border-indigo-500" onClick={handleLogin}>
                        <span className="register">Signup</span>
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