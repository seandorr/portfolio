import React, { useState, useEffect, Suspense } from "react";
import PropTypes from "prop-types";
import LoadingImg from "./LoadingImg/LoadingImg";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <Suspense fallback={<LoadingImg />}>
      {loading ? <LoadingImg /> : children}
    </Suspense>
  );
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
