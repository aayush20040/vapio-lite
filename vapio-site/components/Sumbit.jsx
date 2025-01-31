import React, { useState } from "react";

const Sumbit = ({ darkMode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Reset after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen p-8 ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-100 to-orange-100'
      }`}
    >
      <div
        className={`w-full max-w-6xl shadow-lg rounded-lg p-8 md:p-12 relative z-10 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <div className="text-center mb-10">
          <h1
            className={`text-4xl font-bold bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent ${
              darkMode ? 'text-white' : ''
            }`}
          >
            Interested in becoming a Vapio Partner?
          </h1>
          <p className={`text-gray-600 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Fill out the form below and we will get back to you as soon as possible!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section: Image */}
          <div className="flex justify-center">
            <img
              src="https://www.gupshup.io/_next/image?url=https%3A%2F%2Fgs-upload.gupshup.io%2Frevamp%2Fassets%2Fv3%2Fimages%2Fchannel-partners%2Fv5-sidehugForm-1.webp&w=640&q=80"
              alt="Partnership"
              className="w-[400px] h-[400px] object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>

          {/* Right Section: Form */}
          <div>
            <h2 className={`text-2xl font-semibold mb-6 text-center ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Contact Us
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm ${
                      darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm ${
                      darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm ${
                      darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md transform hover:scale-105 transition duration-300 ${
                    darkMode ? 'hover:bg-orange-600' : ''
                  }`}
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  Thank you for reaching out!
                </h3>
                <p className="text-gray-600">
                  Your message has been successfully submitted. We will get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Styling */}
      <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-100 via-orange-100 to-orange-200"></div>
    </div>
  );
};

export default Sumbit;
