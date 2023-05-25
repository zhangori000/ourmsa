import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import ErrorPage from "./error-page";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Schedule from "./routes/Schedule";
import Home, { getVideoUrls as videoUrlsLoader } from "./routes/Home";
// import Gallery, { getGalleryUrls as galleryLoader } from "./routes/Gallery";
import Minneapolis from "./routes/Minneapolis";
import Seattle from "./routes/Seattle";
import Volunteer, { loader as volunteerLoader } from "./routes/Volunteer";
import GalleryB, { loader as galleryBLoader } from "./routes/GalleryB";
import Sandbox from "./routes/Sandbox"
import Sandbox2 from "./routes/Sandbox2"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: videoUrlsLoader,
      },
      // {
      //   path: "about/",
      //   element: <About />,
      // },
      {
        path: "schedule/",
        element: <Schedule />,
      },
      // {
      //   path: "gallery/",
      //   element: <Gallery />,
      //   loader: galleryLoader,
      // },
      {
        path: "gallery/:location/:pictureType",
        element: <GalleryB />,
        loader: galleryBLoader,
      },
      {
        path: "locations/minneapolis",
        element: <Minneapolis />,
        // loader: minneapolisLoader,
      },
      {
        path: "locations/seattle",
        element: <Seattle />,
        // loader: seattleLoader,
      },
      {
        path: "volunteer/:location",
        element: <Volunteer />,
        loader: volunteerLoader,
      },
      {
        path: "sandbox",
        element: <Sandbox />
      },
      {
        path: "sandbox2",
        element: <Sandbox2 />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
