import React from "react";

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white py-4">
            <div className="max-w-4xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} StateMint Golf App. All rights reserved.</p>
                <p className="text-sm">Built with ❤️ using React and Tailwind CSS</p>
            </div>
        </footer>
    );
}

export default Footer;