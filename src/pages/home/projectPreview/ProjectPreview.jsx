import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FilterTag from "../../../components/FilterTag/FilterTag";
import generateRandomKey from "../../../utils/functions/generateRandomKey";

const ProjectPreview = ({ project, translation }) => {
  const {
    projectId,
    projectName,
    projectImage,
    projectComponent,
    projectLink,
  } = project;

  const tags = translation(`project.${projectName}.tags`, {
    returnObjects: true,
  });

  return (
    <div
      className={`content-grid project-preview ${projectName}`}
      id={`proj-${projectId}`}
    >
      <div className="content" id="col-left">
        {projectImage && (
          <img
            className="proj-img"
            src={`/images/${projectImage}`}
            alt={translation(`project.${projectName}.imageAlt`)}
          />
        )}
        {projectComponent && projectComponent}
      </div>
      <div className="content" id="col-right">
        <h1>{translation(`project.${projectName}.title`)}</h1>
        <div className="filter-tag-container">
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
        <Link to={projectLink} className="link project-link">
          {translation(`viewButton`)}
        </Link>
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
