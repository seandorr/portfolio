import React from "react";
import PropTypes from "prop-types";
import GeminiHero from "./components/Hero/GeminiHero";
import Tech from "./components/icons/Tech/Tech";
import Safe from "./components/icons/Safe/Safe";
import Portal from "./components/icons/Portal/Portal";

const Gemini = (props) => {
  return (
    <>
      <GeminiHero />
      <Tech />
      <Safe />
      <Portal />
    </>
  );
};

Gemini.propTypes = {};

export default Gemini;
