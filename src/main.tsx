import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Hras from "./pages/Hras";
import Landing from "./pages/Landing";
import CursorOverlay from "./utils/cursorOverlay";
import SmoothScroll from "./utils/smoothScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/horrors",
    element: <Hras />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CursorOverlay />
    <SmoothScroll>
      <div className="mx-10">
        <RouterProvider router={router} />
      </div>
    </SmoothScroll>
  </React.StrictMode>
);
