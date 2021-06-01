import React from "react";
import PropTypes from "prop-types";
import "./nominapress.scss";
import {
  facialRecogValidationImages,
  facialRecogLoginImage,
} from "./utils/facialRecogImages";
import Slideshow from "../../components/Slideshow/Slideshow";
import useTranslation from "../../utils/customHooks/useTranslation";

const Nominapress = ({ projectColor }) => {
  const { translation } = useTranslation();
  return (
    <div className="nominapress-grid">
      <Slideshow
        className="nominapress-grid-item"
        imageArray={facialRecogValidationImages}
        projectDirectory="nominapress"
        title={translation(
          "project.nominapress.facialRecogValidationSlider.title"
        )}
        projectColor={projectColor}
      />
      <Slideshow
        className="nominapress-grid-item"
        imageArray={facialRecogLoginImage}
        projectDirectory="nominapress"
        title={translation("project.nominapress.facialRecogLoginSlider.title")}
        projectColor={projectColor}
      />
    </div>
  );
};

Nominapress.propTypes = {
  projectColor: PropTypes.string.isRequired,
};

export default Nominapress;
