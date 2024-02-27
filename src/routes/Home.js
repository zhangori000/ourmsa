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
    "https://dfiit17cey0yc.cloudfront.net/liningUp.mov",
    "https://dfiit17cey0yc.cloudfront.net/dinosaur.mov",
    "https://dfiit17cey0yc.cloudfront.net/volunteerDance.mov",
    "https://dfiit17cey0yc.cloudfront.net/newtonsLaws.mov",
    "https://dfiit17cey0yc.cloudfront.net/redDancers.mov",
    "https://dfiit17cey0yc.cloudfront.net/tvDance.mov",
    "https://dfiit17cey0yc.cloudfront.net/crazyDancing.mov",
    "https://dfiit17cey0yc.cloudfront.net/williamDancing.mov",
    "https://dfiit17cey0yc.cloudfront.net/robotSetup.mov",
    "https://dfiit17cey0yc.cloudfront.net/magicTeacher.mov",
    "https://dfiit17cey0yc.cloudfront.net/magicDiv.mov",
    "https://dfiit17cey0yc.cloudfront.net/foodConcession.mov",
    "https://dfiit17cey0yc.cloudfront.net/cafeteriaTour.mov",
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
  const preloadedVideos = video_urls.map((videoUrl, index) => {
    return (
      <video
        className={`home__videoContainer__video ${
          index === videoIdx ? "" : "hide"
        }`}
        id={`videoId${index}`}
        key={videoUrl}
        muted
        onCanPlayThrough={() => {
          setIsLoading(false);
        }}
        autoPlay
        playsInline
        onEnded={(event) => {
          // ref.current.pause();
          // ref.current.currentTime = 0;
          // ref.current.load();
          // ref.current.src = video_urls[(videoIdx + 1) % video_urls.length];

          setVideoIdx((prevIdx) => (prevIdx + 1) % video_urls.length);
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    );
  });

  useEffect(() => {
    const pastEventCards = document.querySelectorAll(".pastEventCard");

    pastEventCards.forEach((card) => {
      const randomRotation = Math.random() * 10 - 5; // Generate a random
      card.style.transform = `rotate(${randomRotation}deg)`; // Apply the rotation
    });
  }, []); // Run only once after the component mounts

  useEffect(() => {
    let currentVideo = document.getElementById(`videoId${videoIdx}`);
    currentVideo.currentTime = 0;
    currentVideo.play();
  }, [videoIdx]);

  return (
    <div className="home">
      <div className="home__videoContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="videoArrow leftArrow"
          onClick={() => {
            let currentVideo = document.getElementById(`videoId${videoIdx}`);
            currentVideo.pause();
            currentVideo.currentTime = 0;
            setVideoIdx((prevIdx) => {
              if (prevIdx - 1 === -1) {
                return video_urls.length - 1;
              }
              return prevIdx - 1;
            });
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="videoArrow rightArrow"
          onClick={() => {
            let currentVideo = document.getElementById(`videoId${videoIdx}`);
            currentVideo.pause();
            currentVideo.currentTime = 0;
            setVideoIdx((prevIdx) => {
              if (prevIdx + 1 === video_urls.length) {
                return 0;
              }
              return prevIdx + 1;
            });
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>

        {preloadedVideos}
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

      <div className="home__bigAdPoster">
        <div className="container">
          <img
            src="https://dfiit17cey0yc.cloudfront.net/2024-bigAdPoster.jpg"
            alt="advertisement image"
          />
        </div>
      </div>

      <div className="youtubeContainer">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/f9VM1yg6UAc"
          title="Unearthed: Journey to Tomorrow【明西.环保战记】PSA"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="youtubeDescription">
        <div className="container">
          <p>
            “Unearthed—— Journey to
            Tomorrow”，这是一部由中小学生为原创主体制作的MV。以夏令营的VR虚拟现实课程为引子，介绍了一段VR世界里发生的幻想片段——来自未来的警告把尝试VR课程的学生带入未来，看到垃圾重度污染，全球变暖加剧，即将毁灭地球的场面。回到现实中的学生们决定为了明天而战，积极参与环保活动，提高并且宣传环保意识，想要以今天的觉醒和努力为不远的将来搏得一线生机。
            【明西书院】-
            “中华小当家”夏令营，是一家创办八年，以趣味中文主题和高科技培优课程为主的中文夏令营。每年因其新颖的课程设计和用心的高质量教学服务吸引了一大批粉丝学员。今年小当家选用了爆款大热歌曲《孤勇者》作为2023年度主题，并为此设计了中文、实验、舞蹈、机器人、虚拟现实等相关课程，并将这些系列课程与环保元素创意融合。在高中生编导团队的辛苦努力下，得到来自家长们和学员们的踊跃支持。她们令人惊喜地推出了这部原创环保主题MV。这部MV
            既承载了小当家所有师生们在今年夏天的美好回忆，也是眀西书院集体对环境保护的承诺。携童稚之声、孤勇之心，痛问沉疴之世：假如明天来临，地球会是什么模样？
          </p>
        </div>
      </div>

      <MobileComponentA
        imgUrls={[
          "https://dfiit17cey0yc.cloudfront.net/2024_mn_mobile_poster.jpg",
        ]}
        text={
          "这里是“中华小当家”的大本营所在地。自2016年初创至今，一直致力于为当地华人家庭及学习中文的学生们，提供一个具有深度文化内核，又有创新力和吸引力的精品夏令营。经过8年时间的心血打造，明州“中华小当家“以绝对的人气和口碑，成为孩子们最盼望的，也是家长们最放心的热门夏令营首选。"
        }
        title={"Minneapolis"}
      />
      <div className="home__locationsContainer__state" id="MN">
        <div className="first">
          <div className="firstText">
            <div>
              <div className="description">
                这里是“中华小当家”的大本营所在地。自2016年初创至今，一直致力于为当地华人家庭及学习中文的学生们，提供一个具有深度文化内核，又有创新力和吸引力的精品夏令营。经过8年时间的心血打造，明州“中华小当家“以绝对的人气和口碑，成为孩子们最盼望的，也是家长们最放心的热门夏令营首选。
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
              "https://dfiit17cey0yc.cloudfront.net/seattle_main_science_poster.jpg"
            }
            alt="summer camp poster"
          />
        </div>
        <div className="third">
          <img
            src={"https://dfiit17cey0yc.cloudfront.net/threePeopleGrass.jpg"}
            alt="dancingInCircle"
          />
        </div>
        <div className="fourth">
          <img
            src={"https://dfiit17cey0yc.cloudfront.net/pinkDinos.jpg"}
            alt="kids in dinosarus"
          />
        </div>
        <div className="fifth">
          <img
            src={"https://dfiit17cey0yc.cloudfront.net/manyKidsReading.jpg"}
            alt="kids reading something"
          />
        </div>
        <div className="sixth"></div>
        <div className="seventh"></div>
      </div>
      {/* Seattle */}
      <MobileComponentA
        imgUrls={[
          "https://dfiit17cey0yc.cloudfront.net/2024_seattle_mobile_poster.jpg",
        ]}
        text={
          "西雅图分校落户于环境优美，毗邻华大的Ravenna中心地段。优越的地理位置，齐备的运动设施，再加上一批力邀加盟的优秀老师，西雅图团队将把高品质的“中华小当家”中文夏令营，在今夏完美复刻！并将糅合自己的独家特色，为周边的华人家庭和学习中文的孩子们打造六周精彩的暑期生活"
        }
        title={"Seattle"}
      />
      <div className="home__locationsContainer__seattle">
        <div className="first">
          <div className="text_first">
            <p>
              西雅图分校坐落于环境优美，毗邻华大的Ravenna中心地段。优越的地理位置，齐备的运动设施，再加上一批力邀加盟的优秀老师，西雅图团队将把高品质的“中华小当家”中文夏令营，在今夏完美复刻！并将糅合自己的独家特色，为周边的华人家庭和学习中文的孩子们打造六周精彩的暑期生活
            </p>
            <div className="text_first__bolded">
              <h4>Seattle</h4> <Link to="locations/seattle">Register</Link>
            </div>
          </div>
        </div>
        <div className="second">
          <img
            src={
              "https://dfiit17cey0yc.cloudfront.net/2023_seattle_groupPictureFirstSeen.jpg"
            }
            alt="cherry tree in seattle"
          />
        </div>
        <div className="third">
          <img
            src={
              "https://dfiit17cey0yc.cloudfront.net/2023_seattle_andrewWorking.jpg"
            }
            alt="downtown seattle"
          />
        </div>
        <div className="fourth">
          <img
            src={
              "https://dfiit17cey0yc.cloudfront.net/2023_seattle_amyHappy.jpg"
            }
            alt="company logo vertical"
          />
        </div>
        <div className="fifth">
          <img
            src={
              "https://dfiit17cey0yc.cloudfront.net/seattle_main_science_poster.jpg"
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
                  year: "2023: Seattle",
                  links: [
                    {
                      title: "2023 Seattle Summer Camp Recap",
                      link: "https://www.meipian0.cn/513ekb8r?share_depth=1&first_share_uid=6433294&first_share_to=copy_link",
                    },
                  ],
                },
                imgUrl:
                  "https://dfiit17cey0yc.cloudfront.net/2023_seattle_fourGoodFriends.jpg",
              },
              {
                info: {
                  year: "2023: Minnesota",
                  links: [
                    {
                      title: "2023 Minnesota Summer Camp Recap",
                      link: "https://www.meipian0.cn/511sf0ke?first_share_uid=6433294&first_share_to=copy_link&share_depth=1",
                    },
                  ],
                },
                imgUrl:
                  "https://dfiit17cey0yc.cloudfront.net/2023_mn_lilianDrawing.jpg",
              },
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
                  "https://dfiit17cey0yc.cloudfront.net/screamingDino2022.jpg",
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
                  "https://dfiit17cey0yc.cloudfront.net/2021CuteGallery.jpg",
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
                  "https://dfiit17cey0yc.cloudfront.net/2020amyDrawingZoom.jpg",
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
                  "https://dfiit17cey0yc.cloudfront.net/2019AlienPose.jpg",
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
                  "https://dfiit17cey0yc.cloudfront.net/2018KidsMicroscope.jpg",
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
                  "https://dfiit17cey0yc.cloudfront.net/2017gossipGirls.jpg",
              },
              {
                info: {
                  year: "2016",
                  links: [],
                },
                imgUrl:
                  "https://dfiit17cey0yc.cloudfront.net/2016littleWilliam.jpg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
