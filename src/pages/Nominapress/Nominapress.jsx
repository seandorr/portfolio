import React from "react";
import PropTypes from "prop-types";
import FacialRecogMgmt from "./assets/facial-recog-mgmt.png";
import "./nominapress.scss";

const Nominapress = () => {
  return (
    <div className="nominapress-container">
      <img className="nominapress-img" src={FacialRecogMgmt} />
    </div>
  );
};

Nominapress.propTypes = {};

export default Nominapress;
