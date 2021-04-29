import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import english from "./locales/en/en_EN.json";
import spanish from "./locales/es/es_ES.json";
import "./styles/main.scss";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: english,
    },
    es: {
      translation: spanish,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
