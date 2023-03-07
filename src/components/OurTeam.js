import React, { useState } from "react";

import "./OurTeam.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { stepButtonClasses } from "@mui/material";

function OurTeam({ teamMembers }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const getSelectedMembers = () => {
    return [teamMembers[selectedIdx]];
  };

  return (
    <div className="ourTeam">
      <div className="ourTeam__left">
        <h3>Meet Our Team</h3>
        <p>【明西书院】“中华小当家”夏令营优秀师资</p>
      </div>
      <div className="ourTeam__container">
        <ArrowLeftIcon
          onClick={() => {
            setSelectedIdx((prev) => {
              if (prev === 0) {
                return teamMembers.length - 1;
              }
              return prev - 1;
            });
          }}
        />
        <div className="ourTeam__right">
          {getSelectedMembers().map(
            ({ name, briefs, brief_english, imgUrl }) => {
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
            }
          )}
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
        <ArrowRightIcon
          onClick={() => {
            setSelectedIdx((prev) => {
              if (prev === teamMembers.length - 1) {
                return 0;
              }
              return prev + 1;
            });
          }}
        />
      </div>
    </div>
  );
}

export default OurTeam;
