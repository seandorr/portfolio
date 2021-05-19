import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "../utils/constants/socialLinks";

const SocialLinks = () => {
  const socialLinksArray = Object.values(socialLinks);
  const socialLinksArrayLength = socialLinksArray.length;

  return (
    <div
      className="social-links-container"
      style={{ width: socialLinksArrayLength * 50 }}
    >
      {socialLinksArray.map((socialLink) => {
        const { link, icon } = socialLink;
        return <SocialLink link={link}>{icon}</SocialLink>;
      })}
    </div>
  );
};

export default SocialLinks;
