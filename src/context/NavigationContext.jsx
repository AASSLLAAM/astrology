import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  // Default screen is Splash, logic in App.jsx handles transition to Home/Onboarding
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [screenParams, setScreenParams] = useState({});
  const [historyStack, setHistoryStack] = useState(['splash']);
  
  // Double-back exit logic state
  const [exitAttempt, setExitAttempt] = useState(false);

  /**
   * navigate
   * Transitions to a new screen.
   * @param {string} screenName - The target screen identifier
   * @param {object} params - Optional data to pass to the screen
   * @param {boolean} replace - If true, replaces current history entry instead of pushing
   */
  const navigate = useCallback((screenName, params = {}, replace = false) => {
    setScreenParams(params);
    setCurrentScreen(screenName);
    setExitAttempt(false); // Reset exit attempt on navigation

    if (replace) {
      // Replace current state
      window.history.replaceState({ screen: screenName, params }, '', `?screen=${screenName}`);
      setHistoryStack(prev => {
        const newStack = [...prev];
        newStack[newStack.length - 1] = screenName;
        return newStack;
      });
    } else {
      // Push new state
      window.history.pushState({ screen: screenName, params }, '', `?screen=${screenName}`);
      setHistoryStack(prev => [...prev, screenName]);
    }
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, []);

  /**
   * goBack
   * Handles back navigation.
   * Returns true if navigation happened, false if on the last screen (Home).
   */
  const goBack = useCallback(() => {
    if (historyStack.length > 1) {
      // Standard back navigation
      window.history.back(); 
      // State update happens in 'popstate' listener
      return true;
    } else {
      // We are at the root (usually Home)
      return false; 
    }
  }, [historyStack]);

  /**
   * resetNavigation
   * Clears history and sets a new root screen (e.g., after onboarding).
   */
  const resetNavigation = useCallback((screenName) => {
    setScreenParams({});
    setCurrentScreen(screenName);
    setHistoryStack([screenName]);
    setExitAttempt(false);
    
    // Clear browser history effectively by replacing state
    window.history.replaceState({ screen: screenName }, '', `?screen=${screenName}`);
  }, []);

  // Handle Browser Back Button (Physical Back Button on Android)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.screen) {
        // Browser went back/forward, sync our state
        setCurrentScreen(event.state.screen);
        setScreenParams(event.state.params || {});
        
        // Update internal stack for logic (simplified sync)
        setHistoryStack(prev => {
          // If the screen popped is the previous one in our stack, remove the top
          if (prev.length > 1 && prev[prev.length - 2] === event.state.screen) {
            return prev.slice(0, -1);
          }
          // Otherwise assume forward or random jump (less common in this flow), just append
          return [...prev, event.state.screen];
        });
      } else {
        // Fallback if state is null (e.g. initial load)
        // Usually doesn't happen if we replaceState on mount
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize History on Mount
  useEffect(() => {
    // Set initial state without pushing new entry
    const initialScreen = 'splash';
    const urlParams = new URLSearchParams(window.location.search);
    const screenFromUrl = urlParams.get('screen');

    // Logic to restore screen from URL could go here, 
    // but for this PWA we prefer controlled entry via Splash
    window.history.replaceState({ screen: initialScreen }, '', `?screen=${initialScreen}`);
  }, []);

  const value = {
    currentScreen,
    screenParams,
    navigate,
    goBack,
    resetNavigation,
    exitAttempt,     // Exposed for UI to show toast
    setExitAttempt,  // Exposed for BackHandler logic
    historyStack
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

/**
 * useNavigation
 * Hook to access navigation methods.
 */
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export default NavigationContext;
