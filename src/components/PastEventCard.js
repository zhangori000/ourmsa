import React, { useState } from "react";

import "./PastEventCard.css";

function PastEventCard({ year, links, imgUrl, text }) {
  const [isFlipped, setIsFlipped] = useState(false);
  if (text) {
    return <div className="pastEvents__textBlock">{text}</div>;
  }
  return (
    <div
      className="pastEventCard"
      onClick={() => {
        setIsFlipped((prev) => !prev);
      }}
    >
      <div
        className={`pastEventCard__container ${isFlipped ? "--flipped" : ""}`}
      >
        <div className="pastEventCard__links">
          {links?.length ? (
            links.map((link) => {
              return (
                <div key={link.title} className="pastEventCard__link">
                  <a
                    style={{
                      display: `${isFlipped ? "block" : "none"}`,
                    }}
                    target="_blank"
                    href={link.link}
                    rel="noreferrer"
                  >
                    {link.title}
                  </a>
                </div>
              );
            })
          ) : (
            <div className="pastEventCard__nolink">
              {" "}
              This year contains no associated links{" "}
            </div>
          )}
        </div>
      </div>
      <div
        className={`pastEventCard__background ${isFlipped ? "--flipped" : ""}`}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="pastEventCard__text">
        <h3>{year}</h3>

        <div className="pastEventCard__text__underline"></div>
      </div>
    </div>
  );
}

export default PastEventCard;
