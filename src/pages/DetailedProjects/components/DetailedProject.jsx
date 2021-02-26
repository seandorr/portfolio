import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FilterTag from "../../../components/FilterTag/FilterTag";
import generateRandomKey from "../../../utils/functions/generateRandomKey";
import { Tilt } from "../../../components/CustomTilt/CustomTilt";
import { isObjectWithValues } from "../../../utils/validators/objectValidator";
import "./detailed-project.scss";

const DetailedProject = ({
  translation,
  projects,
  project,
  setActiveProjectColor,
}) => {
  const {
    projectName,
    projectColor,
    gitLink,
    projectId,
    projectDetailedComponent,
  } = project;

  useEffect(() => {
    setActiveProjectColor(projectColor);
  }, [projectColor, setActiveProjectColor]);

  let previousProject = projects[projectId - 2];
  let nextProject = projects[projectId];
  const lastProject = projects.length - 1;
  if (previousProject === undefined) {
    previousProject = projects[lastProject];
  }

  if (nextProject === undefined) {
    nextProject = projects[0];
  }

  const tags = translation(`project.${projectName}.tags`, {
    returnObjects: true,
  });

  const descriptionBullets = translation(
    `project.${projectName}.descriptionBullets`,
    {
      returnObjects: true,
    }
  );

  const prevProjectLinkStyles = {
    background: `${previousProject.projectColor}`,
  };

  const nextProjectLinkStyles = {
    background: `${nextProject.projectColor}`,
  };

  return (
    <div className="detailed-project-container">
      <div className="project-details-grid">
        <div className="project-details-grid-item info">
          <div className="row">
            <h1 className="project-title">
              {translation(`project.${projectName}.title`)}
            </h1>
            {gitLink && (
              <a
                className="project-git-link link"
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Repo
              </a>
            )}
          </div>
          <p className="project-about-details">
            {translation(`project.${projectName}.description`)}
          </p>
          {isObjectWithValues(descriptionBullets) && (
            <ul className="project-about-details-list">
              {Object.values(descriptionBullets).map((bullet) => {
                return <li key={generateRandomKey()}>{bullet}</li>;
              })}
            </ul>
          )}
        </div>
        <div
          className="project-details-grid-item stack"
          style={{ backgroundColor: projectColor }}
        >
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
        </div>
      </div>
      {projectDetailedComponent && (
        <div className="project-view">{projectDetailedComponent}</div>
      )}

      <footer className="project-nav-links">
        <Link to={`/${previousProject.projectLink}`}>
          <Tilt>
            <div
              className="project-nav-link previous"
              style={prevProjectLinkStyles}
            >
              <h1>{translation("prevButton")}</h1>
            </div>
          </Tilt>
        </Link>
        <Link to={`/${nextProject.projectLink}`}>
          <Tilt>
            <div
              className="project-nav-link next"
              style={nextProjectLinkStyles}
            >
              <h1>{translation("nextButton")}</h1>
            </div>
          </Tilt>
        </Link>
      </footer>
    </div>
  );
};

DetailedProject.propTypes = {
  translation: PropTypes.func,
  project: PropTypes.objectOf(Object).isRequired,
  setActiveProjectColor: PropTypes.func,
};

DetailedProject.defaultProps = {
  translation: undefined,
  setActiveProjectColor: undefined,
};

export default DetailedProject;
