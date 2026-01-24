import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
    const { i18n } = useTranslation();

    const tData = (en, fr) => {
        const currentLanguage = i18n.language;
        const text = currentLanguage === 'en' ? en : (fr || en);

        if (!text) {
            return "";
        }

        return text.toString();
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return {
        currentLang: i18n.language,
        tData,
        toggleLanguage
    };
};