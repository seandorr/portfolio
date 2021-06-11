/** @jsx jsx */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import { motion } from "framer-motion";
import FilterTags from "../../components/FilterTags/FilterTags";
import colors from "../../styles/_colors.scss";
import { linkFadeInOut } from "./utils/constants/linkFadeInOut";
import SocialLinks from "./SocialLinks/SocialLinks";
import useTranslation from "../../utils/customHooks/useTranslation";
import Loading from "../../components/Loading/Loading";
import "./about.scss";

const About = ({ setActiveProjectColor }) => {
  const [linkHover, setLinkHover] = useState(false);
  useEffect(() => {
    setActiveProjectColor(colors.aboutColor);
  }, [setActiveProjectColor]);

  const { translation } = useTranslation();

  const backgroundImg = `${
    process.env.PUBLIC_URL + `images/about/sean-headshot.JPG`
  }`;

  const headshotImgStyles = css`
    background-image: url(${backgroundImg});
  `;

  const currenWorkLink = () => {
    return (
      <Link
        className="current-client-link"
        to="/nominapress"
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
                src="images/nominapress/facial-recog-login.jpg"
                alt={translation("about.nominapressImageAlt")}
              />
            </div>
          </motion.div>
        )}
      </Link>
    );
  };

  return (
    <div className="about-container max-width">
      <div className="about-container-grid">
        <Loading>
          <div className="about-grid-item headshot" css={headshotImgStyles} />
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
