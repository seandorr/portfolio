import React, { Suspense } from "react";
// import { RandomShapes } from "./components/RandomShapes";
import ProjectPreview from "../../components/projectPreview/ProjectPreview";
import projectData from "./utils/constants/projectData";
import NavBar from "../../components/navigation/NavBar";
import "./home.scss";

const Home = (props) => {
  return (
    <Suspense fallback="loading">
      {/* <div className="hero">
        <div className="hero-content__container">
          <RandomShapes />       
        </div>
      </div> */}
      <NavBar />
      {Object.values(projectData).map((projects) => {
        const {
          projectId,
          projectImage,
          projectImageAlt,
          projectName,
          projectTags,
          projectLink,
        } = projects;
        return (
          <ProjectPreview
            projectId={projectId}
            projectImage={projectImage}
            projectImageAlt={projectImageAlt}
            projectName={projectName}
            projectTags={projectTags}
            projectLink={projectLink}
          />
        );
      })}
    </Suspense>
  );
};

export default Home;
