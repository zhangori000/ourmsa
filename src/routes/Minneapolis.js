import React, { useState, useRef, useEffect } from "react";
import "./Minneapolis.css";
import TimelineSchedule from "../components/TimelineSchedule";
import { getDownloadSrc } from "../useful/filePathTools";
import { useLoaderData } from "react-router-dom";

import OurTeam from "../components/OurTeam";

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

  return (
    <div className="mn">
      <div className="mn__intro">
        <div className="mn__videoContainer">
          <video
            // ref={ref}
            playsInline
            autoPlay
            muted
            id="bgvid"
            className="mn__videoContainer__video"
            loop
            // onEnded={() => {
            //   ref.current.src = videos[(videoIdx + 1) % videos.length];
            //   setVideoIdx((prevIdx) => (prevIdx + 1) % videos.length);
            // }}
          >
            <source src={`${video_urls[0]}`} type="video/mp4" />
          </video>
          <div className="mn__videoContainer__textContainer">
            <div className="parent1">
              <div>明</div>
              <div>州</div>
            </div>
            <div className="parent2">
              <div>本</div>
              <div>部</div>
            </div>

            {/* <KeyboardDoubleArrowDownIcon className="home__videoContainer__textContainer__arrowDown" /> */}
          </div>
        </div>
      </div>
      <div className="mn__theme">
        <div className="container">
          <div className="mn__theme__title">
            <h3>八周主题设定</h3>
            <p>
              每一周为一个Session，Session 1-7 可以任选报名，Session
              8不可单选，需与之前任意一个Session绑
              定报名。每个主题以2个Sessions为时长。可以跳选session，但推荐报名连续时间段。
              盲盒式四大主题抢鲜看！盲盒的意思就是，家长报名时只是为孩子选定了参加小当家夏令营的时
              间段。直到报名结束后，才公布具体主题分配时间与详细课表。
              （以下四大主题不分先后！）
            </p>
          </div>
          <div className="mn__theme__blocks">
            <div className="mn__theme__blocks__block">
              <img
                src={
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/guyongzhe.jpg"
                }
                alt=""
              />
              <div className="text" id="guyongzhe">
                <h3> 主题一：【孤勇者】的最终幻想</h3>
                <p>
                  末世与英雄，环保者与孤勇者。以小当家一贯坚定宣传的环保为主线，用地球不断恶化的现状和
                  人类自救至今少数拿得出手的新科技发展，新能源开发等内容，灌输忧患，催熟坚强，等待小当
                  家学员里的英雄们勇敢站起来，环保同行的路上，不孤，惟勇！
                  STEM集锦，外加全国性网红儿歌，环保项目实地考察
                </p>
              </div>
            </div>
            <div className="mn__theme__blocks__block">
              <img
                src={
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/jayzhou.jpg"
                }
                alt=""
              />
              <div className="text" id="jaychou">
                <h3>主题二：【最伟大的作品】</h3>
                <p>
                  周杰伦爆款MTV的终极解析。特邀艺术家来解读艺术家，惟有在我们小当家！最具艺术气质的主
                  题周，大孩子们形而上玩当代艺术，小学员们跟着名画cosplay，张口莫奈闭口达利，全营再一起
                  去艺术博物馆整点儿文艺范儿
                </p>
              </div>
            </div>
            <div className="mn__theme__blocks__block">
              <img
                src={
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/VRpicture.jpg"
                }
                alt=""
              />
              <div className="text" id="vrPicture">
                <h3>主题三：数智时代</h3>
                <p>
                  特别订制的最IN主题，将会是今年投资最大的先锋课程。一举囊括ChatGPT、元宇宙等最前沿的当
                  红科技硬核，引导学员们接触和思考当下与未来。同时辅以Leadership、团建拓展等课程，培养打
                  造不会被时代淘汰的顶尖人才
                </p>
              </div>
            </div>

            <div className="mn__theme__blocks__block">
              <img
                src={
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/xiyouji.jpg"
                }
                alt=""
                style={{
                  objectPosition: "0 87%",
                }}
              />
              <div className="text" id="xiyouji">
                <h3>主题四：【大王叫我来巡山】</h3>
                <p>
                  以四大名著之一的【西游记】为主线，融合诗词、民俗艺术和西游记故事名场面的记忆点，配套
                  正宗陕西黄牛皮皮影人物材料包，让学生们自己手作，学习配音，团队合作表演《三打白骨精
                  》。科学课切入点——光和影。
                  《大王叫我来巡山》神曲再现江湖，配套洗脑搞笑编舞，又会是今年的全营记忆爆点
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mn__announcer">
        <div className="mn__announcer__title">八周主题设定</div>
      </div> */}

      <div className="mn__schedule">
        <div className="mn__schedule__left">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-MN-classes.jpg"
            }
            alt="minnesota class schedule"
          />
        </div>
        <div className="mn__schedule__right">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-mn-schedule.jpg"
            }
            alt="seattle class schedule times"
          />
        </div>
      </div>
      {/* Timeline Scheule! */}
      <TimelineSchedule location="mn" weeks={[1, 2, 3, 4, 5, 6, 7, 8]} />
      <div className="mn__ourTeam">
        <OurTeam
          teamMembers={[
            {
              name: "金洁明",
              briefs: [
                "明州公立学区中文浸入式项目老师。上海大学中文系本科和硕士，复旦大学辅修对外汉语，并持有国内最早的对外汉语教学资格证，移民美国前是上海某国际高中的全职对外汉语教师。明尼苏达大学教育学硕士毕业，持有小学教育和中文作为第二语言教育双教学资格证。至今已在对外汉语教学领域从事教学工作超过十年",
              ],
              imgUrl:
                "https://static.wixstatic.com/media/586e06_63f5dee6cad3465dbbc97bd9928f50ca~mv2_d_1433_1986_s_2.jpg/v1/fill/w_360,h_497,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%E9%87%91%E6%B4%81%E6%98%8E_JPG.jpg",
            },
            {
              name: "吴静",
              briefs: [
                "I am originally from Yangzhou, China. I received my Bachelor’s and Master’s degree in Chemistry from Nanjing University and became a college lecture in Chemistry upon graduation. In the year of 2000, I came to the US to continue my study and later received PhD in Analytical Chemistry from Marquette University. Chemistry is always my favorite subject and I believe that it is the central and foundation of Science. I’ve been enjoying teaching and tutoring undergraduate students learning Chemistry since I worked as a teaching assistant in school.  I am currently a faculty member at Dunwoody College of Technology,  teaching general and material Chemistry (including inorganic, organic and physical chemistry). I enjoyed working with young students at MinnSea Chinese Summer Camp for the past few years and look forward to meeting new and returning campers in the new year!",
              ],
              imgUrl:
                "https://static.wixstatic.com/media/586e06_61d4dbf5e34c4c3098d99cb86a7b7ade~mv2.jpeg/v1/fill/w_212,h_280,al_c,lg_1,q_80,enc_auto/Wu%20Jing.jpeg",
            },
            {
              name: "​夏茜",
              briefs: [
                "哥伦比亚大学双语教育硕士，美国公立小学阅读专家，10年中美双语教学经验",
              ],
              imgUrl:
                "https://static.wixstatic.com/media/586e06_547a91662b5a4db1a6f619ef98360b46~mv2.jpeg/v1/fill/w_360,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image0%20(3).jpeg",
            },
            {
              name: "赵静",
              briefs: [
                "明州公立学校沉浸式中文项目教师。本科毕业于河南师范大学英语与教育专业，纽约州Pace University教育硕士学位。持有的执教证书包括：明州K-12中文教师证，5-12英语语言文学证，K-6小学教师证。在教育教学行业已深耕10多年。",
              ],
              imgUrl:
                "https://static.wixstatic.com/media/586e06_be10fd9398e641a28e1245cf6075c016~mv2.jpeg/v1/fill/w_362,h_479,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/JIng%20Zhao.jpeg",
            },

            {
              name: "顾莹",
              briefs: [
                "来自中国兰州，本科毕业于兰州大学电子工程专业。来美国后，先后就读于加州圣地亚哥州立大学和明州圣克劳德州利大学，取得电子工程专业硕士学位。曾在计算机行业从事软件测试工作。",
              ],
              imgUrl:
                "https://static.wixstatic.com/media/586e06_3a799aeb73b9426b9706a93f69dc863c~mv2.jpeg/v1/fill/w_362,h_479,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image0%20(4).jpeg",
            },
            {
              name: "沈玉东",
              briefs: [
                "画家/ 舞台美术设计北美艺术家协会会员，美国水墨画协会大奖赛评委，现执教于明州St. Paul和Shoreview美林画室。作品在在国际国内多次获奖，并被北京国家博物馆收藏。 2011， 2017 ，2018及2021年被纽约市评为全国“杰出艺术教育家”",
              ],
              imgUrl:
                "https://static.wixstatic.com/media/586e06_846ff0e43f8c46fa985c555da6db2b1c~mv2.jpeg/v1/fill/w_362,h_479,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Shen%20Yudong.jpeg",
            },
            {
              name: "徐竞潇",
              briefs: [
                "芝加哥大学经济专业统计专业大三学生，有风险投资、私募股权和投资银行丰富实习经历，曾在芝加哥大学布斯商学院担任研究助理。目前是芝加哥大学女性金融社团副主席，负责金融知识教育与普及",
              ],
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/Ashley.jpg",
            },
          ]}
        />
      </div>
      <div className="mn__register">
        <img
          src={
            "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-MN-poster.jpg"
          }
          alt=""
        />
        <a
          href="https://www.ourmsa.org/registration2023mn"
          target="_blank"
          rel="noreferrer"
        >
          Register Here
        </a>
      </div>
    </div>
  );
}

export default Minneapolis;
