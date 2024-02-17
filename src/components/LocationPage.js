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

  return (
    <div className="locationPage">
      <div className="locationPage__intro">
        <div className="locationPage__videoContainer">
          <Slideshow images={informationMap[location].slideShowImages} />
          {informationMap[location]["headerHtml"]}
        </div>
      </div>
      <div className="front_poster_background">
        <div className="front_poster">
          <img
            src={`https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2024_${location}_main_science_poster.jpg`}
            alt=""
          />
          {informationMap[location].introductionText}
        </div>
      </div>
      {/* <TimelineSchedule location="mn" weeks={[1, 2, 3, 4, 5, 6, 7, 8]} /> */}
      {/* <div className="locationPage__classIntro">
        <PictureContainer
          picture={`https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2024_class_introduction_${location}.jpg`}
          objectFitContain
        />

        <PictureContainer
          picture={`https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2024_class_introduction2_${location}.jpg`}
        />
      </div> */}
      <div className="locationPage__schedule">
        <div className="locationPage__schedule__left">
          <img
            src={`https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2024_${location}_class_grade_distribution.jpg`}
            alt={`${location} class schedule`}
          />
        </div>
        <div className="locationPage__schedule__right">
          <img
            src={`https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-${location}-schedule.jpg`}
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
              href="https://www.ourmsa.org/events/2024-summer-camp-registration-one-student"
              target="_blank"
              rel="noreferrer"
            >
              One Child Registration
            </a>
            <a
              href="https://www.ourmsa.org/events/2024-summer-camp-registration-siblings"
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
