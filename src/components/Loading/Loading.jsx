import React, { Suspense } from "react";
import PropTypes from "prop-types";
import LoadingImg from "./LoadingImg/LoadingImg";

const Loading = ({ style, type, children }) => {
  return (
    <Suspense fallback={type === "image" ? <LoadingImg /> : null} style={style}>
      {children}
    </Suspense>
  );
};

Loading.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.objectOf(Object),
    PropTypes.arrayOf(Array),
  ]).isRequired,
};

export default Loading;
