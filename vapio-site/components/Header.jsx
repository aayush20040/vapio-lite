import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ darkMode, setDarkMode }) {
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

  const productLinks = [
    { to: '/Products/TwowaySMS', label: 'TwoWaySMS' },
    { to: '/Products/A2P', label: 'A2P' },
    { to: '/Products/Otp', label: 'Otp' },
    { to: '/Products/Misscall', label: 'Misscall' }
  ];

  return (
    <header
      className={`shadow-lg relative top-0 rounded-xl transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <nav className="px-4 py-2" role="navigation" aria-label="Main Navigation">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img src="logo.jpg" className="h-10 w-36" alt="Company Logo" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </Link>

            {/* Dropdown for Products */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-orange-500 focus:outline-none dark:text-white dark:hover:text-orange-500 transition-colors duration-300"
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : 'false'}
              >
                Products
              </button>
              {isOpen && (
                <div
                  className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-40 z-50 dark:bg-gray-800 dark:border-gray-700"
                  role="menu"
                  aria-label="Product Menu"
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-3 py-1.5 text-sm hover:bg-gray-100 border-t border-gray-200 transition-all duration-200 dark:hover:bg-gray-700 dark:text-white"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/Company"
              className="text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-500 transition-colors duration-300"
            >
              Company
            </Link>
          </div>

          {/* Dark Mode Toggle Button */}
          

          {/* Call-to-Action Button */}
          <a
            href="#"
            className="bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded-xl transition duration-300"
          >
            Talk to Expert
          </a>
        </div>
        
      </nav>
    </header>
  );
}
