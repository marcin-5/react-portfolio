import homeEN from "@/locales/en/home.json";
import homePL from "@/locales/pl/home.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        home: homeEN,
      },
      pl: {
        home: homePL,
      },
    },
    fallbackLng: "en",
  });
