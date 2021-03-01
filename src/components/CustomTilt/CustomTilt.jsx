import React from "react";
import PropTypes from "prop-types";
import Tilt from "react-vanilla-tilt";

const CustomTilt = ({ style, children }) => {
  return <Tilt style={style}>{children}</Tilt>;
};

CustomTilt.propTypes = {
  style: PropTypes.object,
};

CustomTilt.defaultProps = {
  style: {
    borderRadius: "10px",
    boxShadow: "none",
  },
};

export { CustomTilt as Tilt };
