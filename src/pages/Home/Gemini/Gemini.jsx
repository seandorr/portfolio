import React from "react";
import PropTypes from "prop-types";
import "./gemini.scss";
import GeminiLogo from "./assets/gemini-logo.svg";
import Hamburger from "./assets/hamburger.svg";

const Gemini = (props) => {
  return (
    <>
      <nav className="gemini-nav-bar" id="nav-bar">
        <a href="#" className="logo">
          <img src={GeminiLogo} width="auto" height="60px" />
        </a>
        <ul className="nav-bar-ul" id="nav-bar-ul">
          <li className="nav-bar-li">
            <a className="" href="javascript:void(0)">
              Services
            </a>
          </li>
          <li className="nav-bar-li">
            <a className="" href="javascript:void(0)">
              About
            </a>
          </li>
          <li className="nav-bar-li" id="quote">
            <a className="" href="javascript:void(0)">
              Get Quote
            </a>
          </li>
        </ul>
        <a
          href="javascript:void(0);"
          className="nav-bar-icon"
          onclick="mobileNavBar()"
        >
          <img src={Hamburger} />
        </a>
        <a
          href="javascript:void(0);"
          className="close-btn"
          onclick="mobileNavBar()"
        >
          +
        </a>
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
              <a href="javascript:void(0)" className="gemini-btn">
                See What We Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Gemini.propTypes = {};

export default Gemini;
