import React, { useState, useEffect } from 'react';
import OTP2 from "../src/assets/OTP 2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Signup = ({ darkMode }) => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignupForm(!showSignupForm);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Initialize AOS
  }, []);

  return (
    <div className={`flex h-[700px] ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      {/* Left Side Content */}
      <div className={`w-1/2 flex flex-col justify-center items-start px-8 py-10 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Try Vapio's OTP Solution Free For 7 Days</h2>
        <p className="text-lg mb-6">
          Become a part of our amazing community. Sign up now to enjoy exclusive benefits and features!
        </p>
        <button
          onClick={handleSignUpClick}
          className={`px-6 py-3 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded-lg hover:bg-blue-600 transition duration-300`}
          data-aos="fade-up"
        >
          Sign Up
        </button>

        {/* Sign Up Form (Displayed below the button when clicked) */}
        {showSignupForm && (
          <div className="mt-8 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-lg">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded-lg hover:bg-blue-600 transition duration-300 mt-4`}
                data-aos="fade-up"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Right Side Image */}
      <div className={`w-1/2 bg-cover bg-center ${darkMode ? 'filter brightness-75' : ''}`} data-aos="fade-right">
        <img src={OTP2} alt="OTP Illustration" className="w-[500px] h-[600px] ml-32" />
      </div>
    </div>
  );
};

export default Signup;
