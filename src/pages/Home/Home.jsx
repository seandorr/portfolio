import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import GridLines from "../../components/GridLines/GridLines";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import useWindowSize from "../../utils/customHooks/useWindowSize";
import { projectsData } from "../../utils/constants/projectPreviewData";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./home.scss";

const Home = ({ setActiveProjectColor, activeProjectColor }) => {
  const getWindowHeight = useWindowSize().height;
  const getWindowWidth = useWindowSize().width;
  const isMobileSize = getWindowWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      const indexOfProjectCurrentlyInView = Math.floor(
        window.scrollY / (getWindowHeight / 1.2)
      );

      if (projectsData[indexOfProjectCurrentlyInView] !== undefined) {
        if (indexOfProjectCurrentlyInView < projectsData.length) {
          setActiveProjectColor(
            projectsData[indexOfProjectCurrentlyInView].projectColor
          );
        } else {
          const lastProject = projectsData.length - 1;
          setActiveProjectColor(projectsData[lastProject].projectColor);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleProjectColors = () => {
      if (window.scrollY <= 1) {
        setActiveProjectColor(projectsData[0].projectColor);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    handleProjectColors();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getWindowHeight, setActiveProjectColor]);

  const { translation } = useTranslation();

  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const animationConfiguration = {
    initial: {
      width: "0%",
      height: "100vh",
      position: "fixed",
      zIndex: 3,
    },
    exit: {
      width: "100%",
    },
  };
  const animationConfigurationGrid = {
    initial: {
      width: "100%",
      height: "100vh",
      position: "fixed",
      zIndex: -1,
    },
    animate: {
      width: "25%",
    },
  };

  return (
    <>
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.home")}</title>
      </Helmet>
      {!isMobileSize && (
        <>
          <GridLines />
          <motion.div
            style={{ backgroundColor: activeProjectColor }}
            variants={!isMobileSize && animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          ></motion.div>
          <motion.div
            id="color-column"
            style={{ backgroundColor: activeProjectColor }}
            variants={animationConfigurationGrid}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          ></motion.div>
        </>
      )}

      <div className="projects-container">
        {projectsData.map((project) => {
          const { projectId } = project;

          return <ProjectPreview key={projectId} project={project} />;
        })}
      </div>
    </>
  );
};

export default Home;
