import { Workbox } from 'workbox-window';

/**
 * registerSW
 * Registers the Service Worker and handles update events.
 * 
 * @param {Function} onNeedRefresh - Callback when a new version is available
 * @param {Function} onOfflineReady - Callback when app is ready for offline use
 */
export function registerSW(onNeedRefresh, onOfflineReady) {
  if ('serviceWorker' in navigator) {
    // Create Workbox instance
    const wb = new Workbox('/sw.js');

    // Event: Waiting (Update available)
    wb.addEventListener('waiting', (event) => {
      console.log('✨ New update available!');
      if (onNeedRefresh) onNeedRefresh(wb);
    });

    // Event: Installed (Offline ready)
    wb.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        console.log('✅ App is ready for offline use!');
        if (onOfflineReady) onOfflineReady();
      }
    });

    // Event: Activated
    wb.addEventListener('activated', (event) => {
      // Logic after SW activation if needed
    });

    // Register the SW
    wb.register()
      .then((registration) => {
        console.log('🚀 Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('❌ Service Worker registration failed:', error);
      });
      
    return wb;
  } else {
    console.log('⚠️ Service Worker not supported in this browser.');
    return null;
  }
}
