import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

import MobileComponentA from "../components/MobileComponentA.js";
import CircularProgress from "@mui/material/CircularProgress";

// Styling
import "./Home.css";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link, useLoaderData } from "react-router-dom";
import PastEventCard from "../components/PastEventCard";
import PastEvents from "../components/PastEvents";
import { IconButton } from "@mui/material";
import { getDownloadSrc } from "../useful/filePathTools.js";

export async function getVideoUrls() {
  const video_urls = [
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/liningUp.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/dinosaur.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/volunteerDance.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/newtonsLaws.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/redDancers.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/tvDance.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/crazyDancing.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/williamDancing.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/robotSetup.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/magicTeacher.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/magicDiv.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/foodConcession.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/cafeteriaTour.mov",
    "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/aprilDancing.mov",
  ];
  // const img_order = [
  //   "threePeopleGrass.jpg",
  //   "downtownSeattle.jpg",
  //   "seattleCherry.jpg",
  //   "pinkDinos.jpg",
  //   "manyKidsReading.jpg",
  //   "redDancerPose.jpg",
  //   "xiaoDangJiaVertical.jpg",
  //   "2023-MN-poster.jpg",
  //   "2023-seattle-poster.jpg",
  //   "screamingDino2022.jpg",
  //   "2021CuteGallery.jpg",
  //   "2020amyDrawingZoom.jpg",
  //   "2019AlienPose.jpg",
  //   "2018KidsMicroscope.jpg",
  //   "2017gossipGirls.jpg",
  //   "2016littleWilliam.jpg",
  //   "2023-seattle-mobile.jpg",
  //   "2023-MN-mobile.jpg",
  // ];

  // return getDownloadSrc(video_order, img_order);
  return { video_urls };
}

