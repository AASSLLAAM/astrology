import StorageService from './storageService';

const HISTORY_KEY = 'palm_reader_history';
const MAX_HISTORY_ITEMS = 50;

/**
 * generateId
 * Creates a simple unique ID for history items.
 */
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const HistoryService = {
  /**
   * getHistory
   * Retrieves all saved readings, sorted by newest first.
   */
  getHistory: () => {
    return StorageService.get(HISTORY_KEY, []);
  },

  /**
   * addEntry
   * Saves a new reading to history.
   * 
   * @param {string} type - 'palm', 'tarot', 'horoscope', 'chat'
   * @param {object} data - The reading content and metadata
   */
  addEntry: (type, data) => {
    const history = HistoryService.getHistory();
    
    const newEntry = {
      id: generateId(),
      type,
      date: new Date().toISOString(),
      ...data
    };

    // Add to beginning of array
    const updatedHistory = [newEntry, ...history];

    // Trim to max size to prevent localStorage overflow
    if (updatedHistory.length > MAX_HISTORY_ITEMS) {
      updatedHistory.length = MAX_HISTORY_ITEMS;
    }

    StorageService.save(HISTORY_KEY, updatedHistory);
    return newEntry;
  },

  /**
   * getEntryById
   * Finds a specific reading by ID.
   */
  getEntryById: (id) => {
    const history = HistoryService.getHistory();
    return history.find(item => item.id === id) || null;
  },

  /**
   * deleteEntry
   * Removes a single reading.
   */
  deleteEntry: (id) => {
    const history = HistoryService.getHistory();
    const updatedHistory = history.filter(item => item.id !== id);
    StorageService.save(HISTORY_KEY, updatedHistory);
  },

  /**
   * clearHistory
   * Wipes all history data.
   */
  clearHistory: () => {
    StorageService.remove(HISTORY_KEY);
  },

  /**
   * getStats
   * Returns usage statistics for profile summary.
   */
  getStats: () => {
    const history = HistoryService.getHistory();
    return {
      totalReadings: history.length,
      palmReadings: history.filter(h => h.type === 'palm').length,
      tarotReadings: history.filter(h => h.type === 'tarot').length,
      chatSessions: history.filter(h => h.type === 'chat').length
    };
  }
};

export default HistoryService;
