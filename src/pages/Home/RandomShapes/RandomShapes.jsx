import React, { useState, useEffect } from "react";
import { GenerateRandomShapes } from "./components/GenerateRandomShapes";
import "./random-shapes.scss";

const RandomShapesPreview = ({ type }) => {
  const [reloadComponent, setReloadComponent] = useState(undefined);

  useEffect(() => {
    setReloadComponent(true);
  }, []);

  return (
    <div className="random-shapes__container">
      <GenerateRandomShapes type={type} reloadComponent />
    </div>
  );
};

export default RandomShapesPreview;