function Home() {
  const { video_urls } = useLoaderData();
  const [videoIdx, setVideoIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);

  return (
    <div className="home">
      <div className="home__videoContainer">
        <video
          ref={ref}
          playsInline
          autoPlay
          muted
          id="bgvid"
          className="home__videoContainer__video"
          // className={`home__videoContainer__video ${
          //   idx === videoIdx ? "--selected" : ""
          // }`}
          style={{
            backgroundColor: "black",
          }}
          onEnded={() => {
            // ref.current.pause();
            // ref.current.currentTime = 0;
            // ref.current.load();
            ref.current.src = video_urls[(videoIdx + 1) % video_urls.length];
            setVideoIdx((prevIdx) => (prevIdx + 1) % video_urls.length);
          }}
          onCanPlayThrough={() => {
            setIsLoading(false);
          }}
        >
          <source src={`${video_urls[videoIdx]}`} type="video/mp4" />
        </video>
        {/* {video_urls.map((video_url, idx) => {
          if (idx === videoIdx) {
            return (
              <video
                ref={ref}
                key={video_url}
                playsInline
                autoPlay
                muted
                id="bgvid"
                className={`home__videoContainer__video ${
                  idx === videoIdx ? "--selected" : ""
                }`}
                style={{
                  backgroundColor: "black",
                }}
                onEnded={() => {
                  ref.current.pause();
                  ref.current.currentTime = 0;
                  ref.current.load();
                  setVideoIdx((prevIdx) => (prevIdx + 1) % video_urls.length);
                }}
                onCanPlayThrough={() => {
                  setIsLoading(false);
                }}
                data-videoidx={idx}
              >
                <source src={`${video_url}`} type="video/mp4" />
              </video>
            );
          }
          return (
            <video
              key={video_url}
              playsInline
              autoPlay
              muted
              id="bgvid"
              className={`home__videoContainer__video ${
                idx === videoIdx ? "--selected" : ""
              }`}
              style={{
                backgroundColor: "black",
              }}
              onEnded={() => {
                // ref.current.pause();
                // ref.current.currentTime = 0;
                // ref.current.load();
                setVideoIdx((prevIdx) => (prevIdx + 1) % video_urls.length);
              }}
              // onCanPlay={() => {
              //   console.log("idx", idx);
              //   setIsLoading(false);
              // }}
              data-videoidx={idx}
            >
              <source src={`${video_url}`} type="video/mp4" />
            </video>
          );
        })} */}
        {/* <ReactPlayer
          url={video_urls[videoIdx]}
          playing
          volume={0}
          muted
          onEnded={() => {
            setVideoIdx((prev) => (prev + 1) % video_urls.length);
          }}
          className="reactVideoComponent"
        /> */}
        <div className="home__videoContainer__textContainer">
          <h1 translate="no">明西书院</h1>
          <IconButton>
            <KeyboardDoubleArrowDownIcon className="home__videoContainer__textContainer__arrowDown" />
          </IconButton>
        </div>
        {isLoading ? (
          <div className="home__videoContainer__loadingContainer">
            <CircularProgress size={100} thickness={5} />
          </div>
        ) : null}
      </div>
      <div className="home__introduction">
        <div className="home__introductionContainer">
          <p>
            <span translate="no">明西书院</span>
            ，根植于中式传统培优教育理念，融入美式现代快乐教育精髓。不仅提供全方位的学科课程，更注重培养学生们的综合素质和社会责任感
          </p>
          {/* <p>
          【中华小当家】——隶属明西书院，炫目精彩的综合性夏令营。以沉浸式中文语言环境为教学基础，集结各科名师，拥有无数精品课程，一站式打造学业、体育、艺术集锦型高端体验。8年精华累积，超高人气口碑，豪华义工团队服务，被众多热心家长推荐的人气Top
          1中文夏令营
        </p> */}
        </div>
      </div>
      <div className="home__translateContainerContainer">
        <div className="home__translateContainer">
          <p className="home__translate">
            Note: Right-click anywhere on the page and select "Translate to
            [Language]" from the context menu.
          </p>
        </div>
      </div>

      <MobileComponentA
        imgUrls={[
          "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-MN-mobile.jpg",
        ]}
        text={
          "这里是“中华小当家”的大本营所在地。自2016年初创至今，一直致力于为当地华人家庭及学习中文的学生们，提供一个具有深度文化内核，又有创新力和吸引力的精品夏令营。经过7年时间的心血打造，明州“中华小当家“以绝对的人气和口碑，成为孩子们最盼望的，也是家长们最放心的热门夏令营首选。"
        }
        title={"Minneapolis"}
      />
      <div className="home__locationsContainer__state" id="MN">
        <div className="first">
          <div className="firstText">
            <div>
              <div className="description">
                这里是“中华小当家”的大本营所在地。自2016年初创至今，一直致力于为当地华人家庭及学习中文的学生们，提供一个具有深度文化内核，又有创新力和吸引力的精品夏令营。经过7年时间的心血打造，明州“中华小当家“以绝对的人气和口碑，成为孩子们最盼望的，也是家长们最放心的热门夏令营首选。
              </div>
              <div className="location">
                Minneapolis <Link to="locations/minneapolis">Register</Link>
              </div>
              <div className="beautyLine"></div>
            </div>
          </div>
        </div>
        <div className="second">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-MN-poster.jpg"
            }
            alt="summer camp poster"
          />
        </div>
        <div className="third">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/threePeopleGrass.jpg"
            }
            alt="dancingInCircle"
          />
        </div>
        <div className="fourth">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/pinkDinos.jpg"
            }
            alt="kids in dinosarus"
          />
        </div>
        <div className="fifth">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/manyKidsReading.jpg"
            }
            alt="kids reading something"
          />
        </div>
        <div className="sixth"></div>
        <div className="seventh"></div>
      </div>
      {/* Seattle */}
      <MobileComponentA
        imgUrls={[
          "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-seattle-mobile.jpg",
        ]}
        text={
          "西雅图分校落户于环境优美，毗邻华大的Ravenna中心地段。优越的地理位置，齐备的运动设施，再加上一批力邀加盟的优秀老师，西雅图团队将把高品质的“中华小当家”中文夏令营，在今夏完美复刻！并将糅合自己的独家特色，为周边的华人家庭和学习中文的孩子们打造三周精彩的暑期生活"
        }
        title={"Seattle"}
      />
      <div className="home__locationsContainer__seattle">
        <div className="first">
          <div className="text_first">
            <p>
              西雅图分校坐落于环境优美，毗邻华大的Ravenna中心地段。优越的地理位置，齐备的运动设施，再加上一批力邀加盟的优秀老师，西雅图团队将把高品质的“中华小当家”中文夏令营，在今夏完美复刻！并将糅合自己的独家特色，为周边的华人家庭和学习中文的孩子们打造三周精彩的暑期生活
            </p>
            <div className="text_first__bolded">
              <h4>Seattle</h4> <Link to="locations/seattle">Register</Link>
            </div>
          </div>
        </div>
        <div className="second">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleCherry.jpg"
            }
            alt="cherry tree in seattle"
          />
        </div>
        <div className="third">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/downtownSeattle.jpg"
            }
            alt="downtown seattle"
          />
        </div>
        <div className="fourth">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/xiaoDangJiaVertical.jpg"
            }
            alt="company logo vertical"
          />
        </div>
        <div className="fifth">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-seattle-poster.jpg"
            }
            alt="company poster for seattle"
          />
        </div>
      </div>
      <div className="home__past">
        <div className="home__past__container">
          <PastEvents
            pastEventsList={[
              {
                info: {
                  year: "2022",
                  links: [
                    {
                      title: "2022 Summer Camp Recap",
                      link: "https://c.xiumi.us/board/v5/5oPjS/427843062",
                    },
                  ],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/screamingDino2022.jpg",
              },
              {
                info: {
                  text: "中华小当家精彩回顾点击进入",
                },
              },
              {
                info: {
                  year: "2021",
                  links: [
                    {
                      title: "2021 Summer Camp Recap",
                      link: "https://c.xiumi.us/board/v5/5oPjS/351711322",
                    },
                  ],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2021CuteGallery.jpg",
              },
              {
                info: {
                  year: "2020",
                  links: [
                    {
                      title: "2020 Sumer Camp Recap",
                      link: "https://b.xiumi.us/board/v5/5oPjS/431341946",
                    },
                  ],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2020amyDrawingZoom.jpg",
              },
              {
                info: {
                  year: "2019",
                  links: [
                    {
                      title: "2019 Week 1 Recap",
                      link: "https://www.meipian.cn/2q52x7g5?first_share_to=singlemessage&first_share_uid=6433294&from=groupmessage&isappinstalled=0&share_depth=1%3Fshare_user_mpuuid%3D8e8ec818e1a0c682fafd7f79e6d45b81&user_id=6433294&v=5.2.2",
                    },
                    {
                      title: "2019 Week 2 Recap",
                      link: "https://www.meipian.cn/2q7knyax?first_share_to=singlemessage&first_share_uid=6433294&from=groupmessage&isappinstalled=0&share_depth=1%3Fshare_user_mpuuid%3D8e8ec818e1a0c682fafd7f79e6d45b81&user_id=6433294&v=5.2.2",
                    },
                    {
                      title: "2019 Week 3 Recap",
                      link: "https://www.meipian.cn/2qdoweez?first_share_to=singlemessage&first_share_uid=6433294&from=groupmessage&isappinstalled=0&share_depth=1%3Fshare_user_mpuuid%3D8e8ec818e1a0c682fafd7f79e6d45b81&user_id=6433294&v=5.2.2",
                    },
                    {
                      title: "2019 Week 4 Recap",
                      link: "https://www.meipian.cn/2qm6xkph?first_share_to=singlemessage&first_share_uid=6433294&from=groupmessage&isappinstalled=0&share_depth=1%3Fshare_user_mpuuid%3D8e8ec818e1a0c682fafd7f79e6d45b81&user_id=6433294&v=5.2.2",
                    },
                    {
                      title: "2019 Week 5 Recap",
                      link: "https://www.meipian.cn/2qshrwsz?first_share_to=singlemessage&first_share_uid=6433294&from=groupmessage&isappinstalled=0&share_depth=1%3Fshare_user_mpuuid%3D8e8ec818e1a0c682fafd7f79e6d45b81&user_id=6433294&v=5.2.2",
                    },
                  ],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2019AlienPose.jpg",
              },
              {
                info: {
                  year: "2018",
                  links: [
                    {
                      title: "2018 Week 4 Recap",
                      link: "https://www.meipian.cn/1idswa0l",
                    },
                    {
                      title: "2018 Week 5 Recap",
                      link: "https://www.meipian.cn/1z1ylmzl",
                    },
                  ],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2018KidsMicroscope.jpg",
              },
              {
                info: {
                  year: "2017",
                  links: [
                    {
                      title: "2017 Week 4 Recap",
                      link: "https://www.meipian.cn/r8retaw?user_id=6433294&uuid=6fdd73e633ef4162902d9beba534a14d&idfa=48BCCE5C-F69D-405C-B5AD-D04B7C5E7A4B&utm_medium=meipian_ios&utm_source=singlemessage&v=4.3.3&from=singlemessage&isappinstalled=0",
                    },
                  ],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2017gossipGirls.jpg",
              },
              {
                info: {
                  year: "2016",
                  links: [],
                },
                imgUrl:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2016littleWilliam.jpg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
