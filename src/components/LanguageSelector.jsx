import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
    const { language, changeLanguage, supportedLanguages } = useLanguage();

    const languageFlags = {
        en: '🇬🇧',
        es: '🇪🇸',
        ru: '🇷🇺',
        hy: '🇦🇲'
    };

    return (
        <div className="language-selector language-selector-flags">
            <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                {supportedLanguages.map(lang => (
                    <option key={lang} value={lang}>
                        {languageFlags[lang]} {lang.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;

