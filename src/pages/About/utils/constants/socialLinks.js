import React from "react";
import GitLabIcon from "@ant-design/icons/GitlabOutlined";
import GitHubIcon from "@ant-design/icons/GithubOutlined";
import DribbbleIcon from "@ant-design/icons/DribbbleOutlined";
import InstagramIcon from "@ant-design/icons/InstagramOutlined";
import LinkedInIcon from "@ant-design/icons/LinkedinOutlined";
import EmailIcon from "@ant-design/icons/SendOutlined";

export const socialLinks = {
  gitlab: {
    link: "https://gitlab.com/seandorr",
    icon: <GitLabIcon />,
  },
  github: {
    link: "https://github.com/seandorr",
    icon: <GitHubIcon />,
  },
  dribbble: {
    link: "https://dribbble.com/SeanDorr",
    icon: <DribbbleIcon />,
  },
  instagram: {
    link: "https://www.instagram.com/sean_dorr/",
    icon: <InstagramIcon />,
  },
  linkenIn: {
    link: "https://www.linkedin.com/in/sean-dorr-42ab6a84/",
    icon: <LinkedInIcon />,
  },
  email: {
    link: "mailto:seanmichael.dorr@gmail.com",
    icon: <EmailIcon />,
  },
};
