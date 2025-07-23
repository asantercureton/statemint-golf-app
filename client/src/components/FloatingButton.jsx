import React from "react";
import { GrAdd } from "react-icons/gr";

const FloatingButton = () => {
    return (
        <div className="">
            <button className="fixed bottom-4 right-4 flex justify-center items-center w-25 h-25" style={{background: '#00ec14', color: 'white', borderRadius: '75px', zIndex: '1000'}} onClick={() => alert("Floating button clicked!")}><GrAdd /></button>
        </div>
    );
}
export default FloatingButton;