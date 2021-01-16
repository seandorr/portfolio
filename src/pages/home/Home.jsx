import React, { Suspense } from "react";
import ProjectPreview from "../../components/projectPreview/ProjectPreview";
import projectData from "./utils/constants/projectData";
import GetProjectColor from "../../utils/functions/GetProjectColor";
import "./home.scss";

const Home = (props) => {
  const { translation } = props;

  return (
    <Suspense fallback="loading">
      {Object.values(projectData).map((projects) => {
        const { projectName } = projects;
        GetProjectColor(projectName);
        return <ProjectPreview projects={projects} translation={translation} />;
      })}
    </Suspense>
  );
};

export default Home;
