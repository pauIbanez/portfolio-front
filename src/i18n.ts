import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next.use(I18NextHttpBackend);
i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/i18n/{{lng}}.json",
  },
});

export default i18next;
