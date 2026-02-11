/**
 * useLanguage Hook
 * Clean wrapper for LanguageContext.
 */

import { useLanguage as useLanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
  const context = useLanguageContext();
  
  return {
    ...context
    // We can add formatting helpers here if needed in future
    // e.g., formatDate(date) using the current locale
  };
};

export default useLanguage;
