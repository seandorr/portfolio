/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import "./targetbase.scss";

const Targetbase = () => {
  const backgroundImg = `${
    process.env.PUBLIC_URL + `images/targetbase/background_pattern.svg`
  }`;

  const heroImgPattern = css`
    background-image: url(${backgroundImg});
  `;

  return (
    <div className="targetbase-project">
      <nav className="navbar">
        <a href="#top">
          <img
            className="logo"
            src="images/targetbase/tb_logo.svg"
            alt="logo"
            height="60px"
          />
        </a>
        <ul>
          <li>
            <a href="#" className="underline">
              MENU
            </a>
          </li>
        </ul>
      </nav>
      <section id="hero-image" className="section" css={heroImgPattern}>
        <h1 className="hero-text">
          intelligence
          <br /> in action
        </h1>
      </section>
      <img
        className="data-icon"
        src="images/targetbase/data_icon.svg"
        width="750px"
        height="auto"
      />
    </div>
  );
};

export default Targetbase;
