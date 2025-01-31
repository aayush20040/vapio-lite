import React from "react";
import { GrSecure } from "react-icons/gr";
import { BsGraphUp } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa6";

const Foot = ({ darkMode }) => {
  return (
    <>
      <h1
        className={`h-20 text-5xl mt-4 text-center bg-clip-text text-transparent font-bold
          ${darkMode ? "bg-gradient-to-r from-indigo-300 to-pink-400" : "bg-gray-200 bg-gradient-to-r from-indigo-600 to-pink-500"}`}
      >
        Why Vapio?
      </h1>

      <div className={`min-h-[550px] flex items-center transition-colors duration-300 
          ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            {/* Left Column: Image */}
            <div data-aos="zoom-in">
              <img
                src="lock.jpg"
                className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
                alt="Security"
              />
            </div>

            {/* Right Column: Text */}
            <div className="flex flex-col gap-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12" />
                  <p className={`text-2xl font-semibold ${darkMode ? "text-red-400" : "text-red-600"}`}>
                    Security
                  </p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <BsGraphUp className="text-4xl h-12 w-12" />
                  <p className={`text-2xl font-semibold ${darkMode ? "text-red-400" : "text-red-600"}`}>
                    Scalable
                  </p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaThumbsUp className="text-4xl h-12 w-12" />
                  <p className={`text-2xl font-semibold ${darkMode ? "text-red-400" : "text-red-600"}`}>
                    Reliable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
