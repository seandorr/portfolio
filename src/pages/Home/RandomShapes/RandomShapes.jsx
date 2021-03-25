import React, { useState, useEffect } from "react";
import { GenerateRandomShapes } from "./components/GenerateRandomShapes";
import "./random-shapes.scss";

const RandomShapesPreview = ({ type }) => {
  const [, setReloadComponent] = useState(undefined);

  useEffect(() => {
    setReloadComponent({});
  }, []);

  return (
    <div className="random-shapes__container">
      <GenerateRandomShapes type={type} />
    </div>
  );
};

export default RandomShapesPreview;
