import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
import App from "./App";
import english from "./locales/en/en_EN.json";
import spanish from "./locales/es/es_ES.json";

i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  fallbackLng: "en",
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
