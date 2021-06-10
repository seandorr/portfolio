import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useTranslation from "../../../../utils/customHooks/useTranslation";

const ProjectPreviewImg = ({ projectLink, projectImage, projectName }) => {
  const { translation } = useTranslation();

  return (
    <Link to={projectLink}>
      <img
        className="proj-img"
        src={`/images/home/${projectImage}`}
        alt={translation(`project.${projectName}.imageAlt`)}
      />
    </Link>
  );
};

ProjectPreviewImg.propTypes = {
  projectLink: PropTypes.string,
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
};

export default ProjectPreviewImg;
