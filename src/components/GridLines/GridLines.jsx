import React from "react";
import PropTypes from "prop-types";
import "./gridlines.scss";

const GridLines = (props) => {
  const { activeProjectColor } = props;
  return (
    <div className="gridline-container">
      <div
        id="color-column"
        className="gridline"
        style={{ backgroundColor: activeProjectColor }}
      ></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
      <div className="gridline"></div>
    </div>
  );
};

GridLines.propTypes = {
  activeProjectColor: PropTypes.string,
};

GridLines.defaultProps = {
  activeProjectColor: undefined,
};

export default GridLines;
