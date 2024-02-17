import React from "react";
import { getDownloadSrc } from "../useful/filePathTools";
import { useLoaderData } from "react-router-dom";
import "./Seattle.css";

import Schedule from "../components/Schedule";
import OurTeam from "../components/OurTeam";
import Slideshow from "../components/Slideshow";
import TimelineSchedule from "../components/TimelineSchedule";
import LocationPage from "../components/LocationPage";

export async function getDataUrls() {
  // const video_order = ["whiteTshirt.mov"];
  // const img_order = [
  //   "VRpicture.jpg",
  //   "2023-seattle-poster.jpg",
  //   "chinesePrint.jpg",
  //   "seattleScheduleHD.jpg",
  //   "xiyouji.jpg",
  //   "seattleTeacher1.jpg",
  //   "seattleTeacher2.jpg",
  //   "seattleTeacher3.jpg",
  //   "seattleTeacher4.jpg",
  //   "seattleTeacher5.jpg",
  //   "seattleTeacherAmy.jpg",
  //   "2023-seattle-schedule.jpg",
  //   "2023-seattle-classes.jpg",
  //   "seattlePageSlide1Princess.jpg",
  //   "seattlePageSlideTwoAngels.jpg",
  //   "seattlePageSlideManyPaint.jpg",
  //   "seattlePageSlideTwoPainters.jpg",
  //   "seattlePageSlideUke.jpg",
  //   "seattlePageSlideUke2.jpg",
  //   "redDancerPose.jpg",
  //   "manyKidsReading.jpg",
  // ];
  // return getDownloadSrc(video_order, img_order);
}

function Seattle() {
  // const { video_urls, img_urls_object } = useLoaderData();

  return <LocationPage location="seattle" />;
}

export default Seattle;
