/**
 * Application Constants
 * Centralized configuration values used across the app.
 */

// 📱 Screen Names (must match NavigationContext switch cases)
export const SCREENS = {
  SPLASH: 'splash',
  LANGUAGE_SELECT: 'language-select',
  ONBOARDING: 'onboarding',
  PROFILE_SETUP: 'profile-setup',
  HOME: 'home',
  PALM_SCAN: 'palm-scan',
  PALM_RESULT: 'palm-result',
  AI_CHAT: 'ai-chat',
  TAROT_CATEGORIES: 'tarot-categories',
  TAROT_READING: 'tarot-reading',
  DAILY_GUIDANCE: 'daily-guidance',
  HOROSCOPE: 'horoscope',
  HOROSCOPE_RESULT: 'horoscope-result',
  LOVE_READING: 'love-reading',
  SETTINGS: 'settings',
  PRIVACY: 'privacy'
};

// 🃏 Tarot Categories
export const TAROT_CATEGORIES = {
  LOVE: 'love',
  CAREER: 'career',
  FINANCE: 'finance',
  PERSONAL_GROWTH: 'personal_growth'
};

// ✋ Palm Lines
export const PALM_LINES = {
  HEART: 'heartLine',
  HEAD: 'headLine',
  LIFE: 'lifeLine',
  FATE: 'fateLine'
};

// 🖐️ Hand Selection
export const HANDS = {
  LEFT: 'left',
  RIGHT: 'right'
};

// 👤 Gender Options
export const GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other'
};

// 📊 Reading Types (for History)
export const READING_TYPES = {
  PALM: 'palm',
  TAROT: 'tarot',
  HOROSCOPE: 'horoscope',
  LOVE: 'love',
  DAILY: 'daily',
  CHAT: 'chat'
};

// ⏱️ Timing Constants
export const TIMING = {
  SPLASH_DURATION: 3000,        // 3 seconds splash screen
  TOAST_DURATION: 3000,         // 3 seconds toast visibility
  EXIT_TIMEOUT: 2000,           // 2 seconds double-back window
  LOADING_MIN_DURATION: 1500,   // Minimum loading display time
  TYPING_INDICATOR: 1000,       // Chat typing indicator delay
  SCAN_ANIMATION: 3000,         // Palm scan animation duration
  CARD_FLIP: 600,               // Tarot card flip animation
  TRANSITION: 400               // Screen transition duration
};

// 📏 Limits
export const LIMITS = {
  MAX_CHAT_HISTORY: 20,         // Max messages to send to API for context
  MAX_READING_HISTORY: 50,      // Max saved readings in history
  MAX_IMAGE_SIZE_MB: 5,         // Max upload image size
  MAX_IMAGE_WIDTH: 1024,        // Max image dimension after compression
  MAX_IMAGE_HEIGHT: 1024,
  MIN_NAME_LENGTH: 2,           // Profile name minimum
  MAX_NAME_LENGTH: 30           // Profile name maximum
};

// 🌐 API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://openrouter.ai/api/v1/chat/completions',
  VISION_MODEL: 'allenai/molmo-2-8b:free',
  TEXT_MODEL: 'liquid/lfm-2.5-1.2b-thinking:free',
  MAX_TOKENS_TEXT: 1000,
  MAX_TOKENS_VISION: 300,
  TEMPERATURE: 0.7,
  TOP_P: 0.9
};

// 🔗 External Links
export const LINKS = {
  PLAY_STORE: 'https://play.google.com/store/apps/details?id=com.ai.palmreader',
  PRIVACY_POLICY: '/privacy',
  SUPPORT_EMAIL: 'support@aipalmreader.app'
};

// 🎴 Feature List (for Home Dashboard grid)
export const HOME_FEATURES = [
  {
    id: 'palm-scan',
    screen: SCREENS.PALM_SCAN,
    icon: '🖐️',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'tarot',
    screen: SCREENS.TAROT_CATEGORIES,
    icon: '🃏',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'love',
    screen: SCREENS.LOVE_READING,
    icon: '💖',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'daily',
    screen: SCREENS.DAILY_GUIDANCE,
    icon: '✨',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'horoscope',
    screen: SCREENS.HOROSCOPE,
    icon: '🔮',
    gradient: 'from-violet-500 to-purple-600'
  }
];

export default {
  SCREENS,
  TAROT_CATEGORIES,
  PALM_LINES,
  HANDS,
  GENDERS,
  READING_TYPES,
  TIMING,
  LIMITS,
  API_CONFIG,
  LINKS,
  HOME_FEATURES
  export const SCREENS = {
  HOME: 'HOME',
  HOROSCOPE: 'HOROSCOPE',
  HOROSCOPE_RESULT: 'HOROSCOPE_RESULT',
};

};
