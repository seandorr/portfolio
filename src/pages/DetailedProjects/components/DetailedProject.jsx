import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./detailed-project.scss";
import FilterTag from "../../../components/FilterTag/FilterTag";
import generateRandomKey from "../../../utils/functions/generateRandomKey";
import { Tilt } from "../../../components/CustomTilt/CustomTilt";

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

  // useEffect(() => {
  //   const handleMargins = () => {
  //     const scrollPosition = window.scrollY;
  //     const calcMargins = 50 - scrollPosition;

  //     console.log("calcMargins", calcMargins);
  //     if (calcMargins >= 0) {
  //       setMargins(calcMargins);
  //     } else {
  //       setMargins(0);
  //     }
  //   };
  //   window.addEventListener("scroll", handleMargins);

  //   return () => {
  //     window.removeEventListener("scroll", handleMargins);
  //   };
  // }, [margins]);

  const aboutStyles = {
    // margin: `0 ${margins}px`,
    // backgroundColor: projectColor,
  };

  const tags = translation(`project.${projectName}.tags`, {
    returnObjects: true,
  });

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
            You know that feeling when you discover a great song for the first
            time? This project aims to deliver this feeling by sharing tailored
            Spotify playlists ranging through all genres. I built the navigation
            in a way to resemble how you would flip through vinyls in a box or
            CDs on a shelf, which is all too familiar to a music lover.
          </p>
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
