import React, { useState } from "react";
import "./safe.scss";

const Safe = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 102 102"
      className={`safe-icon ${hovering ? "start-hover-animation" : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <g>
        <path
          className="main-color"
          d="M90.8,101H31.2C25.6,101,21,96.4,21,90.8V11.2C21,5.6,25.6,1,31.2,1h59.6C96.4,1,101,5.6,101,11.2v79.6
		C101,96.4,96.4,101,90.8,101z"
        />
        <path
          className="opaque-color"
          d="M90.8,101H31.2C25.6,101,21,96.4,21,90.8V11.2C21,5.6,25.6,1,31.2,1h59.6C96.4,1,101,5.6,101,11.2v79.6
		C101,96.4,96.4,101,90.8,101z"
        />
        <path
          className="main-color"
          d="M70.8,101H11.2C5.6,101,1,96.4,1,90.8V11.2C1,5.6,5.6,1,11.2,1h59.6C76.4,1,81,5.6,81,11.2v79.6
		C81,96.4,76.4,101,70.8,101z"
        />
        <path
          className="light-color"
          d="M70,63.4H52c-0.6,0-1-0.4-1-1v-23c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v23C71,63,70.6,63.4,70,63.4z"
        />
        <circle className="light-color" cx="18.1" cy="51" r="7.1" />
        <path
          className="light-color turn-handle"
          d="M16.1,69V53c0-1.1,0.9-2,2-2l0,0c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2l0,0C17,71,16.1,70.1,16.1,69z"
        />
        <line className="stroke" x1="64.4" y1="38.4" x2="64.4" y2="63.4" />
        <line className="stroke" x1="57.6" y1="38.4" x2="57.6" y2="63.4" />
        <line className="stroke" x1="51" y1="44.8" x2="70" y2="44.8" />
        <line className="stroke" x1="51" y1="51" x2="70" y2="51" />
        <line className="stroke" x1="51" y1="57.2" x2="70" y2="57.2" />
      </g>
    </svg>
  );
};

export default Safe;
