import React from "react";
import PropTypes from "prop-types";

const FilterTag = (props) => {
  const { tag } = props;

  return <span className="filter-tag">{tag}</span>;
};

FilterTag.propTypes = {
  tag: PropTypes.string,
};

FilterTag.defaultPropss = {
  tag: undefined,
};

export default FilterTag;
