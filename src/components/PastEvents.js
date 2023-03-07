import React from "react";
import PastEventCard from "./PastEventCard";
import "./PastEvents.css";

import useWindowDimensions from "../useful/useWindowDimension";

function swapElements(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function PastEvents({ pastEventsList }) {
  function getOption1() {
    return (
      <div className="pastEvents">
        <div className="pastEvents__roll" id="roll1">
          {pastEventsList.map((pastEventObject, idx) => {
            if (idx % 2 === 0) {
              return (
                <PastEventCard
                  key={pastEventObject.imgUrl}
                  year={pastEventObject.info.year}
                  links={pastEventObject.info.links}
                  imgUrl={pastEventObject.imgUrl}
                />
              );
            }
          })}
        </div>
        <div className="pastEvents__roll" id="roll2">
          {pastEventsList.map((pastEventObject, idx) => {
            const firstCutOff = 5;
            const secondCutOff = firstCutOff + 4;
            const thirdCutOff = secondCutOff + 4;
            if (idx % 2 === 1) {
              if (!pastEventObject.imgUrl) {
                return (
                  <div
                    key={pastEventObject.info.text}
                    className="pastEvents__textBlock"
                  >
                    <div translate="no">
                      {pastEventObject.info.text.slice(0, firstCutOff)}
                    </div>
                    <div>
                      {pastEventObject.info.text.slice(
                        firstCutOff,
                        secondCutOff
                      )}
                    </div>
                    <div>
                      {pastEventObject.info.text.slice(
                        secondCutOff,
                        thirdCutOff
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <PastEventCard
                  key={pastEventObject.imgUrl}
                  year={pastEventObject.info.year}
                  links={pastEventObject.info.links}
                  imgUrl={pastEventObject.imgUrl}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }

  function getOption2() {
    const newPastEventsList = [...pastEventsList];
    swapElements(newPastEventsList, 0, 1);
    return (
      <div className="pastEvents__bigroll">
        {newPastEventsList.map((pastEventObject) => {
          return (
            <PastEventCard
              key={pastEventObject.imgUrl + pastEventObject.info.text}
              year={pastEventObject.info.year}
              links={pastEventObject.info.links}
              imgUrl={pastEventObject.imgUrl}
              text={pastEventObject.info.text}
            />
          );
        })}
      </div>
    );
  }

  const { height, width } = useWindowDimensions();

  if (width < 685) {
    return getOption2();
  } else {
    return getOption1();
  }
}

export default PastEvents;
