import StorageService from './storageService';

const RATE_STORAGE_KEY = 'palm_reader_rate_state';
const STORE_URL = 'https://play.google.com/store/apps/details?id=com.ai.palmreader'; // Placeholder ID

const INITIAL_STATE = {
  hasRated: false,
  installDate: Date.now(),
  eventsCount: 0, // Number of significant actions (readings completed)
  nextPromptDate: Date.now() + 24 * 60 * 60 * 1000 // Wait 24 hours before first prompt
};

export const RateService = {
  /**
   * Get current rating state from storage
   */
  getState: () => {
    return StorageService.get(RATE_STORAGE_KEY, INITIAL_STATE);
  },

  /**
   * Save state to storage
   */
  saveState: (state) => {
    StorageService.save(RATE_STORAGE_KEY, state);
  },

  /**
   * Log a significant event (e.g., completed a reading)
   * This helps determine when to ask for a rating.
   */
  logEvent: () => {
    const state = RateService.getState();
    if (state.hasRated) return;

    state.eventsCount += 1;
    RateService.saveState(state);
  },

  /**
   * Check if we should show the rating prompt
   * Criteria: 
   * 1. User hasn't rated yet.
   * 2. Enough time has passed since install/last defer.
   * 3. User has completed at least 1 significant action (reading).
   */
  shouldPrompt: () => {
    const state = RateService.getState();
    const now = Date.now();

    if (state.hasRated) return false;
    if (state.eventsCount < 1) return false; // Don't ask if they haven't used the app properly
    if (now < state.nextPromptDate) return false;

    return true;
  },

  /**
   * User agreed to rate
   * Open store and mark as rated so we never ask again.
   */
  rateNow: () => {
    const state = RateService.getState();
    state.hasRated = true;
    RateService.saveState(state);
    
    // Open Play Store
    window.open(STORE_URL, '_blank');
  },

  /**
   * User clicked "Later"
   * Defer the prompt by 3 days.
   */
  remindLater: () => {
    const state = RateService.getState();
    state.nextPromptDate = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 Days
    RateService.saveState(state);
  },

  /**
   * User clicked "No thanks"
   * Don't ask again (or wait a very long time, e.g., 30 days).
   */
  dontAsk: () => {
    const state = RateService.getState();
    state.hasRated = true; // Treat as rated to suppress prompt
    RateService.saveState(state);
  },

  /**
   * Reset rating state (for testing/debug)
   */
  reset: () => {
    StorageService.remove(RATE_STORAGE_KEY);
  }
};

export default RateService;
