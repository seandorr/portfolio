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
        <h2 className={styles.recipesTitle}>Reactive sandbox</h2>
        <p>
          The app is still a work in progress, but there is already
          functionality to add, duplicate, remove, and drag and drop recipes.
        </p>
        <Week />
      </div>
    </div>
  );
};
