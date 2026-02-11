/**
 * Onboarding Data
 * Content and configuration for the app's onboarding slides.
 * Supports multi-language through translation keys.
 */

/**
 * ONBOARDING_SLIDES
 * Main slide data array.
 * Text uses translation keys that map to src/utils/translations.js
 */
export const ONBOARDING_SLIDES = [
  {
    id: 'tarot',
    translationKey: 'slide1',
    icon: '🃏',
    illustration: 'tarot',
    gradient: {
      colors: ['#F59E0B', '#D97706', '#B45309'],
      direction: 'to bottom right'
    },
    accentColor: '#FBBF24',
    features: [
      { icon: '✨', textKey: 'feature_personalized' },
      { icon: '🔮', textKey: 'feature_categories' },
      { icon: '📖', textKey: 'feature_detailed' }
    ],
    animation: {
      type: 'cards',
      elements: ['card1', 'card2', 'card3']
    }
  },
  {
    id: 'palm',
    translationKey: 'slide2',
    icon: '🖐️',
    illustration: 'palm',
    gradient: {
      colors: ['#8B5CF6', '#7C3AED', '#6D28D9'],
      direction: 'to bottom right'
    },
    accentColor: '#A78BFA',
    features: [
      { icon: '📸', textKey: 'feature_scan' },
      { icon: '🧠', textKey: 'feature_ai_analysis' },
      { icon: '💫', textKey: 'feature_insights' }
    ],
    animation: {
      type: 'scan',
      elements: ['hand', 'scanLine', 'lines']
    }
  },
  {
    id: 'guidance',
    translationKey: 'slide3',
    icon: '🌟',
    illustration: 'cosmic',
    gradient: {
      colors: ['#6366F1', '#4F46E5', '#4338CA'],
      direction: 'to bottom right'
    },
    accentColor: '#818CF8',
    features: [
      { icon: '☀️', textKey: 'feature_daily' },
      { icon: '♈', textKey: 'feature_horoscope' },
      { icon: '💬', textKey: 'feature_chat' }
    ],
    animation: {
      type: 'stars',
      elements: ['star1', 'star2', 'star3', 'moon']
    }
  }
];

/**
 * ONBOARDING_FEATURES
 * Detailed feature descriptions for each slide.
 * Maps feature keys to full translation paths.
 */
export const ONBOARDING_FEATURES = {
  // Tarot Slide Features
  feature_personalized: {
    en: 'Personalized readings for your journey',
    hi: 'आपकी यात्रा के लिए व्यक्तिगत रीडिंग',
    es: 'Lecturas personalizadas para tu viaje',
    fr: 'Lectures personnalisées pour votre voyage',
    it: 'Letture personalizzate per il tuo viaggio',
    ko: '당신의 여정을 위한 맞춤형 리딩'
  },
  feature_categories: {
    en: 'Love, Career, Finance & Growth',
    hi: 'प्रेम, करियर, वित्त और विकास',
    es: 'Amor, Carrera, Finanzas y Crecimiento',
    fr: 'Amour, Carrière, Finances et Croissance',
    it: 'Amore, Carriera, Finanze e Crescita',
    ko: '사랑, 경력, 재정 & 성장'
  },
  feature_detailed: {
    en: 'Deep, meaningful interpretations',
    hi: 'गहरी, सार्थक व्याख्याएं',
    es: 'Interpretaciones profundas y significativas',
    fr: 'Interprétations profondes et significatives',
    it: 'Interpretazioni profonde e significative',
    ko: '깊고 의미 있는 해석'
  },

  // Palm Slide Features
  feature_scan: {
    en: 'Scan your palm with your camera',
    hi: 'अपने कैमरे से अपनी हथेली स्कैन करें',
    es: 'Escanea tu palma con tu cámara',
    fr: 'Scannez votre paume avec votre caméra',
    it: 'Scansiona il tuo palmo con la fotocamera',
    ko: '카메라로 손바닥을 스캔하세요'
  },
  feature_ai_analysis: {
    en: 'AI-powered line analysis',
    hi: 'AI-संचालित रेखा विश्लेषण',
    es: 'Análisis de líneas impulsado por IA',
    fr: 'Analyse des lignes par IA',
    it: 'Analisi delle linee basata su IA',
    ko: 'AI 기반 선 분석'
  },
  feature_insights: {
    en: 'Discover hidden insights',
    hi: 'छिपी हुई अंतर्दृष्टि खोजें',
    es: 'Descubre insights ocultos',
    fr: 'Découvrez des insights cachés',
    it: 'Scopri intuizioni nascoste',
    ko: '숨겨진 통찰력을 발견하세요'
  },

  // Guidance Slide Features
  feature_daily: {
    en: 'Daily cosmic guidance',
    hi: 'दैनिक ब्रह्मांडीय मार्गदर्शन',
    es: 'Guía cósmica diaria',
    fr: 'Guidance cosmique quotidienne',
    it: 'Guida cosmica quotidiana',
    ko: '일일 우주 가이던스'
  },
  feature_horoscope: {
    en: 'Personalized horoscopes',
    hi: 'व्यक्तिगत राशिफल',
    es: 'Horóscopos personalizados',
    fr: 'Horoscopes personnalisés',
    it: 'Oroscopi personalizzati',
    ko: '맞춤형 운세'
  },
  feature_chat: {
    en: 'Chat with your AI guide',
    hi: 'अपने AI गाइड से चैट करें',
    es: 'Chatea con tu guía de IA',
    fr: 'Discutez avec votre guide IA',
    it: 'Chatta con la tua guida IA',
    ko: 'AI 가이드와 채팅하세요'
  }
};

