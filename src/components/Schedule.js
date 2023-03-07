import React from "react";

import "./Schedule.css";
function Schedule({ schedule }) {
  return (
    <div className="schedule">
      {schedule.map((ele, idx) => (
        <div key={ele + `${idx}`} className="schedule__block">
          {ele}
        </div>
      ))}
    </div>
  );
}

export default Schedule;

{
  /* <div>8：30-9：30</div>  <div>  体育 </div>
        <div>9：30-10：00</div>  <div>课间  点心 </div>
        <div>10：00-10：45</div> <div> 第一节课 </div>
        <div>10：45-11：00</div>  <div>课间 </div>
        <div>11：00-11：45</div> <div> 第二节课</div>
        <div>12：00-12：30</div> 午餐
        <div>12：30-1：30</div>   午休  自由活动  多媒体影音
        <div>1：30-2：30 </div>    第一节课
        <div>2：30-3：00</div>     课间  点心
        <div>3：00-4：00  </div>   第二节课
        <div>4：00-4：30</div>     整理   文化民俗影音 */
}
