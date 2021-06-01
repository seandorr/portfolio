/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./targetbase.scss";

const Targetbase = () => {
  const { translation } = useTranslation();

  const backgroundImg = `${
    process.env.PUBLIC_URL + `images/targetbase/background_pattern.svg`
  }`;

  const heroImgPattern = css`
    background-image: url(${backgroundImg});
  `;

  return (
    <div className="targetbase-project">
      <nav className="navbar">
        <img
          className="logo"
          src="images/targetbase/tb_logo.svg"
          alt={translation("project.targetbase.imageAlts.logo")}
          height="60px"
        />

        <ul>
          <li>MENU</li>
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
        alt={translation("project.targetbase.imageAlts.data")}
        width="750px"
        height="auto"
      />
    </div>
  );
};

export default Targetbase;
