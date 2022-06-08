import React from "react";
import ReactDOM from "react-dom/client";
import { MarvelContext } from "context";
import { App } from "app";
import "styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <MarvelContext>
      <App />
    </MarvelContext>
  </React.StrictMode>,
);
