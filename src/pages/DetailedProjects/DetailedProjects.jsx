import React from "react";
import PropTypes from "prop-types";
import projectPreviewData from "../Home/utils/constants/projectPreviewData";

const DetailedProjects = (props) => {
  const projects = Object.values(projectPreviewData);
  return projects.map((project) => {
    const {projectId, projectName, projectColor, projectImage} = project;
    return (
      <div>{projectName}</div>
    );
  });
};

DetailedProjects.propTypes = {};

export default DetailedProjects;
