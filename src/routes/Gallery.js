import React, { useState, useEffect } from "react";
import "./Gallery.css";

import umbrella1 from "../img/2016-29.jpg";
import umbrella2 from "../img/2016-32.jpg";
import pic3 from "../img/2016-33.jpg";
import pic4 from "../img/2018-75.jpg";
import pic5 from "../img/2018-77.jpg";

import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

import { useLoaderData } from "react-router-dom";
import { IconButton } from "@mui/material";

async function getGalleryRefPromise() {
  const galleryRef = ref(storage, "gallery");

  const galleryPromise = listAll(galleryRef)
    .then((res) => {
      const galleryRefs = [];
      res.items.forEach((itemRef) => {
        galleryRefs.push(itemRef);
      });

      return galleryRefs;
    })
    .catch((error) => {
      console.log("Error with listAll function!", error);
    });

  return galleryPromise;
}

function swapElements(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

export async function getGalleryUrls() {
  const galleryRefPromise = getGalleryRefPromise();
  const result = await galleryRefPromise;
  const promises = result.map(async (references) => {
    const url = await getDownloadURL(references);
    return url;
  });
  const urls = await Promise.all(promises);

  // google firebase storage doesn't allow reordering of pngs... there's a way to work around this, but I am lazy.
  swapElements(urls, 0, 5);
  swapElements(urls, 1, 4);
  swapElements(urls, 0, 1);
  return urls;
}

function Gallery() {
  const galleryUrls = useLoaderData();

  const [imgIdx, setImgIdx] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  let interval1;
  const advanceIdx = () => {
    setImgIdx((prevImgIdx) => (prevImgIdx + 1) % galleryUrls.length);
  };
  const previousIdx = () => {
    setImgIdx((prevImgIdx) => (prevImgIdx - 1) % galleryUrls.length);
  };

  // useEffect(() => {
  //   if (!isPaused) {
  //     interval1 = setInterval(() => {
  //       advanceIdx();
  //     }, 3000);
  //   } else {
  //     clearInterval(interval1);
  //   }

  //   return () => clearInterval(interval1);
  // }, [isPaused]);

  const pauseSlideShow = () => {
    setIsPaused((previousPauseValue) => !previousPauseValue);
  };

  const navigateImgTo = (e) => {
    setImgIdx(+e.target.getAttribute("data-img-idx"));
  };

  return (
    <div className="gallery">
      <div className="gallery__block">
        <div
          className="gallery__block__background"
          style={{
            backgroundImage: `url(${galleryUrls[imgIdx]})`,
          }}
        ></div>
        <div className="gallery__block__info">
          <h1>Gallery</h1>
          <p>Explore our past events</p>
          {/* <button className="gallery__block__info__button">
            <h1
              style={{
                fontWeight: "100",
                fontSize: "3vh",
              }}
            >
              Learn More
            </h1>
            <KeyboardDoubleArrowDownIcon
              style={{
                fontSize: "4vh",
                marginLeft: "1vh",
              }}
            />
          </button> */}
        </div>
        <div className="gallery__block__controls">
          <IconButton onClick={previousIdx}>
            <WestIcon />
          </IconButton>
          <IconButton onClick={pauseSlideShow}>
            {isPaused ? <PlayCircleIcon /> : <PauseCircleOutlineIcon />}
          </IconButton>
          <IconButton onClick={advanceIdx}>
            <EastIcon />
          </IconButton>
        </div>
        {/* <div className="gallery__block__gallery">
          <div className="gallery__block__gallery__container">
            {galleryUrls.map((galleryUrl, idx) => {
              return (
                <div
                  key={galleryUrl}
                  data-img-idx={idx}
                  onClick={navigateImgTo}
                  className={`gallery__block__gallery__littleImg ${
                    idx === imgIdx
                      ? "gallery__block__gallery__littleImg--selected"
                      : ""
                  }`}
                  style={{
                    backgroundImage: `url(${galleryUrl})`,
                  }}
                ></div>
              );
            })}
            <div className="gallery__block__gallery__controls">
              <IconButton
                className="gallery__block__gallery__controls__pauseButton"
                onClick={pauseSlideShow}
              >
                {isPaused ? <PlayCircleIcon /> : <PauseCircleOutlineIcon />}
              </IconButton>
            </div>
          </div>
        </div>
        <small className="gallery__block__gallery__caption">点击图片</small> */}
      </div>
      <div className="gallery__selector">
        {/* <div className="gallery__selector__container">
          <button className="gallery__selector__btn ">2016</button>
          <button className="gallery__selector__btn">2017</button>
          <button className="gallery__selector__btn">2018</button>
          <button className="gallery__selector__btn">2019</button>
        </div> */}
      </div>
      <div className="gallery__block1">
        <img src={umbrella1} alt="" />
        <img src={umbrella2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
        <img src={pic5} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
