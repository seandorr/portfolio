import React from "react";
import PropTypes from "prop-types";
import FilterTag from "../filterTag/FilterTag";

const ProjectPreview = (props) => {
  const {
    projectId,
    projectImage,
    projectImageAlt,
    projectName,
    projectTags,
    projectLink,
  } = props;

  return (
    <div className="content-grid project-preview" id={`proj-${projectId}`}>
      <div className="content" id="col-left">
        <img
          className="proj-img"
          src={`/images/${projectImage}`}
          alt={projectImageAlt}
        />
      </div>
      <div className="content" id="col-right">
        <h1>{projectName}</h1>
        <div className="filter-tag-container">
          {projectTags.map((tag) => {
            return <FilterTag tag={tag} />;
          })}
        </div>
        <a className="btn" href={projectLink}>
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectPreview.propTypes = {
  projectId: PropTypes.number,
  projectImage: PropTypes.string,
  projectImageAlt: PropTypes.string,
  projectName: PropTypes.string,
  projectTags: PropTypes.array,
  projectLink: PropTypes.string,
};

ProjectPreview.defaultProps = {
  projectId: undefined,
  projectImage: undefined,
  projectImageAlt: undefined,
  projectName: undefined,
  projectTags: undefined,
  projectLink: undefined,
};

export default ProjectPreview;
