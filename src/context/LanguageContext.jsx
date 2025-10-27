import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage, supportedLanguages } from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('gecko-shop-language');
        return saved && supportedLanguages.includes(saved) ? saved : defaultLanguage;
    });

    useEffect(() => {
        localStorage.setItem('gecko-shop-language', language);
    }, [language]);

    const t = (key, fallback = key) => {
        return translations[language]?.[key] || translations[defaultLanguage]?.[key] || fallback;
    };

    const changeLanguage = (lang) => {
        if (supportedLanguages.includes(lang)) {
            setLanguage(lang);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, supportedLanguages }}>
            {children}
        </LanguageContext.Provider>
    );
};

