import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import faTranslation from "./public/locales/fa/common.json";
import enTranslation from "./public/locales/en/common.json";
import arTranslation from "./public/locales/ar/common.json";

i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: faTranslation },
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
