import React, { useState, useRef, useEffect } from "react";
import TimelineSchedule from "../components/TimelineSchedule";
import { getDownloadSrc } from "../useful/filePathTools";
import { useLoaderData } from "react-router-dom";

import OurTeam from "../components/OurTeam";
import LocationPage from "../components/LocationPage";

// export async function getDataUrls() {
//   const video_order = ["tvDance.mov"];
//   const img_order = [
//     "xiyouji.jpg",
//     "jayzhou.jpg",
//     "VRpicture.jpg",
//     "Ashley.jpg",
//     "mnScheduleHD.jpg",
//     "guyongzhe.jpg",
//     "2023-MN-poster.jpg",
//     "2023-MN-classes.jpg",
//     "2023-mn-schedule.jpg",
//   ];

//   return getDownloadSrc(video_order, img_order);
// }

function Minneapolis() {
  // const { video_urls, img_urls_object } = useLoaderData();
  const video_urls = [
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/tvDance.mov",
  ];

  return <LocationPage location="mn" />;
}

export default Minneapolis;
