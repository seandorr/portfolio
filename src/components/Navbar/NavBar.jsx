/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import colors from "../../styles/_colors.scss";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./navbar.scss";

const NavBar = (props) => {
  const {
    activeLanguage,
    handleOnClickSpanishBtn,
    handleOnClickEnglishBtn,
    activeProjectColor,
  } = props;

  const { translation } = useTranslation();

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
        <NavLink to="/" className="logo" css={logoStyles}>
          Sean Dorr
        </NavLink>
        <div className="nav-items-container">
          <NavLink
            to="/about"
            className="nav-item link nav-link"
            activeClassName="active"
          >
            {translation("navbar.about")}
          </NavLink>
          <div className="nav-item btn-container">
            <button
              className={`translation-btn ${
                activeLanguage === "spanish" ? "active" : ""
              }`}
              onClick={handleOnClickSpanishBtn}
            >
              es
            </button>
            <button
              className={`translation-btn ${
                activeLanguage === "english" ? "active" : ""
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
