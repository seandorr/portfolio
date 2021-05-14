import React from "react";
import PropTypes from "prop-types";
import TargetbaseLogo from "./assets/tb_logo.svg";
import DataIcon from "./assets/data_icon.svg";
import "./targetbase.scss";

const Targetbase = (props) => {
  return (
    <div className="targetbase-project">
      <nav className="navbar">
        <a href="#top">
          <img className="logo" src={TargetbaseLogo} alt="logo" height="60px" />
        </a>
        <ul>
          <li>
            <a href="#services" className="underline">
              services
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              work
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              pov
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              news
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              about
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              contact
            </a>
          </li>
        </ul>
      </nav>
      <section id="hero-image" className="section">
        <h1 className="hero-text">
          intelligence
          <br /> in action
        </h1>
        <div id="wrapper">
          <img
            className="data-icon"
            src={DataIcon}
            width="750px"
            height="auto"
          />
        </div>
      </section>
    </div>
  );
};

Targetbase.propTypes = {};

export default Targetbase;
