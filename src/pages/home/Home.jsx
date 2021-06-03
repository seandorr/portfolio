import React, { useEffect, Suspense } from "react";
import GridLines from "../../components/GridLines/GridLines";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import useWindowSize from "../../utils/customHooks/useWindowSize";
import { projectsData } from "../Home/utils/constants/projectPreviewData";
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

  return (
    <Suspense fallback="loading">
      {!isMobileSize && <GridLines activeProjectColor={activeProjectColor} />}
      <div className="projects-container">
        {projectsData.map((project) => {
          const { projectId } = project;

          return <ProjectPreview key={projectId} project={project} />;
        })}
      </div>
    </Suspense>
  );
};

export default Home;
