import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n, ...rest } = useTranslation();
  const currentLang = i18n.language;
  const isFa = currentLang === "fa";
  const isEn = currentLang === "en";
  const isAr = currentLang === "ar";
  const direction = i18n.dir();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('lng', language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('lng');

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      const defaultLanguage = 'fa';
      localStorage.setItem('lng', defaultLanguage);
      i18n.changeLanguage(defaultLanguage);
    }
  }, []);

  return { isFa, isEn, isAr, direction, changeLanguage, i18n, ...rest };
};

export default useLanguage;
