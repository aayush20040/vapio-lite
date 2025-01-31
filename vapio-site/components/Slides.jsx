import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      type: "image",
      src: "https://via.placeholder.com/800x400",
      alt: "First Slide",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Second Slide",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Items */}
      <div className="w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              currentIndex === index ? "" : "hidden"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-[500px] object-cover"
              />
            ) : (
              <video
                src={slide.src}
                alt={slide.alt}
                controls
                className="w-full h-[500px] object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
