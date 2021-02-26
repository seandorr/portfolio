import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./detailed-project.scss";
import FilterTag from "../../../components/FilterTag/FilterTag";
import generateRandomKey from "../../../utils/functions/generateRandomKey";
import { Tilt } from "../../../components/CustomTilt/CustomTilt";
import { isObjectWithValues } from "../../../utils/validators/objectValidator";
import MusicLibrary from "../../Home/MusicLibrary/MusicLibrary";

const DetailedProject = ({
  translation,
  projects,
  project,
  setActiveProjectColor,
}) => {
  const {
    projectName,
    projectColor,
    projectImage,
    gitLink,
    projectId,
  } = project;
  const [margins, setMargins] = useState(50);
  setActiveProjectColor(projectColor);

  let previousProject = projects[projectId - 2];
  let nextProject = projects[projectId];
  const lastProject = projects.length - 1;
  if (previousProject === undefined) {
    previousProject = projects[lastProject];
  }

  if (nextProject === undefined) {
    nextProject = projects[0];
  }

  useEffect(() => {
    const handleMargins = () => {
      const scrollPosition = window.scrollY;
      const getProject = document.querySelector("#project-view");
      const projOffsetTop = getProject.offsetTop;
      const whenToChangeMargin = projOffsetTop - 50;
      const whenProjReachesTopOfBrowser = scrollPosition - projOffsetTop;
      const hasProjReachesTopOfBrowser = whenProjReachesTopOfBrowser >= 0;
      const whenToRemoveSticky = projOffsetTop + 150 === scrollPosition;

      // if (hasProjReachesTopOfBrowser) {
      //   getProject.classList.add("sticky");
      // }

      // if (whenToRemoveSticky > scrollPosition) {
      //   getProject.classList.remove("sticky");
      // }

      if (scrollPosition < whenToChangeMargin) {
        setMargins(50);
      } else {
        const calcSubtractedMargins = whenToChangeMargin - scrollPosition + 50;
        if (calcSubtractedMargins >= 0) {
          setMargins(calcSubtractedMargins);
          getProject.classList.remove("unstick");
        } else {
          const calcAddedMargins = scrollPosition - whenToChangeMargin - 50;
          if (calcAddedMargins > 50) {
            return;
          } else {
            setMargins(calcAddedMargins);
            getProject.classList.add("unstick");
          }
        }
      }
    };
    window.addEventListener("scroll", handleMargins);

    return () => {
      window.removeEventListener("scroll", handleMargins);
    };
  }, [margins]);

  const projectStyles = {
    margin: `0 ${margins}px`,
  };

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
                return <li>{bullet}</li>;
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
      <div id="project-view" style={projectStyles}>
        <MusicLibrary />
      </div>
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
  project: PropTypes.arrayOf(Object).isRequired,
  setActiveProjectColor: PropTypes.func,
};

DetailedProject.defaultProps = {
  translation: undefined,
  setActiveProjectColor: undefined,
};

export default DetailedProject;
