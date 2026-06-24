import React from "react";
import { Helmet } from "react-helmet";
import styles from "./ascii.module.scss";
import useTranslation from "../../utils/customHooks/useTranslation";
import generateRandomKey from "../../utils/functions/generateRandomKey";

export const Ascii = () => {
  const { translation } = useTranslation();

  const descriptionBullets = translation(`project.ascii.app.description2`, {
    returnObjects: true,
  });
  return (
    <div>
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.ascii")}</title>
      </Helmet>
      <div className={styles.asciiMainContainer}>
        <h2 className={styles.asciiTitle}>
          {translation("project.ascii.branding.title")}
        </h2>
        <p>{translation("project.ascii.branding.description1")}</p>
        <br />
        <p>{translation("project.ascii.branding.description2")}</p>
        <div className={styles.asciiBrandingContainer}>
          <img
            className={styles.asciiLogo}
            src="/images/ascii/ascii-logo-alt.svg"
            alt="ASCII app - customer intelligence"
          />
          <div className={styles.asciiBrandingColorContainer}>
            <div
              className={styles.asciiBrandingColor}
              id={styles["branding-color-1"]}
            >
              #1e262c
            </div>
            <div
              className={styles.asciiBrandingColor}
              id={styles["branding-color-2"]}
            >
              #22ffcc
            </div>
            <div
              className={styles.asciiBrandingColor}
              id={styles["branding-color-3"]}
            >
              #f39500
            </div>
          </div>
        </div>
      </div>
      <div className={styles.asciiMainContainer}>
        <h2 className={styles.asciiTitle}>
          {translation("project.ascii.design.title")}
        </h2>
        <p>{translation("project.ascii.design.description1")}</p>
        <br />
        <p>{translation("project.ascii.design.description2")}</p>
        <img
          className={styles.asciiUi}
          src="/images/ascii/ascii-ui.jpg"
          alt="ASCII UI design"
        />
      </div>
      <div className={styles.asciiMainContainer}>
        <h2 className={styles.asciiTitle}>
          {translation("project.ascii.app.title")}
        </h2>
        <p>{translation("project.ascii.app.description1")}</p>
        <br />
        <ul className={styles.projectAboutDetailsList}>
          {Object.values(descriptionBullets).map((bullet) => {
            return <li key={generateRandomKey()}>{bullet}</li>;
          })}
        </ul>
        <img
          className={styles.asciiApp}
          src="/images/ascii/ascii-app.png"
          alt="ASCII app - customer intelligence"
        />
      </div>
    </div>
  );
};
