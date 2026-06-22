import React from "react";
import styles from "./ascii.module.scss";
import useTranslation from "../../utils/customHooks/useTranslation";

export const Ascii = () => {
  const { translation } = useTranslation();
  return (
    <div>
      <div className={styles.asciiMainContainer}>
        <img
          className={styles.asciiLogo}
          src="/images/ascii/ascii-logo-alt.svg"
          alt="ASCII app - customer intelligence"
        />
        <h2 className={styles.asciiTitle}>
          {translation("project.ascii.branding.title")}
        </h2>
        <p>{translation("project.ascii.branding.description1")}</p>
        <br />
        <p>{translation("project.ascii.branding.description2")}</p>
      </div>
      <div className={styles.asciiMainContainer}>
        <img
          className={styles.asciiUi}
          src="/images/ascii/ascii-ui.jpg"
          alt="ASCII UI design"
        />
        <h2 className={styles.asciiTitle}>
          {translation("project.ascii.design.title")}
        </h2>
        <p>{translation("project.ascii.design.description1")}</p>
        <br />
        <p>{translation("project.ascii.design.description2")}</p>
      </div>
      <div className={styles.asciiMainContainer}>
        <img
          className={styles.asciiApp}
          src="/images/ascii/ascii-app.png"
          alt="ASCII app - customer intelligence"
        />
        <h2 className={styles.asciiTitle}>
          {translation("project.ascii.app.title")}
        </h2>
        <p>{translation("project.ascii.app.description1")}</p>
        <br />
        <p>{translation("project.ascii.app.description2")}</p>
      </div>
    </div>
  );
};
