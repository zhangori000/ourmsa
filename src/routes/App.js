import React, { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [didScrollPast, setDidScrollPast] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 65) {
        setDidScrollPast(true);
      } else {
        setDidScrollPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // used to auto scroll the page back to the beginning whenever users click on another page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const substrings = ["中华小当家", "明西书院", "明州本部", "西雅图分校"];
  const contentRef = useRef();

  useEffect(() => {
    // TODO: FIX THE LOGIC
    const traverseDOM = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const childNodes = node.childNodes;

        for (let i = 0; i < childNodes.length; i++) {
          traverseDOM(childNodes[i]);
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        const parentElement = node.parentElement;
        const nodeText = node.textContent;

        for (const substring of substrings) {
          if (nodeText.includes(substring)) {
            const newHTML = nodeText.replaceAll(
              substring,
              `<span translate="no">${substring}</span>`
            );
            const newElement = document.createElement("span");
            newElement.innerHTML = newHTML;
            // check if the node is a direct child of the parentElement
            if (parentElement.contains(node)) {
              parentElement.replaceChild(newElement, node);
            }
          }
        }
      }
    };

    const rootElement = contentRef.current;
    traverseDOM(rootElement);
  }, []);

  return (
    <div ref={contentRef} className="app">
      <Header didScrollPast={didScrollPast} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
