import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * useWakeLock Hook
 * Prevents the device screen from dimming or locking.
 * Useful during palm scanning where the user needs the screen active.
 * 
 * @returns {object} - { isLocked, requestWakeLock, releaseWakeLock, isSupported }
 * 
 * @example
 * const { requestWakeLock, releaseWakeLock, isSupported } = useWakeLock();
 * 
 * // When palm scan starts
 * await requestWakeLock();
 * 
 * // When palm scan ends
 * releaseWakeLock();
 */
export const useWakeLock = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const wakeLockRef = useRef(null);

  // Check if Wake Lock API is supported
  useEffect(() => {
    const supported = 'wakeLock' in navigator;
    setIsSupported(supported);

    if (!supported) {
      console.log('⚠️ Screen Wake Lock API is not supported in this browser.');
    }
  }, []);

  /**
   * requestWakeLock
   * Acquires the screen wake lock.
   * The screen will stay on until released.
   */
  const requestWakeLock = useCallback(async () => {
    if (!isSupported) {
      console.log('⚠️ Wake Lock not supported. Skipping.');
      return false;
    }

    try {
      // Release existing lock if any
      if (wakeLockRef.current) {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
      }

      // Request new lock
      wakeLockRef.current = await navigator.wakeLock.request('screen');
      setIsLocked(true);

      // Listen for lock release (can happen if user switches tab)
      wakeLockRef.current.addEventListener('release', () => {
        setIsLocked(false);
        wakeLockRef.current = null;
      });

      console.log('🔒 Screen Wake Lock acquired.');
      return true;

    } catch (error) {
      // Wake lock can fail if:
      // - Page is not visible (user switched tab)
      // - Battery saver mode is active
      // - Permission denied
      console.warn('Wake Lock request failed:', error.message);
      setIsLocked(false);
      return false;
    }
  }, [isSupported]);

  /**
   * releaseWakeLock
   * Releases the screen wake lock.
   * Screen can dim/lock normally again.
   */
  const releaseWakeLock = useCallback(async () => {
    if (wakeLockRef.current) {
      try {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
        setIsLocked(false);
        console.log('🔓 Screen Wake Lock released.');
      } catch (error) {
        console.warn('Wake Lock release failed:', error.message);
      }
    }
  }, []);

  // Re-acquire wake lock when page becomes visible again
  // (Browser releases it automatically when tab is hidden)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible' && isLocked && !wakeLockRef.current) {
        // Page is visible again and we had a lock before
        // Try to re-acquire
        await requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isLocked, requestWakeLock]);

  // Cleanup: Release lock when component unmounts
  useEffect(() => {
    return () => {
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
    };
  }, []);

  return {
    isLocked,
    isSupported,
    requestWakeLock,
    releaseWakeLock
  };
};

export default useWakeLock;