/**
 * SLIDE_ILLUSTRATIONS
 * SVG path data or component references for slide illustrations.
 * Used by the OnboardingSlide component.
 */
export const SLIDE_ILLUSTRATIONS = {
  tarot: {
    type: 'animated',
    elements: [
      {
        id: 'card1',
        type: 'tarot-card',
        position: { x: '30%', y: '40%' },
        rotation: -15,
        delay: 0,
        symbol: '☀️'
      },
      {
        id: 'card2',
        type: 'tarot-card',
        position: { x: '50%', y: '35%' },
        rotation: 0,
        delay: 0.2,
        symbol: '🌙'
      },
      {
        id: 'card3',
        type: 'tarot-card',
        position: { x: '70%', y: '40%' },
        rotation: 15,
        delay: 0.4,
        symbol: '⭐'
      }
    ],
    particles: ['✨', '🌟', '💫']
  },

  palm: {
    type: 'animated',
    elements: [
      {
        id: 'hand',
        type: 'palm-hand',
        position: { x: '50%', y: '45%' },
        scale: 1
      },
      {
        id: 'scanLine',
        type: 'scan-line',
        animation: 'scan-vertical',
        color: '#22D3EE'
      },
      {
        id: 'heartLine',
        type: 'palm-line',
        name: 'Heart',
        color: '#EF4444',
        delay: 0.5
      },
      {
        id: 'headLine',
        type: 'palm-line',
        name: 'Head',
        color: '#3B82F6',
        delay: 0.7
      },
      {
        id: 'lifeLine',
        type: 'palm-line',
        name: 'Life',
        color: '#22C55E',
        delay: 0.9
      }
    ],
    particles: ['🔮', '✨', '💜']
  },

  cosmic: {
    type: 'animated',
    elements: [
      {
        id: 'moon',
        type: 'celestial',
        symbol: '🌙',
        position: { x: '70%', y: '25%' },
        animation: 'float',
        scale: 2
      },
      {
        id: 'star1',
        type: 'celestial',
        symbol: '⭐',
        position: { x: '20%', y: '30%' },
        animation: 'twinkle',
        delay: 0
      },
      {
        id: 'star2',
        type: 'celestial',
        symbol: '✨',
        position: { x: '80%', y: '55%' },
        animation: 'twinkle',
        delay: 0.3
      },
      {
        id: 'star3',
        type: 'celestial',
        symbol: '🌟',
        position: { x: '35%', y: '60%' },
        animation: 'twinkle',
        delay: 0.6
      },
      {
        id: 'zodiacRing',
        type: 'zodiac-ring',
        position: { x: '50%', y: '45%' },
        animation: 'rotate-slow'
      }
    ],
    particles: ['⭐', '✨', '🌟', '💫']
  }
};

