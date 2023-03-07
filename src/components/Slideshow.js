import React, { useState, useEffect } from "react";
import "./Slideshow.css";

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // console.log("Starting slideshow interval");
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide + 1) % images.length;
      // console.log(`Current slide: ${currentSlide}, Next slide: ${nextSlide}`);
      setCurrentSlide(nextSlide);
    }, 3000);
    return () => {
      // console.log("Clearing slideshow interval");
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      {/* Slides */}
      <div className="slides">
        {images.map(({ img_url, object_position }, index) => {
          let isActive = currentSlide === index;
          return (
            <div
              className={`slide ${currentSlide === index ? "active" : ""}`}
              key={index}
            >
              <img
                src={img_url}
                alt={`Slide ${index + 1}`}
                style={{
                  objectPosition: `${object_position}`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="dots">
        {images.map(({ img_url, object_position }, index) => (
          <span
            className={`dot ${currentSlide === index ? "active" : ""}`}
            key={index}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
