import React from "react";


const Navbar = () => {
    // Simulate user authentication status

    return (
        <div className="bg-emerald-950 flex flex-col items-center justify-around p-4 h-auto w-full">
            <div className="flex flex-row items-center justify-between w-full max-w-4xl">
                <a className="statemint-logo" href="/">
                    <img src="/" alt="StateMint Logo" />
                </a>
                <h3 className="text-white text-lg font-bold mb-2">Statemint Golf</h3>
            </div>
        </div>
    );
}

export default Navbar;