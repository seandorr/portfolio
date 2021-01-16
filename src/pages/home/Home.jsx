import React, { Suspense } from "react";
import ProjectPreview from "../../components/projectPreview/ProjectPreview";
import "./home.scss";

const Home = (props) => {
  const { translation, projects } = props;

  return (
    <Suspense fallback="loading">
      {projects.map((project) => {
        return <ProjectPreview project={project} translation={translation} />;
      })}
    </Suspense>
  );
};

export default Home;
