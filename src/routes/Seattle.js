import React from "react";
import { getDownloadSrc } from "../useful/filePathTools";
import { useLoaderData } from "react-router-dom";
import "./Seattle.css";

import Schedule from "../components/Schedule";
import OurTeam from "../components/OurTeam";
import Slideshow from "../components/Slideshow";

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

  return (
    <div className="seattle">
      <div className="seattle__intro">
        <div className="seattle__videoContainer">
          {/* <video
            // ref={ref}
            playsInline
            autoPlay
            muted
            id="bgvid"
            className="seattle__videoContainer__video"
            loop
            // onEnded={() => {
            //   ref.current.src = videos[(videoIdx + 1) % videos.length];
            //   setVideoIdx((prevIdx) => (prevIdx + 1) % videos.length);
            // }}
          >
            <source src={`${video_urls[0]}`} type="video/mp4" />
          </video> */}
          <Slideshow
            images={[
              {
                // img_url: "seattlePageSlide1Princess.jpg"],
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattlePageSlide1Princess.jpg",
                object_position: "50% 50%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattlePageSlideTwoAngels.jpg",
                object_position: "50% 63%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattlePageSlideManyPaint.jpg",
                object_position: "50% 8%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattlePageSlideTwoPainters.jpg",
                object_position: "50% 4%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattlePageSlideUke.jpg",
                object_position: "50% 35%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattlePageSlideUke2.jpg",
                object_position: "50% 45%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/redDancerPose.jpg",
                object_position: "50% 25%",
              },
              {
                img_url:
                  "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/manyKidsReading.jpg",
                object_position: "50% 60%",
              },
            ]}
          />
          <div className="seattle__videoContainer__textContainer">
            <div className="parent1">
              <div>西</div>
              <div>雅</div>
              <div>图</div>
            </div>
            <div className="parent2">
              <div>分</div>
              <div>校</div>
            </div>

            {/* <KeyboardDoubleArrowDownIcon className="home__videoContainer__textContainer__arrowDown" /> */}
          </div>
        </div>
      </div>
      <div className="seattle__theme">
        <div className="seattle__theme__title">
          <h3>三周主题设定</h3>
          <p>
            每一周为一个Session，Session 1-3
            可以任选报名。三周各有独立主题，但完整kpop和古典舞作品教
            学以三周为时长
            盲盒式三大主题抢鲜看！盲盒的意思就是，家长报名时只是为孩子选定了参加小当家夏令营的时
            间段。直到报名结束后，才公布具体主题分配时间与详细课表
            （以下三大主题不分先后！）
          </p>
        </div>
        <div className="seattle__theme__blocks">
          <div className="seattle__theme__blocks__block">
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
              <h3>主题一：【大王叫我来巡山】</h3>
              <p>
                以四大名著之一的【西游记】为主线，融合诗词、民俗艺术和西游记故事名场面的记忆点，配套
                正宗陕西黄牛皮皮影人物材料包，让学生们自己手作，学习配音，团队合作表演《三打白骨精
                》。科学课切入点——光和影。
                《大王叫我来巡山》神曲再现江湖，配套洗脑搞笑编舞，又会是今年的全营记忆爆点
              </p>
            </div>
          </div>
          <div className="seattle__theme__blocks__block">
            <img
              src={
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/VRpicture.jpg"
              }
              alt=""
            />
            <div className="text" id="vrPicture">
              <h3>主题二：数智时代</h3>
              <p>
                特别订制的最IN主题，将会是今年投资最大的先锋课程。一举囊括ChatGPT、元宇宙等最前沿的当
                红科技硬核，引导学员们接触和思考当下与未来。同时辅以Leadership、团建拓展等课程，培养打
                造不会被时代淘汰的顶尖人才
              </p>
            </div>
          </div>
          <div className="seattle__theme__blocks__block">
            <img
              src={
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/chinesePrint.jpg"
              }
              alt=""
            />
            <div className="text" id="guyongzhe">
              <h3> 主题三：四大发明之造纸与印刷</h3>
              <p>
                介绍古代文明的辉煌成就，辅以古诗词教学。低年级学习《静夜思》，高年级《水调歌头
                》。以缺字游戏考察学生对汉字单字的记忆，完成完整活字印刷套装排列。配套手工——造纸和
                印刷，自制古风书签/贺卡
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="seattle__schedule">
        <div className="seattle__schedule__left">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-seattle-classes.jpg"
            }
            alt="minnesota class schedule"
          />
        </div>
        <div className="seattle__schedule__right">
          <img
            src={
              "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-seattle-schedule.jpg"
            }
            alt="seattle class schedule times"
          />
        </div>
      </div>

      <div className="seattle__ourTeam">
        <OurTeam
          teamMembers={[
            {
              name: "张翎",
              briefs: [
                "北京大学学士, 明尼苏达大学物理化学博士，哥伦比亚大学统计学硕士。曾任高级投资风险分析师 （特许金融分析师认证），现任某创业公司财务和项目经理。 多年社区菜地， 小学PTA财务，热衷社区志愿服务.",
              ],
              brief_english:
                "Ling Zhang, B.A Peking University, M.A statistics from Columbia University and PH.D. from University of Minnesota.  Career in financial services at investment consulting company (CFA charter holder). Current treasurer and program manager in a startup company. Many years of experience volunteering in local community garden and school PTA with financial expertise. Dedicated volunteer and supporter for many local community and non-profit organizations.",
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleTeacher4.jpg",
            },
            {
              name: "朱彦",
              briefs: [
                "现任华盛顿大学中文旗舰项目讲师。华东师范大学应用语言学硕士，曾在复旦大学，新加坡国际学校和美国中文沉浸式小学工作",
              ],
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleTeacher2.jpg",
            },
            {
              name: "刘萌",
              briefs: [
                "北卡州公立学校沉浸式中文项目教师。教育学硕士，对外汉语专业。持有初中英语，高中语文，国际汉语教师资格证。曾分别在欧洲，中国，美国的中小学工作，累计学生人数超过一千人，累计上课时数超过5000节课。8年一线对外汉语教学经验",
              ],
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleTeacher1.jpg",
            },
            {
              name: "Jiabang Wu",
              briefs: [
                "A private high school teacher in Seattle. I have 7 years of experience teaching Chinese Language and Literature to different age groups. I hold Bilingual Education and Chinese Teaching Certificates in multiple States. I previously worked as a Chinese immersion classroom teacher in public schools.",
              ],
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleTeacher3.jpg",
            },
            {
              name: "倩倩",
              briefs: [
                "幼儿园园长，舞蹈老师，全美瑜伽联盟高级教练.",
                "我本天上一粒尘，飘落人间，不过游居，做个闲人。而今已然不惑年，因着瑜伽，修身亦修心，但把今昔，落笔为念，笺长存.",
              ],
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleTeacher5.jpg",
            },
            {
              name: "张天晓",
              briefs: [
                "Hello, my name is Amy Zhang and I am thrilled to be part of the Seattle Camp debut! As a Computer Science major and Piano teacher based in San Diego, I have a passion for both technology and the arts. Originally from Minnesota, I began volunteering at 明西书院 during high school and developed a love for teaching and mentoring. Alongside my teaching, I have played piano and violin for over 12 years, performing with ensembles, gigs, and orchestras. I am excited to share my knowledge and experiences with the students and help them explore their interests and talents.",
              ],
              imgUrl:
                "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/seattleTeacherAmy.jpg",
            },
          ]}
        />
      </div>
      <div className="seattle__register">
        <img
          src={
            "https://ourmsacodingfolder.s3.us-east-2.amazonaws.com/2023-seattle-poster.jpg"
          }
          alt=""
        />
        <a
          href="https://www.ourmsa.org/registration2023sea"
          target="_blank"
          rel="noreferrer"
        >
          Register Here
        </a>
      </div>
    </div>
  );
}

export default Seattle;
