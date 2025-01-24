import React, { useEffect } from "react";
import Slider from "react-slick"; // Import react-slick
import Aos from "aos"; // Import AOS for animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

// Import images
import Shopping2 from "../src/assets/shopping.png";
import sale1 from "../src/assets/sale.png";
import women3 from "../src/assets/shopping.png";
import Card from "../src/Card";
import Sumbit from "./Sumbit";
import Footer from "./Footer";
import ImageSlider from "./Trust";
import Foot from "./Foot";

// Data for the carousel
const ImageList = [
  {
    id: 1,
    img: Shopping2,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: sale1,
    title: "30% off on all Women's Wear",  
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: women3,
    title: "70% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

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
      <div className="relative overflow-hidden min-h-[680px] flex justify-center items-center bg-gradient-to-r from-blue-200 to-orange-300 dark:text-black">
        <div className="container">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 text-center sm:text-left sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      className="text-5xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p data-aos="fade-up">{data.description}</p>
                    <div data-aos="fade-up">
                      <button
                        onClick={handleOrderPopup}
                        className="hover:scale-105 duration-200 bg-red-600 text-white py-2 px-4"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="order-2">
                    <div data-aos="zoom-in" className="relative z-10">
                      <img
                        src={data.img}
                        className="w-[300px] h-[300px] object-contain mx-auto"
                        alt={data.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <div className="m-5">
          <h1
            data-aos="fade-up"
            className="text-center  bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 bg-clip-text text-transparent text-5xl mx-11 pb-8 font-medium"
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
      <Card />
      <Sumbit></Sumbit>
      <Foot></Foot>
      <Footer></Footer>
      
    </>
  );
};

export default Hero;
