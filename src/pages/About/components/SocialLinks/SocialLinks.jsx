import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "../../utils/constants/socialLinks";
import generateRandomKey from "../../../../utils/functions/generateRandomKey";
import "./social-links.scss";

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
        return (
          <SocialLink link={link} key={generateRandomKey()}>
            {icon}
          </SocialLink>
        );
      })}
    </div>
  );
};

export default SocialLinks;
