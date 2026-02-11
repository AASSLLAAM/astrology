import { useEffect } from 'react';
import { useNavigation } from './useNavigation';
import { useToast } from './useToast'; // We will create this next
import { useAppContext } from '../context/AppContext';

/**
 * useBackHandler
 * Global handler for back navigation and exit confirmation.
 */
export const useBackHandler = () => {
  const { 
    currentScreen, 
    goBack, 
    exitAttempt, 
    setExitAttempt 
  } = useNavigation();

  const { showToast } = useToast();
  // We can use AppContext to trigger the Exit Modal if preferred over toast logic
  // But strictly following prompt: "Toast: Press back again to exit"

  useEffect(() => {
    const handlePopState = (event) => {
      // Prevent default browser action temporarily to handle logic
      // Note: In actual PWA history API, popstate is fired AFTER the change.
      // So we rely on our NavigationContext sync, but this hook can intervene for logic.
      
      if (currentScreen === 'home') {
        // If on Home, we are at the root
        
        if (exitAttempt) {
          // Second press: Allow exit or show Exit Modal
          // For a PWA, we can't programmatically 'close' the app reliably.
          // We usually show a specialized 'ExitModal' overlay here.
          // But per prompt requirements, we handle logic.
          setExitAttempt(false);
          // Let the browser handle closing or minimizing if possible, 
          // or show the ExitModal via a global state trigger.
        } else {
          // First press: Show warning
          // Push state back to prevent actual exit if needed, or rely on history stack
          // Since history.back() was called by user, we might be out of history.
          // Re-push home to stay.
          window.history.pushState({ screen: 'home' }, '', '?screen=home');
          
          setExitAttempt(true);
          showToast('Press back again to exit');
          
          // Reset attempt after 2 seconds
          setTimeout(() => {
            setExitAttempt(false);
          }, 2000);
        }
      } else {
        // Not on home, handled by NavigationContext usually.
        // But if this hook is active, we ensure exitAttempt is clear.
        setExitAttempt(false);
      }
    };

    // We only attach this specific logic listener if needed
    // NavigationContext already handles the 'popstate' for routing.
    // This hook is mostly for the 'Exit' logic on top of it.
    
    // NOTE: 'popstate' fires when user clicks back.
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentScreen, exitAttempt, setExitAttempt, showToast]);
};

export default useBackHandler;
