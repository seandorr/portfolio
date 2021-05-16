import React from "react";
import PropTypes from "prop-types";
import "./nominapress.scss";
import { facialRecogImages } from "./utils/facialRecogSliderImages";
import Slideshow from "../../components/Slideshow/Slideshow";

const Nominapress = ({ projectColor }) => {
  return (
    <Slideshow
      imageArray={facialRecogImages}
      projectDirectory="nominapress"
      title="Facial Recog"
      projectColor={projectColor}
    />
  );
};

Nominapress.propTypes = {};

export default Nominapress;
