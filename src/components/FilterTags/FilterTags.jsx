import React from "react";
import PropTypes from "prop-types";
import FilterTag from "./components/FilterTag/FilterTag";
import generateRandomKey from "../../utils/functions/generateRandomKey";
import "./filter-tags.scss";

const FilterTags = ({ translation, projectName, location }) => {
  const tags = translation(`project.${projectName}.tags`, {
    returnObjects: true,
  });

  return (
    <div className={`filter-tag-container ${location}`}>
      {Object.values(tags).map((tag) => {
        return (
          <FilterTag
            key={generateRandomKey()}
            tag={tag}
            projectName={projectName}
            translation={translation}
          />
        );
      })}
    </div>
  );
};

FilterTags.propTypes = {
  translation: PropTypes.func,
  projectName: PropTypes.string,
  location: PropTypes.string.isRequired,
};

FilterTags.defaultProps = {
  translation: undefined,
  projectName: undefined,
};

export default FilterTags;
