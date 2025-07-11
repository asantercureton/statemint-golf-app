import React from "react";
import { GrAdd } from "react-icons/gr";

const FloatingButton = () => {
    return (
        <div>
            <button className="fixed bottom-4 right-4 flex justify-center items-center w-30 h-30" onClick={() => alert("Floating button clicked!")}><GrAdd /></button>
        </div>
    );
}
export default FloatingButton;