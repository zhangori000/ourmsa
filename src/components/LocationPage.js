import React, { useRef, useState, useEffect } from "react";
import OurTeam from "./OurTeam";
import Slideshow from "./Slideshow";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import "./LocationPage.css";
import OrganizedSlideshow from "./OrganizedSlideshow";
import { informationMap } from "../useful/information";

function LocationPage({ location }) {
  // logic related to timeline and controls
  // const timelineImgRef = useRef(null);
  // const [timelineImgHeight, setTimelineImgHeight] = useState(75);

  // useEffect(() => {
  //   if (timelineImgRef.current) {
  //     const clientHeight = timelineImgRef.current.clientHeight;
  //     const parentHeight = timelineImgRef.current.parentNode.clientHeight;
  //     const percentageHeight = Math.round((clientHeight / parentHeight) * 100);
  //     setTimelineImgHeight(percentageHeight);
  //   }
  // }, []);

  // useEffect(() => {
  //   const parentHeight = timelineImgRef.current.parentNode.clientHeight;
  //   const value = parentHeight * (timelineImgHeight / 100);
  //   timelineImgRef.current.style.height = `${value}px`;
  // }, [timelineImgHeight]);
  const [posterIdx, setPosterIdx] = useState(0);

  const postersJsx = informationMap[location]["bigPosters"].map(
    (obj, index) => (
      <img
        className={index === posterIdx ? "" : "hide_img"}
        key={obj.imgUrl}
        src={obj.imgUrl}
        alt={obj.imgUrl}
      />
    )
  );

  return (
    <div className="locationPage">
      <div className="locationPage__intro">
        <div className="locationPage__videoContainer">
          <Slideshow images={informationMap[location].slideShowImages} />
          {informationMap[location]["headerHtml"]}
        </div>
      </div>
      <div
        className="front_poster_background"
        style={{
          backgroundColor:
            informationMap[location]["bigPosters"][posterIdx].backgroundColor,
        }}
      >
        <div className="front_poster">
          <div className="img_picker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrow leftArrow"
              onClick={() => {
                setPosterIdx((prev) => {
                  if (prev - 1 === -1) {
                    return informationMap[location]["bigPosters"].length - 1;
                  }
                  return prev - 1;
                });
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            {/* <img
              src={informationMap[location]["bigPosters"][posterIdx]["imgUrl"]}
              alt=""
            /> */}
            {postersJsx}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrow rightArrow"
              onClick={() => {
                setPosterIdx((prev) => {
                  if (
                    prev + 1 ===
                    informationMap[location]["bigPosters"].length
                  ) {
                    return 0;
                  }
                  return prev + 1;
                });
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          {informationMap[location].introductionText}
        </div>
      </div>
      {/* <TimelineSchedule location="mn" weeks={[1, 2, 3, 4, 5, 6, 7, 8]} /> */}
      {/* <div className="locationPage__classIntro">
        <PictureContainer
          picture={`https://dfiit17cey0yc.cloudfront.net/2024_class_introduction_${location}.jpg`}
          objectFitContain
        />

        <PictureContainer
          picture={`https://dfiit17cey0yc.cloudfront.net/2024_class_introduction2_${location}.jpg`}
        />
      </div> */}
      <div className="locationPage__schedule">
        <div className="locationPage__schedule__left">
          <img
            src={`https://dfiit17cey0yc.cloudfront.net/2024-${location}-blackSchedule.jpg`}
            alt={`${location} class schedule`}
          />
        </div>
        <div className="locationPage__schedule__right">
          <img
            src={`https://dfiit17cey0yc.cloudfront.net/2023-${location}-schedule.jpg`}
            alt={`${location} class schedule times`}
          />
        </div>
      </div>

      {/* <TimelineSchedule
        location={location}
        weeks={informationMap[location].weeks}
      /> */}

      <div className="locationPage__ourTeam">
        <OurTeam teamMembers={informationMap[location].teamMembers} />
      </div>
      <div className="locationPage__register">
        <div className="container">
          <OrganizedSlideshow
            organizedSlideshow={informationMap[location].organizedSlideshow}
          />
          <div className="links_container">
            <a
              href={informationMap[location]["registrationLinks"].oneStudent}
              target="_blank"
              rel="noreferrer"
            >
              One Child Registration
            </a>
            <a
              href={informationMap[location]["registrationLinks"].family}
              target="_blank"
              rel="noreferrer"
            >
              Family Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
