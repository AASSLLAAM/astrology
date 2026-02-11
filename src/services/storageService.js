/**
 * Storage Keys Registry
 * Centralized place for all storage keys to avoid collisions.
 */
export const STORAGE_KEYS = {
  USER_PROFILE: 'palm_reader_user',
  LANGUAGE: 'palm_reader_lang',
  READING_HISTORY: 'palm_reader_history',
  SETTINGS: 'palm_reader_settings',
  DAILY_GUIDANCE_CACHE: 'palm_reader_daily_cache',
  ONBOARDING_STATUS: 'palm_reader_onboarded'
};

/**
 * StorageService
 * Wrapper around localStorage with error handling and JSON parsing.
 */
export const StorageService = {
  /**
   * Save data to local storage
   * @param {string} key - Storage key
   * @param {any} value - Data to save (will be stringified)
   */
  save: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      return true;
    } catch (error) {
      console.error(`Storage Save Error (${key}):`, error);
      return false;
    }
  },

  /**
   * Get data from local storage
   * @param {string} key - Storage key
   * @param {any} defaultValue - Fallback if not found
   * @returns {any} Parsed data or default value
   */
  get: (key, defaultValue = null) => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return defaultValue;
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error(`Storage Get Error (${key}):`, error);
      return defaultValue;
    }
  },

  /**
   * Remove item from local storage
   * @param {string} key - Storage key
   */
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Storage Remove Error (${key}):`, error);
    }
  },

  /**
   * Clear all app-specific data
   * Useful for "Reset App" functionality
   */
  clearAll: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
      return true;
    } catch (error) {
      console.error('Storage Clear Error:', error);
      return false;
    }
  },

  /**
   * Check if storage is available
   * (Private browsing or storage full can block it)
   */
  isAvailable: () => {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
};

export default StorageService;
