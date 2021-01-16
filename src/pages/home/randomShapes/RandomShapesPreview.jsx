import React, { useState, useEffect } from "react";
import { GenerateRandomShapes } from "./components/GenerateRandomShapes";
import "./random-shapes.scss";

const RandomShapesPreview = () => {
  const [, setReloadComponent] = useState(undefined);

  useEffect(() => {
    setReloadComponent({});
  }, []);

  return (
    <div className="random-shapes__container">
      <GenerateRandomShapes projectPreview />
    </div>
  );
};

export default RandomShapesPreview;
