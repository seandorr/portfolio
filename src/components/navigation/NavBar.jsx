/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import colors from "../../styles/_colors.scss";
import "./navbar.scss";

const NavBar = (props) => {
  const {
    activeTranslationBtn,
    handleOnClickSpanishBtn,
    handleOnClickEnglishBtn,
    translation,
    activeProjectColor,
  } = props;

  const logoStyles = css`
    &.logo {
      color: ${colors.lightColor};
      background-color: ${activeProjectColor};

      &:hover {
        color: ${activeProjectColor};
        background-color: ${colors.lightColor};
      }
    }
  `;

  return (
    <div id="navbar">
      <div className="navbar-content">
        <a className="logo" css={logoStyles} href="/">
          Sean Dorr
        </a>
        <div className="nav-items-container">
          <a className="nav-item link nav-link" href="/about">
            {translation("navbar.about")}
          </a>
          <a className="nav-item link nav-link" href="/contact">
            {translation("navbar.contact")}
          </a>
          <div className="nav-item btn-container">
            <button
              className={`translation-btn ${
                activeTranslationBtn === "spanish" ? "active" : ""
              }`}
              onClick={handleOnClickSpanishBtn}
            >
              es
            </button>
            <button
              className={`translation-btn ${
                activeTranslationBtn === "english" ? "active" : ""
              }`}
              onClick={handleOnClickEnglishBtn}
            >
              en
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
