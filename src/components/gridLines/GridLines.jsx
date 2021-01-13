import React from "react";
import PropTypes from "prop-types";
import "./gridlines.scss";

const GridLines = (props) => {
  const { projectColor } = props;
  return (
    <div className="gridline-container">
      <div
        id="color-column"
        className="gridline"
        style={{ backgroundColor: projectColor }}
      ></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
    </div>
  );
};

GridLines.propTypes = {
  projectColor: PropTypes.string,
};

GridLines.defaultProps = {
  projectColor: undefined,
};

export default GridLines;
