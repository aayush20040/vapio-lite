import { useState,useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import './App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'

function App() {
  const [orderPopup,setOrderPopup]=useState(false)
 
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
    <div>
      <Header></Header>
      <Hero  handleOrderPopup={handleOrderPopup}/>
      
     </div>
      
    </>
  )
}

export default App
