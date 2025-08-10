import React from "react";

const Footer = () => {
    // Create a simple responsive footer for the app
    return (
        <div className="bg-emerald-950 flex flex-col items-center justify-center p-4 h-auto w-full">
            <div className="flex flex-col items-center text-center text-white">
                <p className="text-sm">© {new Date().getFullYear()} StateMint Golf App. All rights reserved.</p>
                <p className="text-sm">Built with ❤️ using React and Tailwind CSS</p>
            </div>
        </div>
    );
}

export default Footer;