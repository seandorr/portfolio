import React, { useState } from "react";
import geminiIcons from "./utils/constants/geminiIcons";
import "./gemini-icons.scss";

const GeminiIcons = () => {
  const [hoveringOverIcon, setHoveringOverIcon] = useState(false);

  const handleOnMouseEnter = (key) => {
    setHoveringOverIcon(key);
  };

  return (
    <div className="gemini-icon-grid">
      {geminiIcons.map(({ icon, key }) => {
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
