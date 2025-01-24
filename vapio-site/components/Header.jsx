import React, { useState, useEffect, useRef } from 'react';

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
    <header className="shadow relative top-0 bg-white text-black">
      <nav className="px-4 py-2" role="navigation" aria-label="Main Navigation">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Home">
            <img src="logo.jpg" className="h-10 w-36" alt="Company Logo" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-black hover:text-orange-500">
              Product
            </a>

            {/* Dropdown for Industry */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-orange-500 focus:outline-none"
              >
                Industry
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-40 z-50">
                  <a
                    href="/Industry/Tech"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-100 border-t border-gray-200 transition-all duration-200"
                  >
                    Technology
                  </a>
                  <a
                    href="/Industry/Healthcare"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-100 border-t border-gray-200 transition-all duration-200"
                  >
                    Healthcare
                  </a>
                  <a
                    href="/Industry/Education"
                    className="block px-3 py-1.5 text-sm hover:bg-gray-500 border-t border-gray-200 transition-all duration-200"
                  >
                    Education
                  </a>
                </div>
              )}
            </div>

            <a href="/Pricing" className="text-black hover:text-orange-500">
              Pricing
            </a>
            <a href="/Company" className="text-black hover:text-orange-500">
              Company
            </a>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="#"
            className="bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded"
          >
            Talk to Expert
          </a>
        </div>
      </nav>
    </header>
  );
}

