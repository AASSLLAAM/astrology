/**
 * Guidance Templates
 * Data pools used to generate structured Daily Guidance content.
 * These are combined with AI-generated text for rich, unique daily readings.
 */

// 🌈 Energy Types (Overall day energy)
export const ENERGY_TYPES = [
  {
    id: 'high_positive',
    label: 'Radiant & Vibrant',
    emoji: '☀️',
    color: '#FBBF24',
    level: 95,
    description: 'Today pulses with powerful, radiant energy. The cosmos aligns in your favor, making this an excellent day for bold action and authentic expression.'
  },
  {
    id: 'calm_positive',
    label: 'Serene & Flowing',
    emoji: '🌊',
    color: '#22D3EE',
    level: 80,
    description: 'A gentle, flowing energy surrounds you today. Like a calm river, your path unfolds naturally. Trust the peaceful rhythm of this day.'
  },
  {
    id: 'creative',
    label: 'Creative & Inspired',
    emoji: '🎨',
    color: '#A855F7',
    level: 85,
    description: 'Creative energy is exceptionally strong today. Your imagination is heightened, and artistic expression flows effortlessly. Let inspiration guide you.'
  },
  {
    id: 'grounded',
    label: 'Grounded & Stable',
    emoji: '🌳',
    color: '#22C55E',
    level: 75,
    description: 'Earth energy grounds you today, providing stability and practical wisdom. This is an excellent day for planning, organizing, and building solid foundations.'
  },
  {
    id: 'transformative',
    label: 'Transformative & Dynamic',
    emoji: '🦋',
    color: '#EC4899',
    level: 88,
    description: 'Powerful transformative energy is at work today. Old patterns are shifting, creating space for growth. Embrace the changes unfolding within and around you.'
  },
  {
    id: 'introspective',
    label: 'Reflective & Deep',
    emoji: '🌙',
    color: '#6366F1',
    level: 70,
    description: 'The energy today favors looking inward. Quiet reflection and meditation reveal important insights. Honor your need for solitude and contemplation.'
  },
  {
    id: 'social',
    label: 'Connected & Magnetic',
    emoji: '✨',
    color: '#F97316',
    level: 82,
    description: 'Social and magnetic energy fills your aura today. Connections with others feel meaningful and effortless. Your presence uplifts those around you.'
  },
  {
    id: 'healing',
    label: 'Healing & Nurturing',
    emoji: '💚',
    color: '#10B981',
    level: 78,
    description: 'Gentle healing energy wraps around you today. This is a time for self-care, emotional processing, and nurturing your body, mind, and spirit.'
  },
  {
    id: 'adventurous',
    label: 'Adventurous & Bold',
    emoji: '🔥',
    color: '#EF4444',
    level: 90,
    description: 'Fiery, adventurous energy courses through today. Take calculated risks, explore new territory, and push beyond your comfort zone with confidence.'
  },
  {
    id: 'balanced',
    label: 'Balanced & Harmonious',
    emoji: '⚖️',
    color: '#8B5CF6',
    level: 76,
    description: 'The energy today is beautifully balanced. All aspects of your life find harmony. This equilibrium supports wise decisions and peaceful interactions.'
  }
];

// 🎯 Emotional Focus Areas
export const EMOTIONAL_FOCUSES = [
  {
    id: 'self_love',
    label: 'Self-Love & Acceptance',
    emoji: '💝',
    message: 'Today, turn your loving attention inward. Recognize your worth, celebrate your journey, and treat yourself with the same compassion you offer others.'
  },
  {
    id: 'courage',
    label: 'Courage & Confidence',
    emoji: '🦁',
    message: 'Step into your power today with courage and confidence. The universe supports your bold moves. Trust that you are ready for whatever comes your way.'
  },
  {
    id: 'gratitude',
    label: 'Gratitude & Appreciation',
    emoji: '🙏',
    message: 'Open your heart to gratitude today. Appreciating what you already have creates a magnetic field that attracts even more blessings into your life.'
  },
  {
    id: 'patience',
    label: 'Patience & Trust',
    emoji: '🕊️',
    message: 'Practice patience with yourself and the universe today. Trust that everything is unfolding in divine timing. What you desire is making its way to you.'
  },
  {
    id: 'creativity',
    label: 'Creative Expression',
    emoji: '🎭',
    message: 'Let your creative spirit soar today. Express yourself through art, words, movement, or any form that calls to you. Your unique perspective is needed in the world.'
  },
  {
    id: 'connection',
    label: 'Deep Connection',
    emoji: '🤝',
    message: 'Focus on meaningful connections today. Authentic communication and vulnerability deepen your bonds. Show up fully in your relationships.'
  },
  {
    id: 'release',
    label: 'Letting Go & Release',
    emoji: '🍂',
    message: 'Today is ideal for releasing what no longer serves you. Old beliefs, habits, or attachments are ready to be lovingly released. Make space for the new.'
  },
  {
    id: 'joy',
    label: 'Joy & Playfulness',
    emoji: '🎪',
    message: 'Reconnect with pure joy today. Find moments of playfulness and laughter. Your inner child is calling you to experience the simple delight of being alive.'
  },
  {
    id: 'wisdom',
    label: 'Inner Wisdom',
    emoji: '🦉',
    message: 'Your inner wisdom is speaking clearly today. Listen to the quiet voice within. The answers you seek are already present in the depths of your being.'
  },
  {
    id: 'abundance',
    label: 'Abundance Mindset',
    emoji: '🌻',
    message: 'Shift into an abundance mindset today. The universe is infinitely generous. When you believe in abundance, you align with the flow of prosperity and blessings.'
  }
];

