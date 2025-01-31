import { BrowserRouter as Router, Route, Routes, data } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import A2P from '../components/A2P';
import Otp from '../components/Otp';
import './App.css';
import Hero from '../components/Hero';
import TwowaySMS from '../components/TwowaySMS';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Misscall from '../components/Misscall';
import Sumbit from '../components/Sumbit';
import Foot from '../components/Foot';
function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Save dark mode preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Initialize AOS animations
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col justify-between ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
        
        {/* Header is included in all routes */}
        <Header />

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Hero handleOrderPopup={handleOrderPopup} />} />
            
            {/* Industry Pages */}
            <Route path="/products/TwowaySMS" element={<TwowaySMS />} />
            <Route path="/Products/A2P" element={<A2P />} />
            <Route path="/Products/Otp" element={<Otp />} />
            <Route path="/Products/Misscall" element={<Misscall />} />
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      <Foot darkMode={darkMode}/>
      <Sumbit darkMode={darkMode}/>

        {/* Footer inside dark mode wrapper */}
        
      </div>
      
    </Router>
    
  );
}

export default App; 