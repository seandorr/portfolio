import React, { useState } from "react";
import PropTypes from "prop-types";
import SlideshowImg from "./SlideshowImg/SlideshowImg";
import "./slideshow.scss";

const Slideshow = ({
  className,
  imageArray,
  projectDirectory,
  title,
  projectColor,
}) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const imageArrayLength = imageArray.length;
  const hasMoreThanOneImage = imageArrayLength > 1;

  const handlePreviousButton = () => {
    if (activeImgIndex === 0) {
      setActiveImgIndex(imageArrayLength - 1);
    } else {
      setActiveImgIndex(activeImgIndex - 1);
    }
  };

  const handleNextButton = () => {
    if (imageArrayLength - 1 === activeImgIndex) {
      setActiveImgIndex(0);
    } else {
      setActiveImgIndex(activeImgIndex + 1);
    }
  };

  return (
    <div className={`${className} slideshow-container`}>
      {title && (
        <div
          className="slideshow-title"
          style={{ color: projectColor, border: `3px solid ${projectColor}` }}
        >
          {title}
        </div>
      )}
      {hasMoreThanOneImage && (
        <button
          className="slideshow-button previous"
          onClick={handlePreviousButton}
          style={{ color: projectColor, border: `3px solid ${projectColor}` }}
        >
          &lt;
        </button>
      )}
      <SlideshowImg
        projectDirectory={projectDirectory}
        imageArray={imageArray}
        activeImgIndex={activeImgIndex}
        projectColor={projectColor}
      />
      {hasMoreThanOneImage && (
        <button
          className="slideshow-button next"
          onClick={handleNextButton}
          style={{ color: projectColor, border: `3px solid ${projectColor}` }}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

Slideshow.propTypes = {
  className: PropTypes.string,
  imageArray: PropTypes.array.isRequired,
  projectDirectory: PropTypes.string.isRequired,
  title: PropTypes.string,
  projectColor: PropTypes.string.isRequired,
};

Slideshow.defaultProps = {
  className: "",
  title: undefined,
};

export default Slideshow;
