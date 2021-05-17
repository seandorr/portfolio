import { useTranslation as useTranslationI18 } from "react-i18next";

const useTranslation = () => {
  const { t: translation, i18n } = useTranslationI18();
  return { translation, i18n };
};

export default useTranslation;
