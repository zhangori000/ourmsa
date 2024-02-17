import React, { useState, useRef, useEffect } from "react";

import "./OurTeam.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function OurTeam({ teamMembers }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const getSelectedMembers = () => {
    return [teamMembers[selectedIdx]];
  };

  const [xCoordinate, setXCoordinate] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const specificDivWidth = document.querySelector(
      ".ourTeam__right .container .ourTeam__right__member"
    ).offsetWidth;

    setXCoordinate(selectedIdx * specificDivWidth * -1);
  }, [selectedIdx]);

  return (
    <div className="ourTeam">
      <div className="ourTeam__left">
        <h3>Meet Our Team</h3>
        <p>【明西书院】“中华小当家”夏令营优秀师资</p>
      </div>
      <div className="ourTeam__container">
        <ArrowBackIosNewIcon
          className="leftArrow"
          onClick={() => {
            setSelectedIdx((prev) => {
              if (prev === 0) {
                return teamMembers.length - 1;
              }
              return prev - 1;
            });

            // moveUnrelatedDiv(false);
          }}
        />
        <div className="ourTeam__right">
          <div className="container">
            <div
              className="container_frame"
              ref={containerRef}
              style={{
                transform: `translateX(${xCoordinate}px)`,
              }}
            >
              {teamMembers.map(({ name, briefs, brief_english, imgUrl }) => {
                return (
                  <div key={name} className="ourTeam__right__member">
                    <img src={imgUrl} alt="profile picture" />
                    <div className="ourTeam__right__member__text">
                      <h3>{name}</h3>{" "}
                      {briefs.map((brief) => (
                        <p key={brief}>{brief}</p>
                      ))}{" "}
                      <p> {brief_english}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ourTeam__rightControls">
            {teamMembers.map((member, idx) => {
              return (
                <div
                  key={member.name}
                  className={`ourTeam__rightControls__circle ${
                    idx === selectedIdx ? "--selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedIdx(idx);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <ArrowForwardIosIcon
          id="rightArrow"
          onClick={() => {
            setSelectedIdx((prev) => {
              if (prev === teamMembers.length - 1) {
                return 0;
              }
              return prev + 1;
            });

            // moveUnrelatedDiv(true);
          }}
        />
      </div>
    </div>
  );
}

export default OurTeam;
