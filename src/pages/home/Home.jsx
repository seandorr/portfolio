import React, { useEffect, Suspense } from "react";
import GridLines from "../../components/GridLines/GridLines";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import useWindowSize from "../../utils/customHooks/useWindowSize";
import "./home.scss";

const Home = ({
  translation,
  projects,
  setActiveProjectColor,
  activeProjectColor,
}) => {
  const getWindowHeight = useWindowSize().height;
  const getWindowWidth = useWindowSize().width;
  const isMobileSize = getWindowWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      const indexOfProjectCurrentlyInView = Math.floor(
        window.scrollY / (getWindowHeight / 1.2)
      );

      if (projects[indexOfProjectCurrentlyInView] !== undefined) {
        if (indexOfProjectCurrentlyInView < projects.length) {
          setActiveProjectColor(
            projects[indexOfProjectCurrentlyInView].projectColor
          );
        } else {
          const lastProject = projects.length - 1;
          setActiveProjectColor(projects[lastProject].projectColor);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleProjectColors = () => {
      if (window.scrollY <= 1) {
        setActiveProjectColor(projects[0].projectColor);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    handleProjectColors();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getWindowHeight, projects, setActiveProjectColor]);

  return (
    <Suspense fallback="loading">
      {!isMobileSize && <GridLines activeProjectColor={activeProjectColor} />}
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <ProjectPreview
              key={project.projectId}
              project={project}
              translation={translation}
            />
          );
        })}
      </div>
    </Suspense>
  );
};

export default Home;
