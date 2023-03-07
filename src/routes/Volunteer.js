import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getDownloadSrc } from "../useful/filePathTools";
import { useParams } from "react-router-dom";

import "./Volunteer.css";

import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

export async function loader({ params }) {
  const location = params.location;

  // const img_order = [
  //   "volunteerGroupNyShirtHorizontal.jpg",
  //   "volunteerGunDanceHorizontal.jpg",
  //   "volunteerJobHorizontal.jpg",
  //   "mplsIris.jpg",
  //   "volunteer_seattle_andyHua.jpg",
  //   "volunteer_seattle_stevenSticker.jpg",
  //   "volunteer_seattle_orienGuitar.jpg",
  //   "volunteer_seattle_amyMichael.jpg",
  // ];

  // const { video_urls, img_urls_object } = await getDownloadSrc([], img_order);

  const websiteInformation = {
    minneapolis: [
      {
        // url: img_urls_object["mplsIris.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/mplsIris.jpg",
        heading: "Volunteer For Us!",
        text: "This feature is coming soon! Volunteers are an extremely, extremely important asset to our program. Everything under here consists of placeholder text. It is for display purposes only",
      },
      {
        // url: img_urls_object["volunteerGroupNyShirtHorizontal.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteerGroupNyShirtHorizontal.jpg",
        heading: "Volunteer's Gallery of Minneapolis",
        text: "Coming soon...",
      },
      {
        // url: img_urls_object["volunteerGunDanceHorizontal.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteerGunDanceHorizontal.jpg",
        heading: "Register as a Volunteer in Minneapolis",
        text: "Coming soon...",
      },
      {
        // url: img_urls_object["volunteerJobHorizontal.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteerJobHorizontal.jpg",
        heading: "Apply for Teaching Roles",
        text: "Coming soon...",
      },
    ],
    seattle: [
      {
        // url: img_urls_object["volunteer_seattle_orienGuitar.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteer_seattle_orienGuitar.jpg",
        heading: "Volunteer For Us!",
        text: "This feature is coming soon! Volunteers are an extremely, extremely important asset to our program. Everything under here consists of placeholder text. It is for display purposes only",
      },
      {
        // url: img_urls_object["volunteer_seattle_andyHua.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteer_seattle_andyHua.jpg",
        heading: "Register as a Volunteer in Seattle",
        text: "Coming soon...",
      },
      {
        // url: img_urls_object["volunteer_seattle_amyMichael.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteer_seattle_amyMichael.jpg",
        heading: "Register as a Volunteer in Seattle",
        text: "Coming soon...",
      },
      {
        // url: img_urls_object["volunteer_seattle_stevenSticker.jpg"],
        url: "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteer_seattle_stevenSticker.jpg",
        heading: "Apply for Teaching Roles",
        text: "Coming soon...",
      },
    ],
  };

  return { websiteInformation };
}

function Volunteer() {
  const { websiteInformation } = useLoaderData();
  const { location } = useParams();
  const navigate = useNavigate();

  const navigateTo = (locationString) => {
    navigate(locationString);
  };

  return (
    <div className="volunteer">
      <div className="volunteer__introductionContainer">
        <img
          src={websiteInformation[`${location}`][0]["url"]}
          alt="volunteer group photo"
        />
        <div className="volunteer__introduction">
          <h6>{websiteInformation[`${location}`][0]["heading"]}</h6>
          <p>{websiteInformation[`${location}`][0]["text"]}</p>
        </div>
      </div>
      <div className="volunteer__cardContainerContainer">
        <div className="volunteer__cardContainer">
          <div className="volunteer__cardContainer__card" id="card1">
            <div className="volunteer__cardContainer__card__imgBound">
              <img
                src={websiteInformation[`${location}`][1]["url"]}
                alt="group picture volunteers"
              />
            </div>
            <div
              onClick={() => {
                // navigateTo(`../../gallery/${location}/volunteers`);
              }}
              className="volunteer__cardContainer__card__content"
            >
              <div className="voluteer__cardContainer__card__content__top">
                <p className="volunteer__cardContainer__card__content__top__heading">
                  {websiteInformation[`${location}`][1]["heading"]}
                </p>
                <p className="volunteer__cardContainer__card__content__top__paragraph">
                  {websiteInformation[`${location}`][1]["text"]}
                </p>
              </div>

              <div className="volunteer__cardContainer__card__content__btn">
                <ArrowCircleRightRoundedIcon />
                <p
                  onClick={() => {
                    // navigateTo(`../../gallery/${location}/volunteers`);
                  }}
                  className="volunteer__cardContainer__card__content__btn__text"
                >
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
          <div className="volunteer__cardContainer__card" id="card2">
            <div className="volunteer__cardContainer__card__imgBound">
              <img
                src={websiteInformation[`${location}`][2]["url"]}
                alt="dance volunteers"
              />
            </div>
            <div className="volunteer__cardContainer__card__content">
              <div className="voluteer__cardContainer__card__content__top">
                <p className="volunteer__cardContainer__card__content__top__heading">
                  {websiteInformation[`${location}`][2]["heading"]}
                </p>
                <p className="volunteer__cardContainer__card__content__top__paragraph">
                  {websiteInformation[`${location}`][2]["text"]}
                </p>
              </div>

              <div className="volunteer__cardContainer__card__content__btn">
                <ArrowCircleRightRoundedIcon />
                <p className="volunteer__cardContainer__card__content__btn__text">
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
          <div className="volunteer__cardContainer__card" id="card3">
            <div className="volunteer__cardContainer__card__imgBound">
              <img
                src={websiteInformation[`${location}`][3]["url"]}
                alt="volunteers group photos concession"
              />
            </div>
            <div className="volunteer__cardContainer__card__content">
              <div className="voluteer__cardContainer__card__content__top">
                <p className="volunteer__cardContainer__card__content__top__heading">
                  {websiteInformation[`${location}`][3]["heading"]}
                </p>
                <p className="volunteer__cardContainer__card__content__top__paragraph">
                  {websiteInformation[`${location}`][3]["text"]}
                </p>
              </div>

              <div className="volunteer__cardContainer__card__content__btn">
                <ArrowCircleRightRoundedIcon />
                <p className="volunteer__cardContainer__card__content__btn__text">
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
          <div className="volunteer__cardContainer__card" id="dummyCard"></div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
