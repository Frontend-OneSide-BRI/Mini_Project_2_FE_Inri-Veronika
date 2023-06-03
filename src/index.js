import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
// import App from "./pages/App";
import Gallery from "./pages/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>
);
