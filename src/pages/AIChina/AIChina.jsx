import { Helmet } from "react-helmet";
import styles from "./ai-in-china.module.scss";
import useTranslation from "../../utils/customHooks/useTranslation";
import { UISection, UserJourneySection } from "./components/AIChinaSections";

export const AIChina = () => {
  const { translation } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.aiInChina")}</title>
      </Helmet>
      <div className={styles.aiChinaMainContainer}>
        <h2 className={styles.aiChinaTitle}>
          {translation("project.aiInChina.ux.title")}
        </h2>
        <UserJourneySection
          title={translation("project.aiInChina.ux.asIs.title")}
          src="https://embed.figma.com/board/MtVaji9lXU9Owg67nOr9sv/As-is-User-Journey?node-id=0-1&embed-host=share"
          description={translation("project.aiInChina.ux.asIs.description")}
        />
        <UserJourneySection
          title={translation("project.aiInChina.ux.toBe.title")}
          description={translation("project.aiInChina.ux.toBe.description")}
        />
        <div className={styles.keyContainer}>
          <div className={styles.key}></div>
          <span>{translation("project.aiInChina.ux.key")}</span>
        </div>
        <UserJourneySection
          type="proposal"
          title={translation("project.aiInChina.ux.proposalA.title")}
          src="https://embed.figma.com/board/egZNhetwWn7Rgr5r5IVNip/To-be--Proposal-A-?embed-host=share"
          description={translation(
            "project.aiInChina.ux.proposalA.description",
          )}
        />
        <UserJourneySection
          type="proposal"
          title={translation("project.aiInChina.ux.proposalB.title")}
          src="https://embed.figma.com/board/xVAVuFmokOyuTJ1HPW81pU/To-be--Proposal-B-?node-id=0-1&embed-host=share"
          description={translation(
            "project.aiInChina.ux.proposalB.description",
          )}
        />
        <UserJourneySection
          type="proposal"
          title={translation("project.aiInChina.ux.proposalC.title")}
          src="https://embed.figma.com/board/ZGMoxsf4vePWuI7LDhaaFm/To-be--Proposal-C-?embed-host=share"
          description={translation(
            "project.aiInChina.ux.proposalC.description",
          )}
        />
      </div>
      <div className={styles.aiChinaMainContainer}>
        <h2 className={styles.aiChinaTitle}>
          {translation("project.aiInChina.ui.title")}
        </h2>
        <UISection
          title={translation("project.aiInChina.ui.proposalA.title")}
          img={[
            {
              img: "workspace.jpg",
              description: translation(
                "project.aiInChina.ui.proposalA.description",
              ),
            },
          ]}
        />
        <UISection
          title={translation("project.aiInChina.ui.proposalB.title")}
          img={[
            {
              img: "product-security-level.jpg",
              description: translation(
                "project.aiInChina.ui.proposalB.description1",
              ),
            },
            {
              img: "product-resources.jpg",
              description: translation(
                "project.aiInChina.ui.proposalB.description2",
              ),
            },
          ]}
        />
      </div>
    </>
  );
};
