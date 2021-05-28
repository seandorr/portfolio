import React, { useState } from "react";
import { geminiIcons } from "./utils/constants/geminiIcons";
import "./gemini-icons.scss";

const GeminiIcons = () => {
  const [hoveringOverIcon, setHoveringOverIcon] = useState(false);
  const IconsArray = Object.values(geminiIcons);

  const handleOnMouseEnter = (key) => {
    setHoveringOverIcon(key);
  };

  return (
    <div className="gemini-icon-grid">
      {IconsArray.map(({ icon, key }) => {
        return (
          <div
            className={`gemini-icon ${
              hoveringOverIcon === key ? "active-hover" : ""
            }`}
            key={key}
            onMouseEnter={() => handleOnMouseEnter(key)}
            onMouseLeave={() => setHoveringOverIcon(false)}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default GeminiIcons;
