import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tilt } from "../../../../components/CustomTilt/CustomTilt";
import "./footer.scss";
import useWindowSize from "../../../../utils/customHooks/useWindowSize";

const Footer = ({ projects, project, translation }) => {
  const { projectId } = project;

  const browserWidth = useWindowSize().width;
  const smallScreen = useMemo(() => browserWidth < 768, [browserWidth]);

  let previousProject = projects[projectId - 2];
  let nextProject = projects[projectId];
  const lastProject = projects.length - 1;
  if (previousProject === undefined) {
    previousProject = projects[lastProject];
  }

  if (nextProject === undefined) {
    nextProject = projects[0];
  }

  const prevProjectLinkStyles = {
    background: `${previousProject.projectColor}`,
  };

  const nextProjectLinkStyles = {
    background: `${nextProject.projectColor}`,
  };

  return (
    <footer className="project-nav-links">
      <Link to={`/${previousProject.projectLink}`}>
        <Tilt>
          <div
            className="project-nav-link previous"
            style={prevProjectLinkStyles}
          >
            {!smallScreen && <h1>{translation("prevButton")}</h1>}
          </div>
        </Tilt>
      </Link>
      <Link to={`/${nextProject.projectLink}`}>
        <Tilt>
          <div className="project-nav-link next" style={nextProjectLinkStyles}>
            {!smallScreen && <h1>{translation("nextButton")}</h1>}
          </div>
        </Tilt>
      </Link>
    </footer>
  );
};

Footer.propTypes = {
  projects: PropTypes.arrayOf(Object).isRequired,
  project: PropTypes.object.isRequired,
  translation: PropTypes.func.isRequired,
};

export default Footer;
