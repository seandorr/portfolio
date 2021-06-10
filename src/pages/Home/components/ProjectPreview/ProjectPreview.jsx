import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FilterTags from "../../../../components/FilterTags/FilterTags";
import useTranslation from "../../../../utils/customHooks/useTranslation";
import Loading from "../../../../components/Loading/Loading";

const ProjectPreviewImg = React.lazy(() =>
  import("../ProjectPreviewImg/ProjectPreviewImg")
);

const ProjectPreview = ({ project }) => {
  const {
    projectId,
    projectName,
    projectImage,
    projectComponent,
    projectLink,
  } = project;

  const { translation } = useTranslation();

  return (
    <div
      className={`content-grid project-preview ${projectName}`}
      id={`proj-${projectId}`}
    >
      <div className="content" id="col-left">
        {projectImage && (
          <Loading>
            <ProjectPreviewImg
              projectLink={projectLink}
              projectImage={projectImage}
              projectName={projectName}
            />
          </Loading>
        )}
        {projectComponent && projectComponent}
      </div>
      <div className="content" id="col-right">
        <h1>{translation(`project.${projectName}.title`)}</h1>
        <FilterTags projectName={projectName} location="home" />
        <Link to={projectLink} className="link project-link">
          {translation(`viewButton`)}
        </Link>
      </div>
    </div>
  );
};

ProjectPreview.propTypes = {
  projectId: PropTypes.number,
  projectImage: PropTypes.string,
  projectTags: PropTypes.array,
  projectLink: PropTypes.string,
  projectComponent: PropTypes.object,
};

ProjectPreview.defaultProps = {
  projectId: undefined,
  projectImage: undefined,
  projectTags: undefined,
  projectLink: undefined,
  projectComponent: undefined,
};

export default ProjectPreview;
