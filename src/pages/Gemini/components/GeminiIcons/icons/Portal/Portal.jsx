import React from "react";
import "./portal.scss";

const Portal = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 102 102"
      className="portal-icon"
    >
      <g>
        <path
          className="main-color"
          d="M91,76H31c-5.5,0-10-4.5-10-10V11c0-5.5,4.5-10,10-10h60c5.5,0,10,4.5,10,10v55C101,71.5,96.5,76,91,76z"
        />
        <path
          className="opaque-color"
          d="M91,76H31c-5.5,0-10-4.5-10-10V11c0-5.5,4.5-10,10-10h60c5.5,0,10,4.5,10,10v55C101,71.5,96.5,76,91,76z"
        />
        <path
          className="main-color"
          d="M71,76H11C5.5,76,1,71.5,1,66V11C1,5.5,5.5,1,11,1h60c5.5,0,10,4.5,10,10v55C81,71.5,76.5,76,71,76z"
        />
        <path
          className="main-color"
          d="M71.2,101H40.8c-1.2,0-2.2-1.1-2-2.3L42.5,76h27l3.6,22.7C73.3,99.9,72.4,101,71.2,101z"
        />
        <path
          className="opaque-color"
          d="M71.2,101H40.8c-1.2,0-2.2-1.1-2-2.3L42.5,76h27l3.6,22.7C73.3,99.9,72.4,101,71.2,101z"
        />
        <path
          className="main-color"
          d="M61.2,101H30.8c-1.2,0-2.2-1.1-2-2.3L32.5,76h27l3.6,22.7C63.3,99.9,62.4,101,61.2,101z"
        />
        <path
          className="light-color"
          d="M67,68H15c-3.3,0-6-2.7-6-6V15c0-3.3,2.7-6,6-6h52c3.3,0,6,2.7,6,6v47C73,65.3,70.3,68,67,68z"
        />
        <path
          className="opaque-color nav-bar"
          d="M66,24H16c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h50c1.1,0,2,0.9,2,2v6C68,23.1,67.1,24,66,24z"
        />
        <path
          className="opaque-color side-bar"
          d="M18,63.5h-2c-1.1,0-2-0.9-2-2v-30c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2v30C20,62.6,19.1,63.5,18,63.5z"
        />
        <path
          className="opaque-color content"
          d="M66,63.5H27c-1.1,0-2-0.9-2-2V31c0-1.1,0.9-2,2-2h39c1.1,0,2,0.9,2,2v30.5C68,62.6,67.1,63.5,66,63.5z"
        />
      </g>
    </svg>
  );
};

export default Portal;
