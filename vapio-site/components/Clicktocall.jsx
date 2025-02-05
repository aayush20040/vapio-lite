import React from 'react';
import kala from '../path-to-image/kala.png'; // Update the path

function Clicktocall() {
  return (
    <>
      <div 
        className="flex items-center justify-between p-6 bg-gray-100 rounded-xl shadow-md w-full h-screen" 
        data-aos="fade-up"
      >
        {/* Left Side: Heading */}
        <div className="w-1/2 text-left p-10" data-aos="fade-right">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Missed Call Service for Improved Customer Communication
          </h2>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Generate leads and run effective campaigns
            <br />
            at no cost using the Missed Call Service,
            <br />
            making it easy for customers to engage and
            <br />
            for you to capture valuable insights.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-end p-10" data-aos="fade-left">
          <img
            src={kala}
            alt="Missed Call Service"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Reversed Layout (Image on Left and Heading on Right) */}
      <div 
        className="flex items-center justify-between p-6 bg-gray-100 rounded-xl shadow-md w-full h-screen mt-[-220px]" 
        data-aos="fade-up"
      >
        {/* Left Side: Image */}
        <div className="w-1/2 flex justify-start p-10" data-aos="fade-right">
          <img
            src={kala}
            alt="Missed Call Service"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>   

        {/* Right Side: Heading */}
        <div className="w-1/2 text-left p-10" data-aos="fade-left">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Enhance Customer Engagement with Our Service
          </h2>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Give your customers a simple way to connect with
            <br />
            your business while gaining valuable insights 
            <br />
            into their interests and preferences.
          </p>
        </div>
      </div>
    </>
  );
}

export default Clicktocall;
