// import React from 'react'

// const Foot = () => {
//   return (
//     <>
//   <h1 className=" h-20 text-5xl mt-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 font-bold">
//   Why Vapio?
// </h1>

//     <div className="flex items-center justify-between py-12 px-6 mt-6 w-[1000px] ml-[270px]  ">
//   {/* Left Column: Image */}
//   <div className="w-1/2">
//     <img src="lock.jpg" alt="Image description" className="w-[400px] h-[400px] rounded-[55%] shadow-lg" />
//   </div>

//   {/* Right Column: Text */}
//   <div className="w-1/2 pl-8">
//     <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Title Here</h2>
//     <p className="text-lg text-gray-600">This is some content to describe the image on the left side. You can put anything here, like a paragraph, a description, or call-to-action text.</p>
//   </div>
// </div>

//     </>
//   )
// }

// export default Foot

import React from "react";
import { GrSecure } from "react-icons/gr";
import { BsGraphUp } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa6";

const Foot = () => {
  return (
    <>
    <h1 className=" h-20 text-5xl bg-gray-200 mt-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 font-bold">
  Why Vapio?
</h1>
<div className="min-h-[550px] bg-gray-100 flex items-center">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
      {/* Left Column: Image */}
      <div data-aos="zoom-in">
        <img
          src="lock.jpg"
          className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
          alt=""
        />
      </div>

      {/* Right Column: Text */}
      <div className="flex flex-col gap-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto"> {/* Adjusted width */}
        <div className="flex flex-col gap-4">
          <div data-aos="fade-up" className="flex items-center gap-4">
            <GrSecure className="text-4xl h-12 w-12" />
            <p className="text-red-600 text-2xl font-semibold">Security</p>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-4">
            <BsGraphUp className="text-4xl h-12 w-12" />
            <p className="text-red-600 text-2xl font-semibold">Scalable</p>
            
          </div>
          <div data-aos="fade-up" className="flex items-center gap-4">
            <FaThumbsUp className="text-4xl h-12 w-12" />
            <p className="text-red-600 text-2xl font-semibold">Reliable</p>
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
