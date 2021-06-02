import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { projectsData } from "../../../Home/utils/constants/projectPreviewData";
import { Link } from "react-router-dom";
import { Tilt } from "../../../../components/CustomTilt/CustomTilt";
import useWindowSize from "../../../../utils/customHooks/useWindowSize";
import "./footer.scss";
import useTranslation from "../../../../utils/customHooks/useTranslation";

const Footer = ({ project }) => {
  const { projectId } = project;

  const { translation } = useTranslation();

  const browserWidth = useWindowSize().width;
  const smallScreen = useMemo(() => browserWidth < 768, [browserWidth]);

  let previousProject = projectsData[projectId - 2];
  let nextProject = projectsData[projectId];
  const lastProject = projectsData.length - 1;
  if (previousProject === undefined) {
    previousProject = projectsData[lastProject];
  }

  if (nextProject === undefined) {
    nextProject = projectsData[0];
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
  project: PropTypes.object.isRequired,
};

export default Footer;
