import React, { useState, useEffect } from "react";
import { GenerateRandomShapes } from "./components/GenerateRandomShapes";
import "./random-shapes.scss";

export const RandomShapes = ({ type }) => {
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
