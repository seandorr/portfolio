import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./nominapress.scss";
import {
  facialRecogValidationImages,
  facialRecogLoginImage,
} from "./utils/constants/facialRecogImages";
import { Slideshow } from "../../components/Slideshow";
import useTranslation from "../../utils/customHooks/useTranslation";

export const Nominapress = ({ projectColor }) => {
  const { translation } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.nominapress")}</title>
      </Helmet>
      <div className="nominapress-grid">
        <Slideshow
          className="nominapress-grid-item"
          imageArray={facialRecogValidationImages}
          projectDirectory="nominapress"
          title={translation(
            "project.nominapress.facialRecogValidationSlider.title",
          )}
          projectColor={projectColor}
        />
        <Slideshow
          className="nominapress-grid-item"
          imageArray={facialRecogLoginImage}
          projectDirectory="nominapress"
          title={translation(
            "project.nominapress.facialRecogLoginSlider.title",
          )}
          projectColor={projectColor}
        />
      </div>
    </div>
  );
};

Nominapress.propTypes = {
  projectColor: PropTypes.string.isRequired,
};

export default Nominapress;
