import React from "react";
import PropTypes from "prop-types";
import FilterTag from "../filterTag/FilterTag";

const ProjectPreview = (props) => {
  const { projects, translation } = props;

  const { projectId, projectName, projectImage, projectLink } = projects;

  const tags = translation(`project.${projectName}.tags`, {
    returnObjects: true,
  });

  return (
    <div
      className={`content-grid project-preview ${projectName}`}
      id={`proj-${projectId}`}
    >
      <div className="content" id="col-left">
        <img
          className="proj-img"
          src={`/images/${projectImage}`}
          alt={translation(`project.${projectName}.imageAlt`)}
        />
      </div>
      <div className="content" id="col-right">
        <h1>{translation(`project.${projectName}.title`)}</h1>
        <div className="filter-tag-container">
          {Object.values(tags).map((tag) => {
            return (
              <FilterTag
                tag={tag}
                projectName={projectName}
                translation={translation}
              />
            );
          })}
        </div>
        <a className="btn" href={projectLink}>
          {translation(`viewButton`)}
        </a>
      </div>
    </div>
  );
};

ProjectPreview.propTypes = {
  projectId: PropTypes.number,
  projectImage: PropTypes.string,
  projectImageAlt: PropTypes.string,
  projectTitle: PropTypes.string,
  projectTags: PropTypes.array,
  projectLink: PropTypes.string,
};

ProjectPreview.defaultProps = {
  projectId: undefined,
  projectImage: undefined,
  projectImageAlt: undefined,
  projectTitle: undefined,
  projectTags: undefined,
  projectLink: undefined,
};

export default ProjectPreview;
