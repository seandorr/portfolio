import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./detailed-project.scss";

const DetailedProject = ({ translation, project, setActiveProjectColor }) => {
  const { projectName, projectColor, projectImage } = project;
  const [margins, setMargins] = useState(50);
  setActiveProjectColor(projectColor);

  useEffect(() => {
    const handleMargins = () => {
      setMargins(window.scrollY);
      console.log("margins", margins);
    };
    window.addEventListener("scroll", handleMargins);

    return () => {
      window.removeEventListener("scroll", handleMargins);
    };
  }, [margins]);

  const getStyles = {
    margin: `0 ${margins}px`,
    backgroundColor: projectColor,
  };

  const aboutStyles = {
    margin: `0 ${margins}px`,
    backgroundColor: projectColor,
  };

  return (
    <div className="page-container" style={aboutStyles}>
      <div className="about-project-container" >
        <h1>{translation(`project.${projectName}.title`)}</h1>
      </div>
    </div>
    // <div className="project-details-container" style={getStyles}>
    //   <h1>{translation(`project.${projectName}.title`)}</h1>
    //   {projectImage && (
    //     <div className="project-details-image" style={getStyles}>
    //       <img
    //         className="proj-img"
    //         src={`/images/${projectImage}`}
    //         alt={translation(`project.${projectName}.imageAlt`)}
    //       />
    //     </div>
    //   )}
    // </div>
  );
};

DetailedProject.propTypes = {
  translation: PropTypes.func,
  project: PropTypes.arrayOf(Object).isRequired,
  setActiveProjectColor: PropTypes.func,
};

DetailedProject.defaultProps = {
  translation: undefined,
  setActiveProjectColor: undefined,
};

export default DetailedProject;
