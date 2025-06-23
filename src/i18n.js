import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import trTranslation from "./locales/tr/translation.json";

const getUserLanguage = () => {

  const browserLang = navigator.language || navigator.userLanguage;


  if (browserLang.toLowerCase().startsWith('tr')) {
    return 'tr';
  }

  return 'en';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      tr: {
        translation: trTranslation,
      },
    },
    lng: getUserLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
