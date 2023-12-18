import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/Fonts/bear-hug/Bear-hug.ttf";
import "./Fonts/Montserrat/static/Montserrat-Regular.ttf";
import "./Fonts/Montserrat/static/Montserrat-Bold.ttf";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);