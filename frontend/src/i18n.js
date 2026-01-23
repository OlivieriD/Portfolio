import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: {
                nav_projects: "Projects",
                nav_exp: "Experience",
                contact_btn: "Send Message",
                loading: "Loading Portfolio..."
            }},
        fr: { translation: {
                nav_projects: "Projets",
                nav_exp: "Expérience",
                contact_btn: "Envoyer le message",
                loading: "Chargement du portfolio..."
            }}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;