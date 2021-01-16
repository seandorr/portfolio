import React from "react";
import { GenerateRandomShapes } from "./components/GenerateRandomShapes";
import "./random-shapes.scss";

const RandomShapesPreview = () => {
  return (
    <div className="random-shapes__container">
      <GenerateRandomShapes projectPreview />
    </div>
  );
};

export default RandomShapesPreview;
