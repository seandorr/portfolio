import React, { Suspense } from "react";
import PropTypes from "prop-types";
import LoadingIcon from "./LoadingIcon/LoadingIcon";

const Loading = ({ children }) => {
  return <Suspense fallback={<LoadingIcon />}>{children}</Suspense>;
};

Loading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.objectOf(Object),
    PropTypes.arrayOf(Array),
  ]).isRequired,
};

export default Loading;
