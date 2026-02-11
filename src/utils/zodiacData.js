/**
 * Zodiac Data
 * Complete data for all 12 zodiac signs.
 * Used in Horoscope, Profile, and AI prompt building.
 */

export const ZODIAC_SIGNS = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    emoji: '🐏',
    element: 'Fire',
    quality: 'Cardinal',
    rulingPlanet: 'Mars',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    color: '#EF4444',
    traits: ['Courageous', 'Energetic', 'Optimistic', 'Passionate'],
    strengths: 'Determination, confidence, enthusiasm, and honesty.',
    weaknesses: 'Impatience, short temper, impulsiveness.',
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    luckyNumbers: [1, 8, 17],
    luckyDay: 'Tuesday',
    bodyPart: 'Head',
    season: 'Early Spring',
    description: 'Aries is the first sign of the zodiac, symbolizing new beginnings and raw energy. As a fire sign ruled by Mars, Aries individuals are natural-born leaders with an infectious enthusiasm for life.'
  },
  {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    emoji: '🐂',
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    color: '#22C55E',
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted'],
    strengths: 'Dependability, patience, practicality, and loyalty.',
    weaknesses: 'Stubbornness, possessiveness, resistance to change.',
    compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    luckyNumbers: [2, 6, 9],
    luckyDay: 'Friday',
    bodyPart: 'Throat',
    season: 'Mid Spring',
    description: 'Taurus represents stability and sensual pleasures. Ruled by Venus, the planet of love and beauty, Taurus individuals appreciate the finer things in life and build strong, lasting foundations.'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    emoji: '👯',
    element: 'Air',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    color: '#EAB308',
    traits: ['Adaptable', 'Curious', 'Expressive', 'Quick-witted'],
    strengths: 'Versatility, intellect, communication, and charm.',
    weaknesses: 'Inconsistency, indecisiveness, nervousness.',
    compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    luckyNumbers: [5, 7, 14],
    luckyDay: 'Wednesday',
    bodyPart: 'Arms & Lungs',
    season: 'Late Spring',
    description: 'Gemini is the sign of the twins, representing duality and versatility. Ruled by Mercury, Geminis are natural communicators who thrive on intellectual stimulation and social connections.'
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    emoji: '🦀',
    element: 'Water',
    quality: 'Cardinal',
    rulingPlanet: 'Moon',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    color: '#94A3B8',
    traits: ['Intuitive', 'Nurturing', 'Protective', 'Empathetic'],
    strengths: 'Loyalty, emotional depth, imagination, and tenacity.',
    weaknesses: 'Moodiness, over-sensitivity, clinging to the past.',
    compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    luckyNumbers: [2, 3, 15],
    luckyDay: 'Monday',
    bodyPart: 'Chest & Stomach',
    season: 'Early Summer',
    description: 'Cancer is the nurturer of the zodiac, deeply connected to home and family. Ruled by the Moon, Cancer individuals are highly intuitive and emotionally rich, creating deep bonds with loved ones.'
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    emoji: '🦁',
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    color: '#F97316',
    traits: ['Charismatic', 'Generous', 'Warm-hearted', 'Creative'],
    strengths: 'Leadership, confidence, creativity, and generosity.',
    weaknesses: 'Arrogance, stubbornness, need for attention.',
    compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    luckyNumbers: [1, 3, 10],
    luckyDay: 'Sunday',
    bodyPart: 'Heart & Spine',
    season: 'Mid Summer',
    description: 'Leo is the king of the zodiac, radiating warmth and confidence. Ruled by the Sun, Leos are natural performers and leaders who inspire others with their passion and generosity.'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    emoji: '👼',
    element: 'Earth',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    color: '#65A30D',
    traits: ['Analytical', 'Meticulous', 'Humble', 'Practical'],
    strengths: 'Attention to detail, reliability, kindness, and hard work.',
    weaknesses: 'Over-critical, perfectionism, excessive worry.',
    compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    luckyNumbers: [5, 14, 23],
    luckyDay: 'Wednesday',
    bodyPart: 'Digestive System',
    season: 'Late Summer',
    description: 'Virgo is the healer and perfectionist of the zodiac. Ruled by Mercury, Virgos have a keen analytical mind and a deep desire to serve and improve the world around them.'
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    emoji: '⚖️',
    element: 'Air',
    quality: 'Cardinal',
    rulingPlanet: 'Venus',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    color: '#EC4899',
    traits: ['Diplomatic', 'Fair-minded', 'Social', 'Gracious'],
    strengths: 'Diplomacy, fairness, partnership, and charm.',
    weaknesses: 'Indecisiveness, avoidance of confrontation, self-pity.',
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    luckyNumbers: [4, 6, 13],
    luckyDay: 'Friday',
    bodyPart: 'Lower Back & Kidneys',
    season: 'Early Autumn',
    description: 'Libra is the sign of balance and harmony. Ruled by Venus, Libras are natural peacemakers who seek beauty, justice, and meaningful partnerships in all aspects of life.'
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    emoji: '🦂',
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Pluto & Mars',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    color: '#991B1B',
    traits: ['Passionate', 'Resourceful', 'Brave', 'Mysterious'],
    strengths: 'Determination, bravery, loyalty, and emotional depth.',
    weaknesses: 'Jealousy, secretiveness, intensity.',
    compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    luckyNumbers: [8, 11, 18],
    luckyDay: 'Tuesday',
    bodyPart: 'Reproductive System',
    season: 'Mid Autumn',
    description: 'Scorpio is the most intense and transformative sign. Ruled by Pluto, Scorpios possess incredible depth, emotional power, and the ability to rise from any challenge like the phoenix.'
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    emoji: '🏹',
    element: 'Fire',
    quality: 'Mutable',
    rulingPlanet: 'Jupiter',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    color: '#7C3AED',
    traits: ['Adventurous', 'Optimistic', 'Philosophical', 'Free-spirited'],
    strengths: 'Optimism, love of freedom, humor, and generosity.',
    weaknesses: 'Impatience, bluntness, overconfidence.',
    compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    luckyNumbers: [3, 7, 9],
    luckyDay: 'Thursday',
    bodyPart: 'Hips & Thighs',
    season: 'Late Autumn',
    description: 'Sagittarius is the explorer and philosopher of the zodiac. Ruled by Jupiter, the planet of expansion, Sagittarians are driven by a quest for knowledge, truth, and meaningful adventures.'
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    emoji: '🐐',
    element: 'Earth',
    quality: 'Cardinal',
    rulingPlanet: 'Saturn',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    color: '#475569',
    traits: ['Ambitious', 'Disciplined', 'Responsible', 'Patient'],
    strengths: 'Discipline, self-control, responsibility, and wisdom.',
    weaknesses: 'Pessimism, rigidity, workaholic tendencies.',
    compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    luckyNumbers: [4, 8, 13],
    luckyDay: 'Saturday',
    bodyPart: 'Knees & Bones',
    season: 'Early Winter',
    description: 'Capricorn is the achiever of the zodiac, climbing steadily toward their goals. Ruled by Saturn, Capricorns embody discipline, patience, and the wisdom that comes from perseverance.'
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    emoji: '🏺',
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Uranus & Saturn',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    color: '#0EA5E9',
    traits: ['Innovative', 'Humanitarian', 'Independent', 'Visionary'],
    strengths: 'Originality, independence, humanitarian spirit, and intellect.',
    weaknesses: 'Emotional detachment, stubbornness, unpredictability.',
    compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    luckyNumbers: [4, 7, 11],
    luckyDay: 'Saturday',
    bodyPart: 'Ankles & Circulation',
    season: 'Mid Winter',
    description: 'Aquarius is the visionary and rebel of the zodiac. Ruled by Uranus, Aquarians are forward-thinking humanitarians who march to the beat of their own drum and dream of a better world.'
  },
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    emoji: '🐟',
    element: 'Water',
    quality: 'Mutable',
    rulingPlanet: 'Neptune & Jupiter',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    color: '#6366F1',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle'],
    strengths: 'Compassion, artistic talent, intuition, and wisdom.',
    weaknesses: 'Over-sensitivity, escapism, idealism.',
    compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    luckyNumbers: [3, 9, 12],
    luckyDay: 'Thursday',
    bodyPart: 'Feet & Immune System',
    season: 'Late Winter',
    description: 'Pisces is the dreamer and mystic of the zodiac. Ruled by Neptune, Pisces individuals possess profound empathy, creativity, and a deep connection to the spiritual realm.'
  }
];