// ✅ Things to Embrace Today
export const EMBRACE_ITEMS = [
  { text: 'Spontaneous acts of kindness', emoji: '💫' },
  { text: 'Quiet moments of reflection', emoji: '🧘' },
  { text: 'Creative self-expression', emoji: '🎨' },
  { text: 'Honest conversations with loved ones', emoji: '💬' },
  { text: 'New learning opportunities', emoji: '📚' },
  { text: 'Physical movement and exercise', emoji: '🏃' },
  { text: 'Nature walks and fresh air', emoji: '🌿' },
  { text: 'Healthy, nourishing food choices', emoji: '🥗' },
  { text: 'Setting clear intentions', emoji: '🎯' },
  { text: 'Practicing mindfulness and presence', emoji: '🌸' },
  { text: 'Celebrating small victories', emoji: '🎉' },
  { text: 'Expressing gratitude openly', emoji: '🙏' },
  { text: 'Trying something completely new', emoji: '🌟' },
  { text: 'Deep breathing and relaxation', emoji: '🌬️' },
  { text: 'Journaling your thoughts and feelings', emoji: '📝' },
  { text: 'Acts of generosity and giving', emoji: '🎁' },
  { text: 'Connecting with your spiritual practice', emoji: '🔮' },
  { text: 'Listening to uplifting music', emoji: '🎵' },
  { text: 'Visualizing your dreams and goals', emoji: '💭' },
  { text: 'Trusting the process of life', emoji: '🌈' }
];

// ❌ Things to Avoid Today
export const AVOID_ITEMS = [
  { text: 'Overthinking and mental spiraling', emoji: '🌀' },
  { text: 'Comparing yourself to others', emoji: '👀' },
  { text: 'Suppressing your true feelings', emoji: '🤐' },
  { text: 'Making impulsive financial decisions', emoji: '💸' },
  { text: 'Engaging in negative self-talk', emoji: '🚫' },
  { text: 'Resisting necessary change', emoji: '🧱' },
  { text: 'Overcommitting to others', emoji: '🏋️' },
  { text: 'Dwelling on past mistakes', emoji: '⏪' },
  { text: 'Ignoring your body\'s signals', emoji: '⚡' },
  { text: 'Seeking external validation', emoji: '📱' },
  { text: 'Procrastinating on important tasks', emoji: '⏰' },
  { text: 'Gossiping or speaking unkindly', emoji: '🗣️' },
  { text: 'Skipping meals or rest', emoji: '😴' },
  { text: 'Holding onto grudges', emoji: '⚓' },
  { text: 'Rushing through your day', emoji: '🏎️' },
  { text: 'Absorbing others\' negative energy', emoji: '🧲' },
  { text: 'Perfectionism and unrealistic standards', emoji: '📏' },
  { text: 'Neglecting your creative side', emoji: '🎭' },
  { text: 'Worrying about things beyond your control', emoji: '☁️' },
  { text: 'Isolating yourself from support', emoji: '🏝️' }
];

