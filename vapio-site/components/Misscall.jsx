import React from 'react';
import kala from '../src/assets/kala.png'
export default function LeftHeadingRightImage() {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-100 rounded-xl shadow-md w-full h-screen">
      {/* Left Side: Heading */}
      <div className="w-1/2 text-left p-10">
        <h2 className="text-5xl font-bold text-gray-800">Missed Call Service for 
Improved Customer Communication
</h2>
        <p className="text-gray-600 mt-4 text-lg">This is a description or subheading text that provides more context.</p>
      </div>
      
      {/* Right Side: Image */}
      <div className="w-1/2 flex justify-end p-10">
        <img 
          src={kala} 
          alt="Placeholder" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
}

