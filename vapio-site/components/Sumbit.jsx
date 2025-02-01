import React from 'react'

const Sumbit = () => {
  return (
   <>
     <h1
            data-aos="fade-up"
            className="text-center mt-10 bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent text-5xl md:text-6xl font-semibold tracking-wide mx-5 pb-8"
          >
           Interested in becoming a Vapio partner?
     </h1>

     <div className="flex items-center justify-center bg-gradient-to-r from-blue-100 to-white py-16">

       {/* Left Section */}
       <div className="w-full md:w-1/2 p-6 flex justify-center">
         <img
           src="https://www.gupshup.io/_next/image?url=https%3A%2F%2Fgs-upload.gupshup.io%2Frevamp%2Fassets%2Fv3%2Fimages%2Fchannel-partners%2Fv5-sidehugForm-1.webp&w=640&q=80"
           alt="Placeholder"
           className="w-[450px] h-[450px] object-cover rounded-full shadow-2xl transition-transform transform hover:scale-105"
         />
       </div>

       {/* Right Section */}
       <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-8 md:mt-4">
         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>

         <form action="#" method="POST">

           {/* Name Input */}
           <div className="mb-6">
             <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
             <input
               type="text"
               id="name"
               name="name"
               required
               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
             />
           </div>

           {/* Email Input */}
           <div className="mb-6">
             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
             <input
               type="email"
               id="email"
               name="email"
               required
               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
             />
           </div>

           {/* Message Textarea */}
           <div className="mb-6">
             <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
             <textarea
               id="message"
               name="message"
               rows="4"
               required
               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
             ></textarea>
           </div>

           {/* Submit Button */}
           <button
             type="submit"
             className="w-full p-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
           >
             Submit
           </button>
         </form>
       </div>
     </div>
   </>
  )
}

export default Sumbit;
