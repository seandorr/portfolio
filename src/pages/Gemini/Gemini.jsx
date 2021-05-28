import React from "react";
import GeminiHero from "./components/GeminiHero/GeminiHero";
import GeminiIcons from "./components/GeminiIcons/GeminiIcons";

const Gemini = () => {
  return (
    <div className="gemini-main-container">
      <GeminiHero />
      <GeminiIcons />
    </div>
  );
};

export default Gemini;
