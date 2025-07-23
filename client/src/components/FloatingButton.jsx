import React from "react";
import { GiFlagObjective } from "react-icons/gi";

const FloatingButton = () => {
    return (
        <div className="">
            <button className="fixed bottom-4 right-4 flex justify-center items-center w-25 h-25" style={{ backgroundImage: 'linear-gradient(348deg, #872f00, #ffa500)', borderRadius: '75px', border: '5px solid white', zIndex: '1000' }} onClick={() => alert("Floating button clicked!")}>
                <GiFlagObjective className="w-10 h-10 text-white"/>
            </button>
        </div>
    );
}
export default FloatingButton;