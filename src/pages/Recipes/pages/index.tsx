import { Helmet } from "react-helmet";
import useTranslation from "../../../utils/customHooks/useTranslation";
import styles from "./recipes.module.scss";
import Week from "./week";

export const Recipes = () => {
  const { translation } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.recipeApp")}</title>
      </Helmet>
      <div className={styles.recipesMainContainer}>
        <h2 className={styles.recipesTitle}>
          {translation("project.recipeApp.sandbox.title")}
        </h2>
        <p>{translation("project.recipeApp.sandbox.description")}</p>
        <Week />
      </div>
    </div>
  );
};
