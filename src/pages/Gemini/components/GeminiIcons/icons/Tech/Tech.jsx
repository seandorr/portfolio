import React, { useState } from "react";
import "./tech.scss";

const Tech = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 102 102"
      className={`tech-icon ${hovering ? "start-hover-animation" : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <g>
        <path
          className="main-color"
          d="M91,101H31c-5.5,0-10-4.5-10-10V11c0-5.5,4.5-10,10-10h60c5.5,0,10,4.5,10,10v80C101,96.5,96.5,101,91,101z"
        />
        <path
          className="opaque-color"
          d="M91,101H31c-5.5,0-10-4.5-10-10V11c0-5.5,4.5-10,10-10h60c5.5,0,10,4.5,10,10v80C101,96.5,96.5,101,91,101z"
        />
        <path
          className="main-color"
          d="M71,101H11c-5.5,0-10-4.5-10-10V11C1,5.5,5.5,1,11,1h60c5.5,0,10,4.5,10,10v80C81,96.5,76.5,101,71,101z"
        />
        <path
          className="main-color"
          d="M81,21H1V11C1,5.5,5.5,1,11,1h60c5.5,0,10,4.5,10,10V21z"
        />
        <rect x="1" y="21" className="main-color" width="80" height="20" />
        <rect x="1" y="41" className="main-color" width="80" height="20" />
        <rect x="1" y="61" className="main-color" width="80" height="20" />
        <path
          className="main-color"
          d="M71,101H11c-5.5,0-10-4.5-10-10V81h80v10C81,96.5,76.5,101,71,101z"
        />
        <circle className="light-color blink blink-1" cx="16" cy="11" r="5" />
        <circle className="opaque-color" cx="41" cy="11" r="5" />
        <circle className="opaque-color" cx="66" cy="11" r="5" />
        <circle className="opaque-color" cx="16" cy="31" r="5" />
        <circle className="opaque-color" cx="41" cy="31" r="5" />
        <circle className="opaque-color" cx="66" cy="31" r="5" />
        <circle className="opaque-color" cx="16" cy="51" r="5" />
        <circle className="opaque-color" cx="41" cy="51" r="5" />
        <circle className="light-color blink blink-2" cx="66" cy="51" r="5" />
        <circle className="light-color blink blink-3" cx="16" cy="71" r="5" />
        <circle className="opaque-color" cx="41" cy="71" r="5" />
        <circle className="opaque-color" cx="66" cy="71" r="5" />
        <circle className="opaque-color" cx="16" cy="91" r="5" />
        <circle className="light-color blink blink-4" cx="41" cy="91" r="5" />
        <circle className="opaque-color" cx="66" cy="91" r="5" />
      </g>
    </svg>
  );
};

export default Tech;
