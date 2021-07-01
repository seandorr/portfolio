import React, { Suspense } from "react";
import PropTypes from "prop-types";
import LoadingImg from "./LoadingImg/LoadingImg";

const Loading = ({ children }) => {
  return <Suspense fallback={<LoadingImg />}>{children}</Suspense>;
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
