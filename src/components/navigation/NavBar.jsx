import React from "react";
import "./navbar.scss";

const NavBar = (props) => {
  const {
    activeTranslationBtn,
    handleOnClickSpanishBtn,
    handleOnClickEnglishBtn,
    translation,
    projectColor,
  } = props;

  return (
    <div id="navbar">
      <div className="navbar-content">
        <a className="logo" style={{ backgroundColor: projectColor }} href="/">
          Sean Dorr
        </a>
        <div className="nav-items-container">
          <a className="nav-item" href="/about">
            {translation("navbar.about")}
          </a>
          <a className="nav-item" href="/contact">
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
