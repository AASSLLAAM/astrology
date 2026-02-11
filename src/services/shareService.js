/**
 * ShareService
 * Handles sharing content via the native OS share sheet or clipboard fallback.
 */

export const ShareService = {
  /**
   * Share generic content
   * @param {Object} data - Share data
   * @param {string} data.title - Title of the shared content
   * @param {string} data.text - Main text body
   * @param {string} data.url - URL to share (optional)
   * @returns {Promise<string>} - Returns 'shared', 'copied', or 'error'
   */
  share: async ({ title, text, url = window.location.origin }) => {
    // 1. Try Native Share (Mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url
        });
        return 'shared';
      } catch (error) {
        // User aborted share or error occurred
        if (error.name !== 'AbortError') {
          console.error('Share Error:', error);
        }
        return 'cancelled';
      }
    } 
    
    // 2. Fallback: Copy to Clipboard (Desktop/Unsupported)
    try {
      const shareText = `${title}\n\n${text}\n\n${url}`;
      await navigator.clipboard.writeText(shareText);
      return 'copied';
    } catch (error) {
      console.error('Clipboard Error:', error);
      return 'error';
    }
  },

  /**
   * Helper: Share the App Link
   */
  shareApp: async () => {
    return ShareService.share({
      title: 'AI Palm Reader 🔮',
      text: 'Discover your destiny with this amazing AI Palm Reader & Astrology app! ✨',
      url: window.location.origin
    });
  },

  /**
   * Helper: Share a Daily Guidance
   */
  shareDailyGuidance: async (guidance) => {
    return ShareService.share({
      title: '✨ My Daily Cosmic Guidance',
      text: `"${guidance.quote}"\n\nFocus: ${guidance.focus}\nEnergy: ${guidance.energy}`,
      url: window.location.origin
    });
  },

  /**
   * Helper: Share a Reading Result
   */
  shareReading: async (type, summary) => {
    // Truncate summary if too long for social sharing
    const shortSummary = summary.length > 200 ? summary.substring(0, 197) + '...' : summary;
    
    return ShareService.share({
      title: `🔮 My ${type} Reading`,
      text: `I just got a deep insight about my ${type.toLowerCase()}:\n\n${shortSummary}`,
      url: window.location.origin
    });
  }
};

export default ShareService;
