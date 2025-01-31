import React, { useEffect } from "react";
import Slider from "react-slick"; // Import react-slick
import Aos from "aos"; // Import AOS for animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import kala from '../src/assets/kala.png'
// Import images
import video from '../src/assets/vedio.mp4'; 
import Card from "../src/Card";
import Sumbit from "./Sumbit";
import Footer from "./Footer";
import ImageSlider from "./Trust";
import Foot from "./Foot";



// Hero Component
const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  useEffect(() => {
    Aos.init({ duration: 800 }); // Initialize AOS
  }, []);

  return (
    <>
    {/* Hero Section with Slider */}
    <div className="slider-container relative">
      <Slider {...settings}>
        {/* First Slide with Background Video */}
        <div>
          <div className="relative w-full h-[680px] overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={video}  // Use the imported video
              autoPlay
              muted
              loop
            ></video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Optional overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white mt-1">
            <div className="mt-[-50px] text-center">
  <h1
    className="text-5xl font-extrabold text-white leading-tight text-center mb-20"
    data-aos="fade-up"
  >
    Achieve Global Reach with Scalable SMS APIs
  </h1>
  <p className="text-center mb-20" data-aos="fade-up">
    Vapio’s SMS<strong /> API platform empowers businesses to engage
    <br />
    customers worldwide with seamless, high-volume messaging. Deliver
    personalized,
    <br />
    timely SMS at scale—whether you’re reaching a few or millions—backed
    <br />
    by reliable performance and real-time analytics. Scale effortlessly with
    our proven, secure APIs.
  </p>
  
  <button
    className="px-10 py-3 mt-1 bg-blue-500 text-white rounded-lg border-2 border-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
  >
    Start a Free Trial
  </button>
</div>
</div>

            
            
          </div>
        </div>
        <div className="h-screen w-full flex items-center justify-center px-20">
  {/* Left Side - Text Content */}
  <div className="w-1/2">
    <h2 className="text-4xl font-bold text-gray-800">Your Title Here</h2>
    <p className="text-lg text-gray-600 mt-4">
      Your description goes here. This section can include details about your content.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="w-1/2 flex justify-start">
    <img 
      src={kala} 
      alt="Kala" 
      className="h-[500px] w-[500px] object-cover mt-20 ml-200" 
    />
  </div>
</div>







      </Slider>
    </div>
      {/* Hero Section with Slider */}
      
      {/* Content Section */}
      <div className="">
        <div className="m-5">
          <h1
            data-aos="fade-up"
            className="text-center mt-1  bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent text-5xl mx-11 pb-8 font-medium"
          >
            Your All-in-One Solution for Marketing, Commerce, and Customer Engagement
          </h1>
          <p
            data-aos="fade-up"
            className="text-center"
          >
            Vapio combines powerful tools for marketing automation, personalized messaging,
            and customer support into a single integrated platform. Whether you're running targeted campaigns,
            driving sales through seamless commerce solutions, or providing real-time support, Vapio streamlines
            communication at every customer touchpoint. Our platform is designed to scale with your business, ensuring
            efficient and impactful engagement with customers across all channels—SMS, email, chat, and voice—helping you
            drive growth and enhance customer loyalty.
          </p>
        </div>

        {/* API Integration Section */}
        <div className="text-black grid grid-cols-2 gap-14  w-[1524px]">
          <div className="p-4 w-full m-40 text-black">
            <h2
              data-aos="zoom-in"
              className="text-4xl font-semibold text-left bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent"
              >
              Instant API Integrations for Rapid Setup
            </h2>
            <p
              data-aos="fade-up"
              className="mt-2 text-left mx-auto max-w-3xl"
            >
              Get up and running quickly with Vapio’s ready-to-use API integrations. Effortlessly connect with your existing
              systems and start optimizing customer engagement without delays.
            </p>
          </div>
          <div className="p-4 ml-32">
            <img
              data-aos="flip-left"
              className="pt-2 rounded-xl h-96 mt-26 w-[500px]"
              src="https://www.bew-web-agency.fr/wp-content/uploads/2023/05/rest-api-scaled.jpg"
              alt="API Integration"
            />
          </div>
        </div>
      </div>

      {/* Trusted by Companies Section */}
      <ImageSlider></ImageSlider>

      {/* Card Component */}
      
      
      
      
    </>
  );
};

export default Hero; 