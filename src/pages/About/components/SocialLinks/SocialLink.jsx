import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({ link, children }) => {
  return (
    <a
      className="social-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.objectOf(Object),
    PropTypes.arrayOf(Array),
  ]),
};

SocialLink.defaultProps = {
  children: undefined,
};

export default SocialLink;
