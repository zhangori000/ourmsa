import React, { useRef, useEffect } from "react";

function getStringWidth(text, fontSize, fontFamily) {
  const span = document.createElement("span");
  span.innerText = text;
  span.style.fontSize = fontSize;
  span.style.fontFamily = fontFamily;
  //   span.style.visibility = "hidden";
  document.body.appendChild(span);

  const width = span.getBoundingClientRect().width;
  console.log(span.getBoundingClientRect());
  console.log("hi", width);

  document.body.removeChild(span);

  return width;
}

function StringWidthComponent() {
  const ref = useRef(null);

  useEffect(() => {
    const text = ref.current.innerText;
    const fontSize = "16px";
    const fontFamily = "Arial";

    const stringWidth = getStringWidth(text, fontSize, fontFamily);
    console.log("String width:", stringWidth);
  }, []);

  return (
    <div ref={ref}>
      Example pokemone11111omg omg omg omg omg omg omg omg Example
      pokemone11111omg omg omg omg omg omg omg omg
    </div>
  );
}

export default StringWidthComponent;
