import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'ko', name: 'Korean', native: '한국어' }
];

const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'palm_reader_lang';

export const LanguageProvider = ({ children }) => {
  // Initialize with saved language or default
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && translations[saved] ? saved : DEFAULT_LANGUAGE;
  });

  // Persist language change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    // Update document language attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  /**
   * changeLanguage
   * Updates the app language.
   * @param {string} langCode - The language code (e.g., 'en', 'hi')
   */
  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode);
    } else {
      console.warn(`Language '${langCode}' not supported.`);
    }
  };

  /**
   * t (translate)
   * Retrieves the translated string for a given key.
   * Supports nested keys (e.g., 'home.welcome')
   * Fallbacks to English if translation is missing.
   * 
   * @param {string} key - The translation key
   * @returns {string} - The translated text
   */
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    let fallback = translations[DEFAULT_LANGUAGE];

    for (const k of keys) {
      value = value ? value[k] : null;
      fallback = fallback ? fallback[k] : null;
    }

    return value || fallback || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isRTL: false // Future proofing for RTL languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * useLanguage
 * Hook to access language state and translation function.
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
