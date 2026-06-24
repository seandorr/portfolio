import React from "react";
import { Helmet } from "react-helmet";
import useTranslation from "../../utils/customHooks/useTranslation";
import { GeminiHero } from "./components/GeminiHero";
import { GeminiIcons } from "./components/GeminiIcons";

export const Gemini = () => {
  const { translation } = useTranslation();
  return (
    <div className="gemini-main-container">
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.gemini")}</title>
      </Helmet>
      <GeminiHero />
      <GeminiIcons />
    </div>
  );
};
