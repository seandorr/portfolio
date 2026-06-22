import React from "react";
import PropTypes from "prop-types";

export const FilterTag = ({ tag }) => {
  return <span className="filter-tag">{tag}</span>;
};

FilterTag.propTypes = {
  tag: PropTypes.string,
};

FilterTag.defaultPropss = {
  tag: undefined,
};
