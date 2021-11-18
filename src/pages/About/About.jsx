import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FilterTags from "../../components/FilterTags/FilterTags";
import colors from "../../styles/_colors.scss";
import { linkFadeInOut } from "./utils/constants/linkFadeInOut";
import SocialLinks from "./SocialLinks/SocialLinks";
import useTranslation from "../../utils/customHooks/useTranslation";
import Loading from "../../components/Loading/Loading";
import "./about.scss";

const Headshot = React.lazy(() => import("./Headshot/Headshot"));

const About = ({ setActiveProjectColor }) => {
  const [linkHover, setLinkHover] = useState(false);
  const [currentWork, setCurrentWork] = useState(undefined);
  useEffect(() => {
    setActiveProjectColor(colors.aboutColor);
    setCurrentWork("basf");
  }, [setActiveProjectColor]);

  const { translation } = useTranslation();

  const currenWorkLink = () => {
    return (
      <a
        className="current-client-link"
        target="_blank"
        href="https://www.basf.com/es/es.html"
        onMouseEnter={() => setLinkHover(true)}
        onMouseLeave={() => setLinkHover(false)}
      >
        {translation("about.currentWorkLink")}
        {linkHover && currentWork !== "basf" && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={linkFadeInOut}
            className="current-client-tooltip-container"
          >
            <div className="current-client-tooltip">
              <img
                className="current-client-tooltip-img"
                src="images/nominapress/facial-recog-login.jpg"
                alt={translation("about.nominapressImageAlt")}
              />
            </div>
          </motion.div>
        )}
      </a>
    );
  };

  return (
    <div className="about-container max-width">
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.about")}</title>
      </Helmet>
      <div className="about-container-grid">
        <Loading>
          <Headshot />
        </Loading>
        <div className="about-grid-item about">
          <FilterTags location="about" />
          <div className="about-paragraph">
            <span>{translation("about.paragraphPart1")} </span>
            <span className="work-link-text">{currenWorkLink()}</span>
            <span>{translation("about.paragraphPart2")}</span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default About;
