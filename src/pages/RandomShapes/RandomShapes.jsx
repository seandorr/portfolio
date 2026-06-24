import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import useTranslation from "../../utils/customHooks/useTranslation";
import { GenerateRandomShapes } from "./components/GenerateRandomShapes";
import "./random-shapes.scss";

export const RandomShapes = ({ type }) => {
  const { translation } = useTranslation();
  const [, setReloadComponent] = useState(undefined);

  useEffect(() => {
    setReloadComponent({});
  }, []);

  return (
    <div>
      {type !== "preview" && (
        <Helmet>
          <title>Sean Dorr | {translation("metaTitles.randomShapes")}</title>
        </Helmet>
      )}
      <div className="random-shapes__container">
        <GenerateRandomShapes type={type} />
      </div>
    </div>
  );
};
