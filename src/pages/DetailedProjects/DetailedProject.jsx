import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import generateRandomKey from "../../utils/functions/generateRandomKey";
import { isObjectWithValues } from "../../utils/validators/objectValidator";
import FilterTags from "../../components/FilterTags/FilterTags";
import Footer from "./Footer/Footer";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./detailed-project.scss";

const DetailedProject = ({ project, setActiveProjectColor }) => {
  const { projectName, projectColor, gitLink, projectDetailedComponent } =
    project;

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveProjectColor(projectColor);
  }, [projectColor, setActiveProjectColor]);

  const { translation } = useTranslation();

  const descriptionBullets = translation(
    `project.${projectName}.descriptionBullets`,
    {
      returnObjects: true,
    }
  );

  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const animationConfiguration = {
    initial: {
      left: 0,
      top: 0,
      width: "100%",
      height: "100vh",
      position: "fixed",
      zIndex: 3,
    },
    animate: {
      height: 0,
    },
    exit: {
      height: "100vh",
    },
  };

  const animationConfigurationSection = {
    initial: {
      marginTop: "50vh",
    },
    animate: {
      marginTop: 0,
    },
    exit: {
      marginTop: "50vh",
    },
  };

  return (
    <>
      <Helmet>
        <title>Sean Dorr | {translation(`project.${projectName}.title`)}</title>
      </Helmet>
      <motion.div
        style={{ backgroundColor: projectColor }}
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      ></motion.div>
      <motion.div
        variants={animationConfigurationSection}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        className="detailed-project-container max-width"
      >
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
      </motion.div>
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
