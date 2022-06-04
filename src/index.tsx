import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { MarvelContext } from "./context/marvelContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MarvelContext>
      <App />
    </MarvelContext>
  </React.StrictMode>
);
