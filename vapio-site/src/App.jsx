import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import A2P from '../components/A2P'

import './App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TwowaySMS from '../components/TwowaySMS'; // Example new page component

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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
      <div>
        {/* Header is included in all routes */}
        <Header />

        {/* Routes definition */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Hero handleOrderPopup={handleOrderPopup} />} />
          
          {/* Example: Industry/TwowaySMS Page */}
          <Route path="/Industry/TwowaySMS" element={<TwowaySMS />} />
          <Route path="/Industry/A2P" element={<A2P/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
