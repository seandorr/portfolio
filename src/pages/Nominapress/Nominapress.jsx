import React, { useState } from "react";
import PropTypes from "prop-types";
import "./nominapress.scss";
import { facialRecogImages } from "./utils/facialRecogSliderImages";

const Nominapress = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const allImages = facialRecogImages;

  const handleNextButton = () => {
    if (allImages.length - 1 === activeImgIndex) {
      setActiveImgIndex(0);
    } else {
      setActiveImgIndex(activeImgIndex + 1);
    }
  };

  return (
    <div className="nominapress-container">
      <img
        className="nominapress-img"
        src={`images/nominapress/${facialRecogImages[activeImgIndex]}`}
      />
      <button onClick={handleNextButton}>next</button>
    </div>
  );
};

Nominapress.propTypes = {};

export default Nominapress;
