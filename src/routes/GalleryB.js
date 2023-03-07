import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

// import { storage } from "../firebase.js";

import "./GalleryB.css";
import { getDownloadSrc } from "../useful/filePathTools.js";

export async function loader() {
  const img_order = ["mplsIris.jpg"];

  const { video_urls, img_urls_object } = await getDownloadSrc([], img_order);
  return { video_urls, img_urls_object };
}

function GalleryB() {
  const { location, pictureType } = useParams();
  const { video_urls, img_urls_object } = useLoaderData();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   async function getImages() {
  //     const storageRef = ref(storage, "gallery"); // Get a reference to the folder in storage
  //     const listResult = await listAll(storageRef); // List all the items in the folder
  //     const imageArray = [];
  //     for (const item of listResult.items) {
  //       const downloadUrl = await getDownloadURL(item);
  //       const metadata = await getMetadata(item);
  //       if (metadata.contentType.startsWith("image/")) {
  //         imageArray.push({
  //           name: metadata.name,
  //           url: downloadUrl,
  //         });
  //       }
  //     }
  //     setImages(imageArray);
  //   }
  //   getImages();
  // }, []);

  return (
    <div className="galleryB">
      <div className="galleryB__introductionContainer">
        <img src={img_urls_object["mplsIris.jpg"]} alt="volunteerImage" />
        <div className="galleryB__introduction">
          <p>{location.toUpperCase()}</p> / <p>{pictureType.toUpperCase()} </p>/{" "}
          <p>GALLERY</p>
        </div>
      </div>
      {windowWidth < 900 ? (
        <div className="galleryB__container" id="option1">
          option1
        </div>
      ) : (
        <div className="galleryB__container" id="option2">
          <div className="galleryB__container__pillar" id="pillar1">
            {images.map((image, idx) => {
              if (idx % 3 === 0) {
                return (
                  <LazyLoad
                    once
                    key={image.name}
                    className="galleryB__imgContainer"
                  >
                    <img src={image.url} alt={image.name} />
                  </LazyLoad>
                );
              }
            })}
          </div>
          <div className="galleryB__container__pillar" id="pillar2">
            {images.map((image, idx) => {
              if (idx % 3 === 1) {
                return (
                  <LazyLoad key={image.name} className="galleryB__imgContainer">
                    <img src={image.url} alt={image.name} />
                  </LazyLoad>
                );
              }
            })}
          </div>
          <div className="galleryB__container__pillar" id="pillar3">
            {images.map((image, idx) => {
              if (idx % 3 === 2) {
                return (
                  <LazyLoad key={image.name} className="galleryB__imgContainer">
                    <img src={image.url} alt={image.name} />
                  </LazyLoad>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryB;
