/** @jsxImportSource @emotion/react */
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./home.scss";
import { RandomShapes } from "./components/RandomShapes";

const Home = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <Suspense fallback="loading">
      <div className="hero">
        <div className="hero-content__container">
          <RandomShapes />
          {/* <div className="text-container">
            <h1>{t("welcome.title")}</h1>
          </div>
          <div className="btn-container">
            <button onClick={() => i18n.changeLanguage("es")}>es</button>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
          </div> */}
        </div>
      </div>
    </Suspense>
  );
};

Home.propTypes = {};

export default Home;
