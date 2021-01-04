import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./navbar.scss";

const NavBar = () => {
  const [t, i18n] = useTranslation("home");
  const [activeTranslationBtn, setActiveTranslationBtn] = useState("english");

  const handleOnClickSpanishBtn = () => {
    i18n.changeLanguage("es");
    setActiveTranslationBtn("spanish");
  };

  const handleOnClickEnglishBtn = () => {
    i18n.changeLanguage("en");
    setActiveTranslationBtn("english");
  };

  return (
    <div id="navbar">
      <div className="navbar-content">
        <a className="logo" href="/">
          Sean Dorr
        </a>
        <div className="nav-items-container">
          <a className="nav-item" href="/about">
            {t("navbar.about")}
          </a>
          <a className="nav-item" href="/contact">
            {t("navbar.contact")}
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
