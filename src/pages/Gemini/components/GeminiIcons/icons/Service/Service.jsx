import React from "react";
import "./service.scss";

const Service = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 102 102"
      className="service-icon"
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
          className="light-color"
          d="M71,19.7v52.5C71,77,66.5,81,61,81H21c-5.5,0-10-3.9-10-8.8V19.7c0-4.8,4.5-8.8,10-8.8h40
		C66.5,11,71,14.9,71,19.7z"
        />
        <circle className="light-color" cx="41" cy="91" r="4" />
        <path
          className="opaque-color first-message"
          d="M44,26H18c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v6C46,25.1,45.1,26,44,26z"
        />
        <path
          className="opaque-color second-message"
          d="M64,61H38c-1.1,0-2-0.9-2-2V33c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v26C66,60.1,65.1,61,64,61z"
        />
        <path
          className="opaque-color third-message"
          d="M44,76H18c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v6C46,75.1,45.1,76,44,76z"
        />
        <path
          className="opaque-color fourth-message"
          d="M64,61H38c-1.1,0-2-0.9-2-2V33c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v26C66,60.1,65.1,61,64,61z"
        />
      </g>
    </svg>
  );
};

export default Service;
