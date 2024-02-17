import React, { useRef, useState, useEffect } from "react";

// styling
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const [isVolunteerClicked, setIsVolunteerClicked] = useState(false);
  const [isLocationsClicked, setIsLocationsClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);

  const toggleWrapperClick = (type) => {
    if (type === "volunteer") {
      setIsVolunteerClicked((prev) => !prev);
    } else if (type === "locations") {
      setIsLocationsClicked((prev) => !prev);
    } else if (type === "register") {
      setIsRegisterClicked((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!isClicked) {
      ref1.current.classList.remove("display");
      ref2.current.classList.remove("display");
      ref2.current.classList.add("move-up");
    } else {
      ref1.current.classList.add("display");
      ref2.current.classList.add("display");
      ref2.current.classList.remove("move-up");
    }
  }, [isClicked]);

  return (
    <div className="header">
      <div
        ref={ref1}
        className="header__menuButton"
        onClick={() => {
          toggleClick();
          setIsVolunteerClicked(false);
          setIsLocationsClicked(false);
          setIsRegisterClicked(false);
        }}
      >
        {!isClicked ? <MenuIcon /> : <CloseIcon />}
      </div>
      <div ref={ref2} className="header__content">
        <div className="title" onClick={toggleClick}>
          <Link to="/">
            <span translate="no">明西书院</span>
          </Link>
        </div>
        <div className="content">
          <div
            className="header__wrapper"
            id="locations"
            onClick={() => {
              toggleWrapperClick("locations");
            }}
          >
            <div className="header__wrapper__top">Locations</div>
            <div
              className={`header__wrapper__bottom ${
                isLocationsClicked ? "--selected" : ""
              }`}
            >
              {isLocationsClicked ? (
                <>
                  <Link onClick={toggleClick} to="locations/minneapolis">
                    Minneapolis
                  </Link>
                  <Link onClick={toggleClick} to="locations/seattle">
                    Seattle
                  </Link>
                </>
              ) : (
                <div className="header__wrapper__bottom__dummy">
                  <div>dummy1</div> <div> dummy2 </div>
                </div>
              )}
            </div>
          </div>
          {/* <Link onClick={toggleClick} to="locations/minneapolis">
            Minneapolis
          </Link>
          <Link onClick={toggleClick} to="locations/seattle">
            Seattle
          </Link> */}
          <div
            className="header__wrapper"
            id="volunteer"
            onClick={() => {
              toggleWrapperClick("register");
            }}
          >
            <div className="header__wrapper__top">Register</div>
            <div
              className={`header__wrapper__bottom ${
                isRegisterClicked ? "--selected" : ""
              }`}
            >
              {isRegisterClicked ? (
                <>
                  <Link
                    onClick={toggleClick}
                    to="https://www.ourmsa.org/events/2024-summer-camp-registration-one-student"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Minneapolis (One Child)
                  </Link>
                  <Link
                    onClick={toggleClick}
                    to="https://www.ourmsa.org/events/2024-summer-camp-registration-siblings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Minneapolis (Family)
                  </Link>
                  <Link
                    onClick={toggleClick}
                    to="https://www.ourmsa.org/events/2024-summer-camp-seattle-registration-one-student"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seattle (One Child)
                  </Link>
                  <Link
                    onClick={toggleClick}
                    to="https://www.ourmsa.org/events/2024-summer-camp-seattle-registration-family"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seattle (Family)
                  </Link>
                </>
              ) : (
                <div className="header__wrapper__bottom__dummy">
                  <div>dummy1</div> <div> dummy2 </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="header__wrapper"
            id="volunteer"
            onClick={() => {
              toggleWrapperClick("volunteer");
            }}
          >
            <div className="header__wrapper__top">Volunteer</div>
            <div
              className={`header__wrapper__bottom ${
                isVolunteerClicked ? "--selected" : ""
              }`}
            >
              {isVolunteerClicked ? (
                <>
                  <Link onClick={toggleClick} to="volunteer/minneapolis">
                    Minneapolis
                  </Link>
                  <Link onClick={toggleClick} to="volunteer/seattle">
                    Seattle
                  </Link>
                </>
              ) : (
                <div className="header__wrapper__bottom__dummy">
                  <div>dummy1</div> <div> dummy2 </div>
                </div>
              )}
            </div>
          </div>

          {/* <Link onClick={toggleClick} to="locations/seattle">
            News and Events
          </Link> */}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Header;
