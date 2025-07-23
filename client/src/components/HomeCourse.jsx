import React from "react";
import { FaHome } from "react-icons/fa";

const HomeCourse = ({ course }) => {
    return (
        <div className="w-full max-w-4xl bg-emerald-900 text-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 mt-8">
            <FaHome className="text-2xl mb-2 text-white" />
            <h2 className="home-course text-xl font-semibold mb-2">HOME COURSE:</h2>
            <span className="text-lg text-amber-300">{course.name}</span>
            <span className="text-lg">{course.location}</span>
        </div>
    );
}

export default HomeCourse;