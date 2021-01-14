import React, { Suspense } from "react";
// import { RandomShapes } from "./components/RandomShapes";
import ProjectPreview from "../../components/projectPreview/ProjectPreview";
import projectData from "./utils/constants/projectData";
import "./home.scss";
import GetProjectColor from "../../utils/functions/GetProjectColor";

const Home = (props) => {
  const { translation } = props;

  return (
    <Suspense fallback="loading">
      {/* <div className="hero">
        <div className="hero-content__container">
          <RandomShapes />       
        </div>
      </div> */}
      {Object.values(projectData).map((projects) => {
        const { projectName } = projects;
        GetProjectColor(projectName);
        return <ProjectPreview projects={projects} translation={translation} />;
      })}
    </Suspense>
  );
};

export default Home;
