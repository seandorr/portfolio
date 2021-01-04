import React from "react";
import PropTypes from "prop-types";

const GridLines = (props) => {
  const { color } = props;
  return (
    <div className="gridline-container">
      <div
        id="color-column"
        className="gridline"
        style={{ backgroundColor: color }}
      ></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
    </div>
  );
};

GridLines.propTypes = {};

export default GridLines;
