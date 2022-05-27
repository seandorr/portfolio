/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useTranslation from "../../../../utils/customHooks/useTranslation";
import "./gemini-hero.scss";

const Gemini = () => {
  const { translation } = useTranslation();

  const backgroundImg = `${process.env.PUBLIC_URL + `images/gemini/hero.jpg`}`;

  const heroImg = css`
    background-image: url(${backgroundImg});
  `;

  return (
    <div className="gemini-container">
      <nav className="gemini-nav-bar" id="nav-bar">
        <div className="logo">
          <img
            src="images/gemini/gemini-logo.svg"
            alt={translation("project.gemini.imageAlts.logo")}
            width="auto"
            height="60px"
          />
        </div>
        <ul className="nav-bar-ul" id="nav-bar-ul">
          <li className="nav-bar-li">Services</li>
          <li className="nav-bar-li">About</li>
          <li className="nav-bar-li" id="quote">
            Get Quote
          </li>
        </ul>
        <div className="nav-bar-icon">
          <img
            src="images/gemini/hamburger.svg"
            alt={translation("project.gemini.imageAlts.menu")}
          />
        </div>
      </nav>
      <div className="gemini-hero">
        <div className="gemini-hero-container">
          <div className="gemini-hero-img" css={heroImg}>
            <div className="gemini-hero-img-content-container">
              <h1>
                Wave Away the Worries.
                <br />
                Choose the Right CVO.
              </h1>
              <span className="gemini-btn">See What We Offer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gemini;
