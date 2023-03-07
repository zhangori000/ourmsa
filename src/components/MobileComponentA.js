import React from "react";
import { Link } from "react-router-dom";

import "./MobileComponentA.css";
function MobileComponentA({ imgUrls, text, title }) {
  const [img1] = imgUrls;
  return (
    <div className="mobileComponentA">
      <div className="mobileComponentA__container">
        <div className="mobileComponentA__container__row" id="row1">
          <img src={img1} alt="" />
        </div>
        <div className="mobileComponentA__container__row" id="row2">
          <p>{text}</p>
          <div className="mobileComponentA__container__row__bottom">
            <h6>{title}</h6>
            <Link to={`locations/${title.toLowerCase()}`}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileComponentA;
