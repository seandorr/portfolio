/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="logo" css={logoStyles}>
          Sean Dorr
        </Link>
        <div className="nav-items-container">
          <Link to="/about" className="nav-item link nav-link">
            {translation("navbar.about")}
          </Link>
          <Link to="/contact" className="nav-item link nav-link">
            {translation("navbar.contact")}
          </Link>
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