/**
 * getZodiacSign
 * Determines the zodiac sign based on day and month.
 * 
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @returns {object|null} - The zodiac sign object or null
 */
export const getZodiacSign = (day, month) => {
  const sign = ZODIAC_SIGNS.find(z => {
    // Handle signs that cross year boundary (Capricorn: Dec 22 - Jan 19)
    if (z.startMonth > z.endMonth) {
      return (
        (month === z.startMonth && day >= z.startDay) ||
        (month === z.endMonth && day <= z.endDay)
      );
    }
    
    return (
      (month === z.startMonth && day >= z.startDay) ||
      (month === z.endMonth && day <= z.endDay)
    );
  });

  return sign || null;
};

/**
 * getZodiacById
 * Finds a zodiac sign by its ID.
 * 
 * @param {string} id - Zodiac sign ID (e.g., 'aries')
 * @returns {object|null}
 */
export const getZodiacById = (id) => {
  return ZODIAC_SIGNS.find(z => z.id === id) || null;
};

/**
 * getZodiacByName
 * Finds a zodiac sign by its name.
 * 
 * @param {string} name - Zodiac sign name (e.g., 'Aries')
 * @returns {object|null}
 */
export const getZodiacByName = (name) => {
  return ZODIAC_SIGNS.find(z => z.name.toLowerCase() === name.toLowerCase()) || null;
};

/**
 * getCompatibleSigns
 * Returns compatible signs for a given zodiac.
 * 
 * @param {string} id - Zodiac sign ID
 * @returns {Array} - Array of compatible sign objects
 */
export const getCompatibleSigns = (id) => {
  const sign = getZodiacById(id);
  if (!sign) return [];

  return sign.compatibility.map(name => getZodiacByName(name)).filter(Boolean);
};

/**
 * getElementSigns
 * Returns all signs of a specific element.
 * 
 * @param {string} element - 'Fire', 'Earth', 'Air', or 'Water'
 * @returns {Array}
 */
export const getElementSigns = (element) => {
  return ZODIAC_SIGNS.filter(z => z.element === element);
};

/**
 * ELEMENTS
 * Element metadata for UI display.
 */
export const ELEMENTS = {
  Fire: {
    color: '#EF4444',
    icon: '🔥',
    description: 'Passionate, dynamic, and temperamental'
  },
  Earth: {
    color: '#22C55E',
    icon: '🌍',
    description: 'Grounded, practical, and reliable'
  },
  Air: {
    color: '#3B82F6',
    icon: '💨',
    description: 'Intellectual, communicative, and social'
  },
  Water: {
    color: '#6366F1',
    icon: '💧',
    description: 'Intuitive, emotional, and sensitive'
  }
};

export default {
  ZODIAC_SIGNS,
  ELEMENTS,
  getZodiacSign,
  getZodiacById,
  getZodiacByName,
  getCompatibleSigns,
  getElementSigns
};
