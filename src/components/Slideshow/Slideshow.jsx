import React, { useState } from "react";
import PropTypes from "prop-types";
import "./slideshow.scss";

const Slideshow = ({
  className,
  imageArray,
  projectDirectory,
  title,
  projectColor,
}) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handlePreviousButton = () => {
    if (activeImgIndex === 0) {
      setActiveImgIndex(imageArray.length - 1);
    } else {
      setActiveImgIndex(activeImgIndex - 1);
    }
  };

  const handleNextButton = () => {
    if (imageArray.length - 1 === activeImgIndex) {
      setActiveImgIndex(0);
    } else {
      setActiveImgIndex(activeImgIndex + 1);
    }
  };

  return (
    <div
      className={`${className} slideshow-container`}
      style={{ border: `4px solid ${projectColor}` }}
    >
      {title && (
        <div
          className="slideshow-title"
          style={{ backgroundColor: projectColor }}
        >
          {title}
        </div>
      )}
      <button
        className="slideshow-button previous"
        onClick={handlePreviousButton}
        style={{ color: projectColor }}
      >
        &lt;
      </button>
      <img
        className="slideshow-img"
        src={`images/${projectDirectory}/${imageArray[activeImgIndex]}`}
      />
      <button
        className="slideshow-button next"
        onClick={handleNextButton}
        style={{ color: projectColor }}
      >
        &gt;
      </button>
    </div>
  );
};

Slideshow.propTypes = {
  className: PropTypes.string,
  imageArray: PropTypes.array.isRequired,
  projectDirectory: PropTypes.string,
  title: PropTypes.string,
};

Slideshow.defaultProps = {
  className: "",
  projectDirectory: undefined,
  title: undefined,
};

export default Slideshow;
