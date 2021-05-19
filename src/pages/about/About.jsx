/** @jsx jsx */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import { motion } from "framer-motion";
import FilterTags from "../../components/FilterTags/FilterTags";
import colors from "../../styles/_colors.scss";
import "./about.scss";
import SocialLinks from "./components/SocialLinks";

const About = ({ translation, setActiveProjectColor }) => {
  const [linkHover, setLinkHover] = useState(false);
  useEffect(() => {
    setActiveProjectColor(colors.aboutColor);
  }, [setActiveProjectColor]);

  const backgroundImg = `${
    process.env.PUBLIC_URL + `images/sean-headshot.JPG`
  }`;

  const headshotImgStyles = css`
    background-image: url(${backgroundImg});
  `;

  const linkFadeInOut = {
    initial: {
      opacity: 0,
      y: 20,
      x: "-50%",
    },
    animate: {
      opacity: 1,
      y: 0,
      x: "-50%",
    },
    exit: {
      opacity: 0,
      y: 20,
      x: "-50%",
    },
  };

  const currenWorkLink = () => {
    return (
      <Link
        className="current-client-link"
        to="/nominapress"
        target="_blank"
        onMouseEnter={() => setLinkHover(true)}
        onMouseLeave={() => setLinkHover(false)}
      >
        {translation("about.currentWorkLink")}
        {linkHover && (
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
                src="images/nominapress.svg"
              />
            </div>
          </motion.div>
        )}
      </Link>
    );
  };

  return (
    <div className="about-container">
      <div className="about-container-grid">
        <div className="about-grid-item headshot" css={headshotImgStyles} />
        <div className="about-grid-item about">
          <FilterTags translation={translation} location="about" />

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
