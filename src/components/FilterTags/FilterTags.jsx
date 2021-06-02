import React from "react";
import PropTypes from "prop-types";
import FilterTag from "./components/FilterTag/FilterTag";
import generateRandomKey from "../../utils/functions/generateRandomKey";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./filter-tags.scss";

const FilterTags = ({ projectName, location }) => {
  const { translation } = useTranslation();
  const tags = translation(`project.${projectName}.tags`, {
    returnObjects: true,
  });

  const aboutTags = translation("about.tags", {
    returnObjects: true,
  });

  return (
    <div className={`filter-tag-container ${location}`}>
      {Object.values(location === "about" ? aboutTags : tags).map((tag) => {
        return <FilterTag key={generateRandomKey()} tag={tag} />;
      })}
    </div>
  );
};

FilterTags.propTypes = {
  projectName: PropTypes.string,
  location: PropTypes.string.isRequired,
};

FilterTags.defaultProps = {
  projectName: undefined,
};

export default FilterTags;
