import React from "react";
import GeminiLogo from "./assets/gemini-logo.svg";
import Hamburger from "./assets/hamburger.svg";
import "./gemini-hero.scss";

const Gemini = () => {
  return (
    <div className="gemini-container">
      <nav className="gemini-nav-bar" id="nav-bar">
        <div className="logo">
          <img src={GeminiLogo} width="auto" height="60px" />
        </div>
        <ul className="nav-bar-ul" id="nav-bar-ul">
          <li className="nav-bar-li">Services</li>
          <li className="nav-bar-li">About</li>
          <li className="nav-bar-li" id="quote">
            Get Quote
          </li>
        </ul>
        <div className="nav-bar-icon">
          <img src={Hamburger} />
        </div>
      </nav>
      <div className="gemini-hero">
        <div className="gemini-hero-container">
          <div className="gemini-hero-img">
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
