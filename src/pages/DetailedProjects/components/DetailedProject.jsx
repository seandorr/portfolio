import React, { useEffect } from "react";
import PropTypes from "prop-types";
import generateRandomKey from "../../../utils/functions/generateRandomKey";
import { isObjectWithValues } from "../../../utils/validators/objectValidator";
import FilterTags from "../../../components/FilterTags/FilterTags";
import Footer from "../components/Footer/Footer";
import useTranslation from "../../../utils/customHooks/useTranslation";
import "./detailed-project.scss";

const DetailedProject = ({ project, setActiveProjectColor }) => {
  const { projectName, projectColor, gitLink, projectDetailedComponent } =
    project;

  useEffect(() => {
    setActiveProjectColor(projectColor);
  }, [projectColor, setActiveProjectColor]);

  const { translation } = useTranslation();

  const descriptionBullets = translation(
    `project.${projectName}.descriptionBullets`,
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <div className="detailed-project-container max-width">
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
            <FilterTags projectName={projectName} location="detailed" />
          </div>
        </div>
        {projectDetailedComponent && (
          <div className="project-view">{projectDetailedComponent}</div>
        )}
        <Footer project={project} />
      </div>
    </>
  );
};

DetailedProject.propTypes = {
  setActiveProjectColor: PropTypes.func,
};

DetailedProject.defaultProps = {
  setActiveProjectColor: undefined,
};

export default DetailedProject;
