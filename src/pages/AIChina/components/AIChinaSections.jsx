import React from "react";
import styles from "../ai-in-china.module.scss";
import useWindowSize from "../../../utils/customHooks/useWindowSize";

export const UserJourneySection = ({ type, title, src, description }) => {
  const browserWidth = useWindowSize().width;
  const smallScreen = React.useMemo(() => browserWidth < 768, [browserWidth]);
  const shouldShowIframe = Boolean(src) && !smallScreen;

  const renderPreview = () => {
    if (!src) return null;

    if (shouldShowIframe) {
      return (
        <iframe
          title={title}
          className={styles.aiChinaFigmaEmbed}
          src={src}
          allowFullScreen
        ></iframe>
      );
    }

    return (
      <div className={styles.placeholder}>
        <span className={styles.placeholderText}>
          Figma preview will appear here on larger screens.
        </span>
      </div>
    );
  };

  return (
    <section className={styles.userJourneySection}>
      {type === "proposal" ? (
        <h4 className={styles.aiChinaSubtitle}>{title}:</h4>
      ) : (
        <h3 className={styles.aiChinaSubtitle}>{title}:</h3>
      )}
      {renderPreview()}

      <p className={styles.aiChinaDescription}>{description}</p>
    </section>
  );
};

export const UISection = ({ title, img, description }) => {
  return (
    <section className={styles.uiSection}>
      <h3 className={styles.aiChinaSubtitle}>{title}:</h3>
      {img &&
        img.map(({ title, img, description }) => (
          <div key={title}>
            <img
              src={`/images/aiChina/${img}`}
              alt="AI in China High Fidelity Prototype"
              className={styles.aiChinaImage}
            />
            <p className={styles.aiChinaDescription}>{description}</p>
          </div>
        ))}
    </section>
  );
};
