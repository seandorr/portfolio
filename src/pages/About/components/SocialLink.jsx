import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({ link, children }) => {
  return (
    <a className="social-link" href={link} target="_blank">
      {children}
    </a>
  );
};

SocialLink.propTypes = {};

export default SocialLink;
