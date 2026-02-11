import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

/**
 * AppProvider
 * Wraps the application to provide global state.
 */
export const AppProvider = ({ children }) => {
  // Global Loading State
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  // Global Error State
  const [error, setError] = useState(null);

  // App Ready State (after initial checks)
  const [isAppReady, setIsAppReady] = useState(false);

  // Install Prompt State (PWA)
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  // Initialize App
  useEffect(() => {
    const initApp = async () => {
      // Simulate core resource loading or checks
      setTimeout(() => {
        setIsAppReady(true);
      }, 1000);
    };

    initApp();

    // Capture PWA install prompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    });
  }, []);

  // Helper: Show Loading Overlay
  const showLoading = (message = 'Consulting the stars...') => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  // Helper: Hide Loading Overlay
  const hideLoading = () => {
    setIsLoading(false);
    setLoadingMessage('');
  };

  // Helper: Show Global Error
  const showError = (message) => {
    setError(message);
  };

  // Helper: Clear Error
  const clearError = () => {
    setError(null);
  };

  // Helper: Trigger PWA Install
  const installPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const value = {
    isAppReady,
    isLoading,
    loadingMessage,
    showLoading,
    hideLoading,
    error,
    showError,
    clearError,
    deferredPrompt,
    showInstallPrompt,
    setShowInstallPrompt,
    installPWA
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * useAppContext
 * Custom hook to access AppContext easily.
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
