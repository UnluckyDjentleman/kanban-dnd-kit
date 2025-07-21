import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import be from "./be.json";
import de from "./de.json";
import ru from "./ru.json";
import it from "./it.json";
import pl from "./pl.json";
import uk from "./uk.json";
import ja from "./ja.json";
import fr from "./fr.json";
import hr from "./hr.json";
import es from "./es.json"

const resources={
    en: {translation:en},
    be: {translation:be},
    de: {translation:de},
    ru: {translation:ru},
    it: {translation:it},
    pl: {translation:pl},
    uk: {translation:uk},
    ja: {translation:ja},
    fr: {translation:fr},
    hr: {translation:hr},
    es: {translation:es}
}

i18n.use(initReactI18next).init({
    lng:"en",
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: true,
    },
})

export default i18n;