import React, { useState, useEffect } from "react";

import "./OrganizedSlideshow.css";

function OrganizedSlideshow({ organizedSlideshow }) {
  const [selectedCategory, setSelectedCategory] = useState("classes");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleAlbumChange = (albumName) => {
    setSelectedCategory(albumName);
    setCurrentSlide(0);
  };

  // useEffect(() => {
  //   // console.log("Starting slideshow interval");
  //   const images = getImagesBasedOnCategory(selectedCategory);
  //   const intervalId = setInterval(() => {
  //     const nextSlide = (currentSlide + 1) % images.length;
  //     // console.log(`Current slide: ${currentSlide}, Next slide: ${nextSlide}`);
  //     setCurrentSlide(nextSlide);
  //   }, 1000);
  //   return () => {
  //     // console.log("Clearing slideshow interval");
  //     clearInterval(intervalId);
  //   };
  // }, [currentSlide]);

  const getImagesBasedOnCategory = (category) => {
    // Find the album with the specified name
    const album = organizedSlideshow.find(
      (album) => album.albumName === category
    );

    // If album is found, return its images, otherwise return an empty array
    return album ? album.images : [];
  };

  const getAlbumNames = () => {
    return organizedSlideshow.map((organization) => organization.albumName);
  };

  // preload each album with their respective images
  const albumsDict = {};

  organizedSlideshow.forEach((album) => {
    const { albumName, images } = album;
    const imgTags = images.map((image, index) => (
      <div
        style={{ display: selectedCategory === albumName ? "block" : "none" }}
        className={`slide${index === currentSlide ? " active" : ""}`}
        key={`div-containing-img-${index}`}
      >
        <img
          src={image.img_url}
          style={image.style}
          alt={`Slide ${index + 1}`}
        />
      </div>
    ));

    albumsDict[albumName] = imgTags;
  });

  return (
    <div className="slideshow-container">
      {/* Slides */}
      <div className="slides">
        {/* {getImagesBasedOnCategory(selectedCategory).map(
          ({ img_url, style }, index) => {
            let isActive = currentSlide === index;
            return (
              <div className={`slide ${isActive ? "active" : ""}`} key={index}>
                <img src={img_url} alt={`Slide ${index + 1}`} style={style} />
              </div>
            );
          }
        )} */}
        {Object.entries(albumsDict).map(([albumName, imgTags]) => imgTags)}
      </div>

      {/* left arrow */}
      <div
        className="slideArrow leftArrow"
        onClick={() =>
          handleSlideChange((prev) => {
            if (prev - 1 === -1) {
              return getImagesBasedOnCategory(selectedCategory).length - 1;
            }
            return prev - 1;
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* right arrow */}
      <div
        className="slideArrow rightArrow"
        onClick={() =>
          handleSlideChange((prev) => {
            if (
              prev + 1 ===
              getImagesBasedOnCategory(selectedCategory).length
            ) {
              return 0;
            }
            return prev + 1;
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {/* album picker */}
      <div className="albums">
        {getAlbumNames().map((albumName, index) => (
          <div
            className={`album ${
              selectedCategory === albumName ? "active" : ""
            }`}
            key={`${index}${albumName}`}
            onClick={() => handleAlbumChange(albumName)}
          >
            {albumName}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {getImagesBasedOnCategory(selectedCategory).map(
          ({ img_url, style }, index) => (
            <span
              className={`dot ${currentSlide === index ? "active" : ""}`}
              key={index}
              onClick={() => handleSlideChange(index)}
            ></span>
          )
        )}
      </div>

      {/* <div className="gradient-overlay"></div> */}
    </div>
  );
}

export default OrganizedSlideshow;
