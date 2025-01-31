import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-lg relative top-0  text-black rounded-xl  ">
      <nav className="px-4 py-2" role="navigation" aria-label="Main Navigation">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img src="logo.jpg" className="h-10 w-36" alt="Company Logo" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-black hover:text-orange-500">
              Products
            </Link>

            {/* Dropdown for Industry */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-orange-500 focus:outline-none"
              >
                Products
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-40 z-50">
                  <Link
                    to="/Products/TwowaySMS"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-100 border-t border-gray-200 transition-all duration-200"
                  >
                    TwoWaySMS
                  </Link>
                  <Link
                    to="/Products/A2P"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-100 border-t border-gray-200 transition-all duration-200"
                  >
                    A2P
                  </Link>
                  <Link
                    to="/Products/Otp"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-500 border-t border-gray-200 transition-all duration-200"
                  >
                    Otp
                  </Link>
                  <Link
                    to="/Products/Misscall"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-500 border-t border-gray-200 transition-all duration-200"
                  >
                    Misscall
                  </Link>

                </div>
              )}
            </div>

            
            <Link to="/Company" className="text-black hover:text-orange-500">
              Company
            </Link>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="#"
            className="bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded-xl"
          >
            Talk to Expert
          </a>
        </div>
      </nav>
    </header>
  );
}
