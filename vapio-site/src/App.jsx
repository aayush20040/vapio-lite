import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TwowaySMS from '../components/TwowaySMS';
import A2P from '../components/A2P';
import Otp from '../components/Otp';
import Misscall from '../components/Misscall';
import Footer from '../components/Footer';
import Foot from '../components/Foot';
import Sumbit from '../components/Sumbit'; // Corrected the typo

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Get the current location (path)

  const handleOrderPopup = () => {
    setOrderPopup((prev) => !prev);
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className={`min-h-screen flex flex-col justify-between ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      <div className="flex-grow">
        <Routes>
          {/* Default Home Page */}
          <Route index element={<Hero handleOrderPopup={handleOrderPopup} />} />

          {/* Other Product Pages */}
          <Route path="/products/TwowaySMS" element={<TwowaySMS />} />
          <Route path="/products/A2P" element={<A2P />} />
          <Route path="/products/Otp" element={<Otp />} />
          <Route path="/products/Misscall" element={<Misscall />} />
        </Routes>
      </div>

      {/* Render Footer, Foot, and Submit only on the home page */}
      {isHomePage && (
        <>
          
          <Foot />
          <Sumbit />
          <Footer />
        </>
      )}
    </div>
  );
}

// Wrap the entire app in the Router here in main entry point (like index.js)

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
