/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Headshot = () => {
  const backgroundImg = `${
    process.env.PUBLIC_URL + `images/about/sean-headshot.jpg`
  }`;

  const headshotImgStyles = css`
    background-image: url(${backgroundImg});
  `;

  return <div className="about-grid-item headshot" css={headshotImgStyles} />;
};

export default Headshot;
