import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap JS and Popper.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
