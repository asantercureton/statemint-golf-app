import React from "react";

const Navbar = () => {
    return (
        <div className="bg-green-700 flex items-center p-4">
            <div className="statemint-logo">
                <img src="" alt="StateMint Logo" />
            </div>

            <div className="search-bar">
                <form>
                    <button type="submit" className="search-button">ICON</button>
                    <input type="text" placeholder="Search..." className="search-input" />
                </form>
            </div>
            <div className="user-profile">
                <button>
                    <img src="" alt="User Profile" className="profile-pic" />
                    <span className="username">Username</span>
                </button>
            </div>

        </div>);
}

export default Navbar;