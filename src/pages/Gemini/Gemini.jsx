import React from "react";
import PropTypes from "prop-types";
import GeminiHero from "./components/GeminiHero/GeminiHero";
import GeminiIcons from "./components/GeminiIcons/GeminiIcons";

const Gemini = (props) => {
  return (
    <div className="gemini-main-container">
      <GeminiHero />
      <GeminiIcons />
    </div>
  );
};

Gemini.propTypes = {};

export default Gemini;
