import React, { useRef, useEffect } from "react";

function getLineHeight(element) {
  const tempElement = document.createElement("div");
  tempElement.innerText = "Example text";
  tempElement.style.lineHeight = "normal";
  document.body.appendChild(tempElement);

  const lineHeight = tempElement.offsetHeight;
  console.log("hi", lineHeight);

  document.body.removeChild(tempElement);

  return lineHeight;
}

function LineHeightComponent() {
  const ref = useRef(null);

  useEffect(() => {
    const lineHeight = getLineHeight(ref.current);
    console.log("Line height:", lineHeight);
  }, []);

  return <div ref={ref}>Example text</div>;
}

export default LineHeightComponent;
