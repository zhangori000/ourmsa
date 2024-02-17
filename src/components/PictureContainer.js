import React, { useEffect, useRef, useState } from "react";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import "./PictureContainer.css";

function PictureContainer({ picture, objectFitContain }) {
  // logic related to timeline and controls
  const timelineImgRef = useRef(null);
  const [timelineImgHeight, setTimelineImgHeight] = useState(75);
  const [timelineImgWidth, setTimelineImgWidth] = useState(75);

  useEffect(() => {
    console.log(timelineImgRef.current);
    if (timelineImgRef.current) {
      const clientHeight = timelineImgRef.current.clientHeight;
      const clientWidth = timelineImgRef.current.clientWidth;
      const parentHeight = timelineImgRef.current.parentNode.clientHeight;
      const parentWidth = timelineImgRef.current.parentNode.clientWidth;
      const percentageHeight = Math.round((clientHeight / parentHeight) * 100);
      const percentageWidth = Math.round((clientWidth / parentWidth) * 100);
      setTimelineImgHeight(percentageHeight);
      setTimelineImgWidth(percentageWidth);
    }
  }, []);

  useEffect(() => {
    const parentHeight = timelineImgRef.current.parentNode.clientHeight;
    const value = parentHeight * (timelineImgHeight / 100);
    const widthIsSmallest = timelineImgHeight > timelineImgWidth;
    if (widthIsSmallest) {
      if (timelineImgHeight >= 100) {
        timelineImgRef.current.style.height = `${value}px`;
      }
    }
  }, [timelineImgHeight]);

  return (
    <div className="frame">
      <div className="container">
        <img src={picture} alt={`2024 intro`} ref={timelineImgRef} />
      </div>
      <div className="mn__timeline__content__controlpanel">
        <div
          className="mn__timeline__content__controlpanel__btn"
          onClick={() => {
            setTimelineImgHeight((prevHeight) => {
              if (prevHeight - 25 > 0) {
                if (objectFitContain) return prevHeight - 25;
              }
              return prevHeight;
            });
          }}
        >
          <ZoomOutIcon />
        </div>
        <div className="mn__timeline__content__controlpanel__btn">
          {timelineImgHeight}%
        </div>
        <div
          className="mn__timeline__content__controlpanel__btn"
          onClick={() => {
            setTimelineImgHeight((prevHeight) => prevHeight + 25);
          }}
        >
          <ZoomInIcon />
        </div>
        <div className="mn__timeline__content__controlpanel__btn">
          <OpenInNewIcon
            onClick={() => {
              window.open(picture, "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PictureContainer;
