import React from "react";
import { GeminiHero } from "./components/GeminiHero";
import { GeminiIcons } from "./components/GeminiIcons";

export const Gemini = () => {
  return (
    <div className="gemini-main-container">
      <GeminiHero />
      <GeminiIcons />
    </div>
  );
};
