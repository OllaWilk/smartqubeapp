import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LocaleProvider } from "./providers/LocalProvider";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "./styles/variable.scss";
import "./styles/typography.scss";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
