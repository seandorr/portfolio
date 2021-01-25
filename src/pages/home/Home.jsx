import React, { useEffect, Suspense } from "react";
import ProjectPreview from "./projectPreview/ProjectPreview";
import useWindowSize from "../../utils/customHooks/useWindowSize";
import useScrollDirection from "../../utils/customHooks/useScrollDirection";
import "./home.scss";

const Home = ({ translation, projects, setActiveProjectColor }) => {
  const getScrollDirection = useScrollDirection();
  const getWindowHeight = useWindowSize().height;
  const getWindowWidth = useWindowSize().width;

  let calculatedWindowHeight;
  if (getScrollDirection === "down" && getWindowWidth >= 768) {
    calculatedWindowHeight = getWindowHeight - 100;
  } else if (getScrollDirection === "up" && getWindowWidth >= 768) {
    calculatedWindowHeight = getWindowHeight - 200;
  } else {
    calculatedWindowHeight = 800;
  }

  useEffect(() => {
    const handleScroll = () => {
      const indexOfProjectCurrentlyInView = Math.floor(
        window.scrollY / calculatedWindowHeight
      );

      if (indexOfProjectCurrentlyInView < projects.length) {
        setActiveProjectColor(
          projects[indexOfProjectCurrentlyInView].projectColor
        );
      } else {
        const lastProject = projects.length - 1;
        setActiveProjectColor(projects[lastProject].projectColor);
      }
    };

    const handleProjectColors = () => {
      if (window.scrollY <= 1) {
        setActiveProjectColor(projects[0].projectColor);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    handleProjectColors();
  }, [calculatedWindowHeight, projects, setActiveProjectColor]);

  return (
    <Suspense fallback="loading">
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
