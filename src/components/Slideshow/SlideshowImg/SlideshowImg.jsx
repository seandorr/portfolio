import React from "react";
import PropTypes from "prop-types";
import useTranslation from "../../../utils/customHooks/useTranslation";

const SlideshowImg = ({
  projectDirectory,
  imageArray,
  activeImgIndex,
  projectColor,
}) => {
  const { translation } = useTranslation();

  return (
    <img
      className="slideshow-img"
      src={`images/${projectDirectory}/${imageArray[activeImgIndex].image}`}
      alt={translation(imageArray[activeImgIndex].alt)}
      style={{ border: `3px solid ${projectColor}` }}
    />
  );
};

SlideshowImg.propTypes = {
  projectDirectory: PropTypes.string.isRequired,
  imageArray: PropTypes.array.isRequired,
  activeImgIndex: PropTypes.number,
  projectColor: PropTypes.string.isRequired,
};

SlideshowImg.defaultProps = {
  activeImgIndex: 0,
};

export default SlideshowImg;
