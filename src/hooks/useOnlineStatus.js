import { useState, useEffect, useCallback } from 'react';

/**
 * useOnlineStatus Hook
 * Tracks the browser's online/offline state in real time.
 * 
 * @returns {object} - { isOnline, wasOffline, lastOfflineAt }
 * 
 * @example
 * const { isOnline, wasOffline } = useOnlineStatus();
 * if (!isOnline) showOfflineBanner();
 */
export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(() => {
    // Initialize with current state
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  // Track if the user was recently offline (for "back online" notification)
  const [wasOffline, setWasOffline] = useState(false);

  // Timestamp of last offline event
  const [lastOfflineAt, setLastOfflineAt] = useState(null);

  /**
   * handleOnline
   * Fired when browser detects network recovery.
   */
  const handleOnline = useCallback(() => {
    setIsOnline(true);

    // If we were offline before, flag it for UI notification
    if (!isOnline) {
      setWasOffline(true);
      
      // Clear the "was offline" flag after 5 seconds
      // This gives the UI time to show "Back online!" banner
      setTimeout(() => {
        setWasOffline(false);
      }, 5000);
    }
  }, [isOnline]);

  /**
   * handleOffline
   * Fired when browser detects network loss.
   */
  const handleOffline = useCallback(() => {
    setIsOnline(false);
    setLastOfflineAt(new Date().toISOString());
  }, []);

  useEffect(() => {
    // Register native browser events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnline, handleOffline]);

  /**
   * checkConnection
   * Manual ping to verify actual connectivity.
   * navigator.onLine can be unreliable on some devices.
   * This does a lightweight fetch to confirm.
   */
  const checkConnection = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch('/manifest.json', {
        method: 'HEAD',
        cache: 'no-store',
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      
      const online = response.ok;
      setIsOnline(online);
      return online;
    } catch (error) {
      setIsOnline(false);
      return false;
    }
  }, []);

  return {
    isOnline,
    wasOffline,
    lastOfflineAt,
    checkConnection
  };
};

export default useOnlineStatus;
