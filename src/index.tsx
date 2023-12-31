import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollRestorationProvider from "./contexts/ScrollRestoration/ScrollRestorationProvider";
import ResponsiveContextProvider from "./contexts/responsiveContext/ResponsiveContextProvider";
import ReactGA from "react-ga4";

ReactGA.initialize("G-C5BYFBSY3S");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ResponsiveContextProvider>
          <ScrollRestorationProvider>
            <App />
          </ScrollRestorationProvider>
        </ResponsiveContextProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