// 🍀 Lucky Elements
export const LUCKY_ELEMENTS = {
  colors: [
    { name: 'Royal Purple', hex: '#7C3AED', emoji: '💜' },
    { name: 'Ocean Blue', hex: '#3B82F6', emoji: '💙' },
    { name: 'Emerald Green', hex: '#10B981', emoji: '💚' },
    { name: 'Golden Yellow', hex: '#FBBF24', emoji: '💛' },
    { name: 'Rose Pink', hex: '#EC4899', emoji: '🩷' },
    { name: 'Silver White', hex: '#E2E8F0', emoji: '🤍' },
    { name: 'Coral Orange', hex: '#F97316', emoji: '🧡' },
    { name: 'Crimson Red', hex: '#EF4444', emoji: '❤️' }
  ],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 21, 22, 27, 33],
  crystals: [
    { name: 'Amethyst', emoji: '💎', property: 'Spiritual clarity and intuition' },
    { name: 'Rose Quartz', emoji: '🪨', property: 'Love and emotional healing' },
    { name: 'Citrine', emoji: '✨', property: 'Abundance and positive energy' },
    { name: 'Clear Quartz', emoji: '💠', property: 'Amplification and clarity' },
    { name: 'Moonstone', emoji: '🌙', property: 'Intuition and inner growth' },
    { name: 'Tiger\'s Eye', emoji: '🐯', property: 'Courage and confidence' },
    { name: 'Lapis Lazuli', emoji: '🔵', property: 'Truth and wisdom' },
    { name: 'Black Tourmaline', emoji: '⬛', property: 'Protection and grounding' }
  ],
  elements: [
    { name: 'Fire', emoji: '🔥', energy: 'Passion, action, transformation' },
    { name: 'Water', emoji: '💧', energy: 'Emotion, intuition, healing' },
    { name: 'Earth', emoji: '🌍', energy: 'Stability, growth, abundance' },
    { name: 'Air', emoji: '💨', energy: 'Communication, intellect, freedom' }
  ]
};

/**
 * generateDailyGuidance
 * Creates a structured daily guidance object using random selection.
 * This is the "base data" that can be enhanced by AI.
 * 
 * @param {string} dateString - Today's date as seed for consistency
 * @returns {object} - Complete daily guidance object
 */
export const generateDailyGuidance = (dateString) => {
  // Use date as seed for pseudo-random but consistent daily selection
  const seed = dateString 
    ? dateString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    : Date.now();

  const seededRandom = (array) => {
    const index = seed % array.length;
    return array[index];
  };

  const seededRandomMultiple = (array, count) => {
    const shuffled = [...array].sort((a, b) => {
      const hashA = (seed * a.text?.charCodeAt(0) || seed) % 100;
      const hashB = (seed * b.text?.charCodeAt(0) || seed) % 100;
      return hashA - hashB;
    });
    return shuffled.slice(0, count);
  };

  const energy = seededRandom(ENERGY_TYPES);
  const focus = seededRandom(EMOTIONAL_FOCUSES);
  const embrace = seededRandomMultiple(EMBRACE_ITEMS, 3);
  const avoid = seededRandomMultiple(AVOID_ITEMS, 3);

  // Lucky elements
  const luckyColor = seededRandom(LUCKY_ELEMENTS.colors);
  const luckyNumber = seededRandom(LUCKY_ELEMENTS.numbers);
  const luckyCrystal = seededRandom(LUCKY_ELEMENTS.crystals);
  const luckyElement = seededRandom(LUCKY_ELEMENTS.elements);

  return {
    date: dateString || new Date().toISOString().split('T')[0],
    energy,
    focus,
    embrace,
    avoid,
    lucky: {
      color: luckyColor,
      number: luckyNumber,
      crystal: luckyCrystal,
      element: luckyElement
    },
    // AI-generated content will be added to this object later
    aiInsight: null
  };
};

/**
 * buildGuidancePrompt
 * Creates a prompt for the AI to generate personalized daily guidance.
 * 
 * @param {object} baseGuidance - The template-based guidance
 * @param {object} userProfile - User's profile data
 * @returns {string} - Formatted prompt for AI
 */
export const buildGuidancePrompt = (baseGuidance, userProfile) => {
  const zodiac = userProfile?.zodiacSign?.name || 'Unknown';
  const name = userProfile?.name || 'Seeker';

  return `
    Generate a personalized daily cosmic guidance for ${name}, a ${zodiac} sign.
    
    Today's cosmic energy: ${baseGuidance.energy.label} - ${baseGuidance.energy.description}
    Emotional focus: ${baseGuidance.focus.label}
    Lucky element: ${baseGuidance.lucky.element.name}
    Lucky crystal: ${baseGuidance.lucky.crystal.name}
    
    Provide:
    1. A personalized cosmic message for today (2-3 paragraphs)
    2. A meaningful affirmation for the day
    3. A brief meditation suggestion
    
    Remember: Be uplifting, spiritual, and focus on personal empowerment. No predictions or fear-based language.
  `;
};

export default {
  ENERGY_TYPES,
  EMOTIONAL_FOCUSES,
  EMBRACE_ITEMS,
  AVOID_ITEMS,
  LUCKY_ELEMENTS,
  generateDailyGuidance,
  buildGuidancePrompt
};