/**
 * ONBOARDING_CONFIG
 * Global configuration for onboarding behavior.
 */
export const ONBOARDING_CONFIG = {
  autoPlayDelay: 5000,          // Auto-advance delay in ms (0 to disable)
  swipeThreshold: 50,           // Minimum swipe distance in px
  animationDuration: 400,       // Slide transition duration in ms
  showSkipButton: true,         // Show skip button on all slides
  showProgressDots: true,       // Show pagination dots
  hapticFeedback: true,         // Enable haptic feedback on swipe (if supported)
  parallaxIntensity: 0.3,       // Background parallax effect intensity
  particleCount: 15             // Number of floating particles per slide
};

/**
 * getSlideContent
 * Helper to get translated content for a specific slide.
 * 
 * @param {number} index - Slide index
 * @param {string} langCode - Language code
 * @param {Function} t - Translation function from LanguageContext
 * @returns {Object} - Translated slide content
 */
export const getSlideContent = (index, langCode, t) => {
  const slide = ONBOARDING_SLIDES[index];
  if (!slide) return null;

  const key = slide.translationKey;

  return {
    ...slide,
    title: t(`onboarding.${key}.title`),
    description: t(`onboarding.${key}.description`),
    features: slide.features.map(feature => ({
      ...feature,
      text: ONBOARDING_FEATURES[feature.textKey]?.[langCode] || 
            ONBOARDING_FEATURES[feature.textKey]?.en || ''
    }))
  };
};

/**
 * BACKGROUND_PARTICLES
 * Floating particle configuration for cosmic background effect.
 */
export const BACKGROUND_PARTICLES = [
  { symbol: '✨', size: 'sm', opacity: 0.6, speed: 'slow' },
  { symbol: '⭐', size: 'md', opacity: 0.5, speed: 'medium' },
  { symbol: '🌟', size: 'lg', opacity: 0.4, speed: 'slow' },
  { symbol: '💫', size: 'sm', opacity: 0.7, speed: 'fast' },
  { symbol: '🌙', size: 'md', opacity: 0.3, speed: 'slow' },
  { symbol: '✦', size: 'xs', opacity: 0.8, speed: 'fast' }
];

/**
 * generateParticles
 * Generates random particle positions for background animation.
 * 
 * @param {number} count - Number of particles to generate
 * @returns {Array} - Array of particle objects with positions
 */
export const generateParticles = (count = ONBOARDING_CONFIG.particleCount) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const template = BACKGROUND_PARTICLES[i % BACKGROUND_PARTICLES.length];
    
    particles.push({
      id: `particle-${i}`,
      ...template,
      x: Math.random() * 100, // Percentage position
      y: Math.random() * 100,
      delay: Math.random() * 5, // Animation delay in seconds
      duration: 10 + Math.random() * 20 // Animation duration in seconds
    });
  }

  return particles;
};

/**
 * SWIPE_HINTS
 * Localized swipe hint text shown on first slide.
 */
export const SWIPE_HINTS = {
  en: 'Swipe to continue',
  hi: 'जारी रखने के लिए स्वाइप करें',
  es: 'Desliza para continuar',
  fr: 'Glissez pour continuer',
  it: 'Scorri per continuare',
  ko: '계속하려면 스와이프하세요'
};

/**
 * getSwipeHint
 * Returns localized swipe hint text.
 * 
 * @param {string} langCode
 * @returns {string}
 */
export const getSwipeHint = (langCode) => {
  return SWIPE_HINTS[langCode] || SWIPE_HINTS.en;
};

export default {
  ONBOARDING_SLIDES,
  ONBOARDING_FEATURES,
  SLIDE_ILLUSTRATIONS,
  ONBOARDING_CONFIG,
  BACKGROUND_PARTICLES,
  getSlideContent,
  generateParticles,
  getSwipeHint
};
