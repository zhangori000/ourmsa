import React, { useState, useRef, useEffect } from "react";
import "./TimelineSchedule.css";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function TimelineSchedule({ location, weeks }) {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const tabs_information = weeks.map((ele, idx) => ({
    tab_title: `Week ${ele}`,
    tab_img_url: `https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023${location}+_Week${ele}.jpg`,
  }));

  // logic related to timeline and controls
  const timelineImgRef = useRef(null);
  const [timelineImgHeight, setTimelineImgHeight] = useState(75);

  useEffect(() => {
    if (timelineImgRef.current) {
      const clientHeight = timelineImgRef.current.clientHeight;
      const parentHeight = timelineImgRef.current.parentNode.clientHeight;
      const percentageHeight = Math.round((clientHeight / parentHeight) * 100);
      setTimelineImgHeight(percentageHeight);
    }
  }, []);

  useEffect(() => {
    const parentHeight = timelineImgRef.current.parentNode.clientHeight;
    const value = parentHeight * (timelineImgHeight / 100);
    timelineImgRef.current.style.height = `${value}px`;
  }, [timelineImgHeight]);

  return (
    <div className="mn__timeline">
      <div className="mn__timeline__container">
        <div className="mn__timeline__tabs">
          {tabs_information.map(({ tab_title, tab_img_url }, idx) => {
            let chosenClassName = "mn__timeline_tabs_tab";
            let borderRadiusSelected = "0px 0px 0px 0px";
            let borderRadiusUnselected = "0px 0px 0px 0px";
            let selectedColor = "rgb(228 227 209)";
            let unselectedColor = "rgb(69 68 65)";

            if (idx === selectedTabIdx) {
              borderRadiusSelected = "10px 10px 0 0";
            } else if (idx + 1 === selectedTabIdx) {
              borderRadiusUnselected = "0px 0px 10px 0px";
              borderRadiusSelected = "0px 0px 10px 0px";
            } else if (idx - 1 === selectedTabIdx) {
              borderRadiusUnselected = "0px 0px 0px 10px";
              borderRadiusSelected = "0px 0px 0px 10px";
            }

            const padding = "5px";

            const elementStyleCommonalities = {
              position: "absolute",
              inset: "0",
              padding: padding,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              width: "100%",
              transition: "all 0.1s ease",
              textAlign: "center",
            };

            const elementStyle1 = {
              ...elementStyleCommonalities,
              backgroundColor: unselectedColor,
              borderRadius: borderRadiusUnselected,
            };

            const elementStyle2 = {
              ...elementStyleCommonalities,
              backgroundColor:
                idx === selectedTabIdx ? selectedColor : unselectedColor,
              borderRadius: borderRadiusSelected,
              color: idx === selectedTabIdx ? "#4b4a38" : "rgb(207 203 171)",
            };

            return (
              <div
                key={idx}
                className={chosenClassName}
                onClick={() => {
                  setSelectedTabIdx(idx);
                }}
              >
                <div style={elementStyle1}></div>
                <div style={elementStyle2}>{`${tab_title}`}</div>
              </div>
            );
          })}
        </div>
        <div className="mn__timeline__content">
          <img
            className="mn__timeline__content__img"
            src={tabs_information[selectedTabIdx]["tab_img_url"]}
            alt="weekly schedule"
            ref={timelineImgRef}
          />
        </div>
        <div className="mn__timeline__content__controlpanel">
          <div
            className="mn__timeline__content__controlpanel__btn"
            onClick={() => {
              setTimelineImgHeight((prevHeight) => {
                if (prevHeight - 25 > 0) {
                  return prevHeight - 25;
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
                window.open(
                  tabs_information[selectedTabIdx]["tab_img_url"],
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineSchedule;
