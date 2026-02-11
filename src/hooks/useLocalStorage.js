import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage
 * A useState alternative that persists data in localStorage.
 * 
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Default value if key doesn't exist
 * @returns {[any, Function, Function]} - [value, setValue, removeValue]
 * 
 * @example
 * const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'dark');
 */
export const useLocalStorage = (key, initialValue) => {
  // Initialize state from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      // Parse stored JSON or return initial value
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Sync to localStorage whenever storedValue changes
  useEffect(() => {
    try {
      if (storedValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.warn(`Error writing localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  /**
   * setValue
   * Updates both React state and localStorage.
   * Supports functional updates like setState.
   */
  const setValue = useCallback((value) => {
    try {
      // Allow value to be a function for same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  /**
   * removeValue
   * Clears the key from localStorage and resets state to initialValue.
   */
  const removeValue = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Listen for changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch (error) {
          console.warn(`Error parsing storage event for "${key}":`, error);
        }
      } else if (event.key === key && event.newValue === null) {
        // Key was removed in another tab
        setStoredValue(initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
