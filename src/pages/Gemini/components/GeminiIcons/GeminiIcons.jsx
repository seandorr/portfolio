import React, { useState } from "react";
import { geminiIcons } from "./utils/constants/geminiIcons";
import "./gemini-icons.scss";

const GeminiIcons = () => {
  const [hoveringOverIcon, setHoveringOverIcon] = useState(false);
  const IconsArray = Object.values(geminiIcons);

  const handleOnHover = (key) => {
    console.log(
      "🚀 ~ file: GeminiIcons.jsx ~ line 10 ~ handleOnHover ~ key",
      key
    );

    // if ((key) => !key) {
    //   setHoveringOverIcon(true);
    // } else {

    //   setHoveringOverIcon(false);
    // }
  };

  return (
    <div className="icon-grid">
      {IconsArray.map(({ icon, key }) => {
        return (
          <div
            className={`icon ${hoveringOverIcon ? "testing" : ""}`}
            key={key}
            onMouseEnter={() => handleOnHover(key)}
            onMouseLeave={() => handleOnHover(key)}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default GeminiIcons;
