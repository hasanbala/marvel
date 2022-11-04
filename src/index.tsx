import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import { App } from "app";
import "styles/index.scss";
import { MarvelContext } from "@context/marvelContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

root.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <MarvelContext>
        <App />
      </MarvelContext>
    </SWRConfig>
  </React.StrictMode>,
);
