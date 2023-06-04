import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import transEn from "./lang/en.json";
import transFr from "./lang/fr.json";
import transCn from "./lang/cn.json";


const resources = {
  en: {
    translation: transEn
  },
  fr: {
    translation: transFr
  },
  cn: {
    translation: transCn
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "fr","cn"],
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["cookie", "localStorage", "sessionStorage"],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
