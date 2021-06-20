import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useTranslation from "../../utils/customHooks/useTranslation";
import colors from "../../styles/_colors.scss";
import "./page-not-found.scss";

const PageNotFound = ({ setActiveProjectColor }) => {
  useEffect(() => {
    setActiveProjectColor(colors.darkColor);
  }, [setActiveProjectColor]);

  const { translation } = useTranslation();
  return (
    <div className="four-oh-four-container">
      <h1 className="four-oh-four">404</h1>
      <h2>{translation("404.message")}</h2>
      <Link to="/" className="link return-home-link">
        {translation("404.return")}
      </Link>
    </div>
  );
};

PageNotFound.propTypes = {
  setActiveProjectColor: PropTypes.func.isRequired,
};

export default PageNotFound;
