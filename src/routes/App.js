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

  const contentRef = useRef();

  useEffect(() => {
    const substrings = ["中华小当家", "明西书院", "明州本部", "西雅图分校"];
    const nodesToReplace = []; // Array to store nodes that need to be replaced
    // TODO: FIX THE LOGIC
    const processTextNode = (node) => {
      let newHTML = node.nodeValue;
      substrings.forEach((substring) => {
        if (newHTML.includes(substring)) {
          newHTML = newHTML
            .split(substring)
            .join(
              `<span translate="no" data-skip-translation="true">${substring}</span>`
            );
        }
      });
      // node.parentNode.appendChild(document.createTextNode(newHTML));
      nodesToReplace.push({ node, newHTML });
    };

    const traverse = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        processTextNode(node);
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        !node.dataset.skipTranslation
      ) {
        const children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
          traverse(children[i]);
        }
      }
    };

    const rootElement = contentRef.current;
    // const rootElement = document.querySelector(".youtubeDescription");
    traverse(rootElement);
    // Replace text nodes
    nodesToReplace.forEach(({ node, newHTML }) => {
      const tempNode = document.createElement("div");
      tempNode.innerHTML = newHTML;
      while (tempNode.firstChild) {
        node.parentNode.insertBefore(tempNode.firstChild, node);
      }
      node.parentNode.removeChild(node);
    });
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
