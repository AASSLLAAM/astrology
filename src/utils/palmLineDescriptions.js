/**
 * Palm Line Descriptions
 * Detailed palmistry knowledge for Heart, Head, Life, and Fate lines.
 * Each line has descriptions based on various physical characteristics.
 */

export const PALM_LINES = {
  heartLine: {
    name: 'Heart Line',
    emoji: '❤️',
    color: '#EF4444',
    location: 'Runs horizontally across the upper part of the palm, below the fingers.',
    significance: 'Represents emotional expression, romantic style, cardiac health, and the way you connect with others on an emotional level.',
    characteristics: {
      long: {
        label: 'Long & Extended',
        meaning: 'You express emotions freely and openly. You are warm, generous, and deeply connected to others. Your emotional world is rich and fulfilling.',
        traits: ['Emotionally expressive', 'Warm-hearted', 'Deep connections', 'Generous in love']
      },
      short: {
        label: 'Short',
        meaning: 'You tend to be more reserved with your emotions. You value independence and personal space. Your love is expressed through actions rather than words.',
        traits: ['Independent', 'Private', 'Action-oriented love', 'Self-sufficient']
      },
      curved: {
        label: 'Curved Upward',
        meaning: 'You are openly affectionate and expressive in love. You create warm, inviting emotional environments and attract others with your genuine warmth.',
        traits: ['Openly affectionate', 'Romantic', 'Warm energy', 'Emotionally generous']
      },
      straight: {
        label: 'Straight',
        meaning: 'You approach emotions with a rational, balanced perspective. You are thoughtful in your relationships and seek intellectual as well as emotional connections.',
        traits: ['Rational in love', 'Balanced emotions', 'Thoughtful partner', 'Intellectual bonds']
      },
      deep: {
        label: 'Deep & Prominent',
        meaning: 'Your emotional experiences are intense and profound. You feel deeply and form powerful bonds. Your emotional resilience is remarkable.',
        traits: ['Intense emotions', 'Profound bonds', 'Emotionally resilient', 'Passionate']
      },
      faint: {
        label: 'Faint & Thin',
        meaning: 'You have a gentle, sensitive emotional nature. You are empathetic and absorb the feelings of those around you. Your sensitivity is a gift.',
        traits: ['Sensitive', 'Empathetic', 'Gentle nature', 'Intuitive feelings']
      }
    }
  },

  headLine: {
    name: 'Head Line',
    emoji: '🧠',
    color: '#3B82F6',
    location: 'Runs horizontally across the middle of the palm, starting between the thumb and index finger.',
    significance: 'Represents intellectual style, thinking patterns, learning approach, communication skills, and how you process information and make decisions.',
    characteristics: {
      long: {
        label: 'Long & Extended',
        meaning: 'You have a broad, expansive thinking style. You consider many perspectives and enjoy deep, complex intellectual exploration. Your mind is your greatest asset.',
        traits: ['Broad thinker', 'Complex analysis', 'Multi-perspective', 'Intellectual depth']
      },
      short: {
        label: 'Short',
        meaning: 'You are a practical, efficient thinker. You prefer direct, clear communication and make quick, decisive choices. You value simplicity and clarity.',
        traits: ['Practical thinker', 'Decisive', 'Efficient', 'Clear communicator']
      },
      curved: {
        label: 'Curved Downward',
        meaning: 'You have a rich imagination and creative thinking style. You are drawn to artistic, unconventional ideas and see the world through a unique lens.',
        traits: ['Creative thinker', 'Imaginative', 'Artistic mind', 'Unconventional ideas']
      },
      straight: {
        label: 'Straight',
        meaning: 'You are logical, methodical, and analytical in your thinking. You excel at problem-solving and approach challenges with a clear, rational mind.',
        traits: ['Logical', 'Analytical', 'Methodical', 'Problem-solver']
      },
      deep: {
        label: 'Deep & Prominent',
        meaning: 'You have excellent concentration and memory. Your mental focus is powerful, and you can dive deeply into subjects that interest you.',
        traits: ['Excellent focus', 'Strong memory', 'Deep concentration', 'Mental stamina']
      },
      faint: {
        label: 'Faint & Thin',
        meaning: 'You are a flexible, adaptable thinker. You easily shift between ideas and perspectives. Your mental agility allows you to navigate complex social situations.',
        traits: ['Flexible mind', 'Adaptable', 'Quick shifting', 'Social intelligence']
      }
    }
  },

  lifeLine: {
    name: 'Life Line',
    emoji: '🌿',
    color: '#22C55E',
    location: 'Curves around the base of the thumb, starting between the thumb and index finger.',
    significance: 'Represents vitality, life energy, physical health approach, major life changes, and the overall quality and enthusiasm with which you live your life. Note: This line does NOT predict lifespan.',
    characteristics: {
      long: {
        label: 'Long & Extended',
        meaning: 'You have abundant vitality and enthusiasm for life. Your energy reserves are deep, and you approach life with endurance and resilience.',
        traits: ['Abundant vitality', 'Strong endurance', 'Resilient', 'Life enthusiast']
      },
      short: {
        label: 'Short',
        meaning: 'You live in the present moment with focused intensity. You make the most of each day and prioritize quality of experience over quantity.',
        traits: ['Present-focused', 'Intense living', 'Quality over quantity', 'Mindful']
      },
      curved: {
        label: 'Wide Curve',
        meaning: 'You have a strong, energetic approach to life. You are physically active and enjoy movement, adventure, and new experiences. Your zest for life is infectious.',
        traits: ['Energetic', 'Adventurous', 'Physically active', 'Zest for life']
      },
      straight: {
        label: 'Close to Thumb',
        meaning: 'You are cautious and thoughtful in your approach to life. You conserve your energy wisely and prefer well-planned, secure paths forward.',
        traits: ['Cautious', 'Energy-conscious', 'Security-oriented', 'Thoughtful approach']
      },
      deep: {
        label: 'Deep & Prominent',
        meaning: 'You have remarkable physical resilience and vitality. Your life force is strong, and you recover quickly from challenges. You approach life with robust energy.',
        traits: ['Remarkable resilience', 'Strong life force', 'Quick recovery', 'Robust health approach']
      },
      faint: {
        label: 'Faint & Thin',
        meaning: 'You are sensitive to your environment and energy levels. You benefit from mindful self-care and creating nurturing surroundings that support your wellbeing.',
        traits: ['Environmentally sensitive', 'Mindful self-care', 'Nurturing needs', 'Gentle vitality']
      }
    }
  },

  fateLine: {
    name: 'Fate Line',
    emoji: '✨',
    color: '#A855F7',
    location: 'Runs vertically up the center of the palm, from the base toward the middle finger.',
    significance: 'Represents life path direction, career inclination, sense of purpose, and how much you feel guided by destiny versus personal choice. Not everyone has a prominent fate line.',
    characteristics: {
      prominent: {
        label: 'Strong & Clear',
        meaning: 'You have a strong sense of direction and purpose in life. Your career path feels guided, and you know what you are meant to do. Destiny plays a significant role in your journey.',
        traits: ['Strong purpose', 'Clear direction', 'Destiny-guided', 'Career clarity']
      },
      faint: {
        label: 'Faint or Partial',
        meaning: 'You value freedom and flexibility in your life path. You prefer creating your own direction rather than following a predetermined path. You are the author of your own story.',
        traits: ['Self-directed', 'Flexible path', 'Freedom-loving', 'Self-made journey']
      },
      absent: {
        label: 'Not Visible',
        meaning: 'You are a free spirit who resists being confined to a single path. Your life direction changes and evolves fluidly. You create meaning through diverse experiences.',
        traits: ['Free spirit', 'Fluid direction', 'Diverse experiences', 'Self-created meaning']
      },
      broken: {
        label: 'Broken or Segmented',
        meaning: 'Your life path includes significant transitions and reinventions. Each phase of your life brings new purpose and direction. You are adaptable and resilient through change.',
        traits: ['Multiple reinventions', 'Adaptable', 'Transitional phases', 'Evolving purpose']
      },
      deep: {
        label: 'Deep & Prominent',
        meaning: 'Your sense of purpose runs deeply through your being. You feel a strong calling, and your life direction is powerfully guided by inner knowing and cosmic alignment.',
        traits: ['Deep calling', 'Powerful purpose', 'Inner guidance', 'Cosmic alignment']
      },
      forked: {
        label: 'Forked or Branching',
        meaning: 'Multiple paths and opportunities are available to you. You may excel in several areas or experience meaningful career transitions that each bring unique fulfillment.',
        traits: ['Multiple talents', 'Diverse opportunities', 'Career transitions', 'Multi-faceted path']
      }
    }
  }
};

/**
 * getPalmLineInfo
 * Retrieves full information about a specific palm line.
 * 
 * @param {string} lineKey - 'heartLine', 'headLine', 'lifeLine', 'fateLine'
 * @returns {object|null}
 */
export const getPalmLineInfo = (lineKey) => {
  return PALM_LINES[lineKey] || null;
};

/**
 * interpretLineCharacteristic
 * Gets the interpretation for a specific characteristic of a line.
 * 
 * @param {string} lineKey - 'heartLine', 'headLine', etc.
 * @param {string} characteristic - 'long', 'short', 'curved', etc.
 * @returns {object|null}
 */
export const interpretLineCharacteristic = (lineKey, characteristic) => {
  const line = PALM_LINES[lineKey];
  if (!line) return null;
  return line.characteristics[characteristic] || null;
};

/**
 * buildPalmSummary
 * Creates a structured summary object from vision analysis results.
 * Used to pass to AI for detailed interpretation.
 * 
 * @param {object} analysisData - Raw data from visionService
 * @returns {object} - Structured summary
 */
export const buildPalmSummary = (analysisData) => {
  return {
    heartLine: {
      ...PALM_LINES.heartLine,
      observation: analysisData.heartLine || 'Average length, curved',
      interpretation: matchCharacteristic('heartLine', analysisData.heartLine)
    },
    headLine: {
      ...PALM_LINES.headLine,
      observation: analysisData.headLine || 'Average length, straight',
      interpretation: matchCharacteristic('headLine', analysisData.headLine)
    },
    lifeLine: {
      ...PALM_LINES.lifeLine,
      observation: analysisData.lifeLine || 'Long, distinct',
      interpretation: matchCharacteristic('lifeLine', analysisData.lifeLine)
    },
    fateLine: {
      ...PALM_LINES.fateLine,
      observation: analysisData.fateLine || 'Faint or not visible',
      interpretation: matchCharacteristic('fateLine', analysisData.fateLine)
    }
  };
};

/**
 * matchCharacteristic
 * Matches AI vision description text to the closest known characteristic.
 * 
 * @param {string} lineKey - The palm line identifier
 * @param {string} description - The AI-generated description text
 * @returns {object} - The best matching characteristic
 */
const matchCharacteristic = (lineKey, description) => {
  if (!description) return null;
  
  const line = PALM_LINES[lineKey];
  if (!line) return null;

  const lowerDesc = description.toLowerCase();

  // Keyword matching priorities
  const matchMap = {
    heartLine: [
      { keywords: ['long', 'extended', 'reaches'], key: 'long' },
      { keywords: ['short', 'brief'], key: 'short' },
      { keywords: ['curved', 'curving', 'upward', 'arc'], key: 'curved' },
      { keywords: ['straight', 'horizontal', 'flat'], key: 'straight' },
      { keywords: ['deep', 'prominent', 'strong', 'clear', 'thick'], key: 'deep' },
      { keywords: ['faint', 'thin', 'light', 'subtle', 'weak'], key: 'faint' }
    ],
    headLine: [
      { keywords: ['long', 'extended', 'reaches'], key: 'long' },
      { keywords: ['short', 'brief'], key: 'short' },
      { keywords: ['curved', 'curving', 'downward', 'sloping'], key: 'curved' },
      { keywords: ['straight', 'horizontal', 'level'], key: 'straight' },
      { keywords: ['deep', 'prominent', 'strong', 'clear', 'thick'], key: 'deep' },
      { keywords: ['faint', 'thin', 'light', 'subtle', 'weak'], key: 'faint' }
    ],
    lifeLine: [
      { keywords: ['long', 'extended', 'reaches', 'full'], key: 'long' },
      { keywords: ['short', 'brief', 'partial'], key: 'short' },
      { keywords: ['curved', 'wide', 'arc', 'sweeping'], key: 'curved' },
      { keywords: ['straight', 'close', 'narrow', 'tight'], key: 'straight' },
      { keywords: ['deep', 'prominent', 'strong', 'clear', 'thick'], key: 'deep' },
      { keywords: ['faint', 'thin', 'light', 'subtle', 'weak'], key: 'faint' }
    ],
    fateLine: [
      { keywords: ['strong', 'clear', 'prominent', 'defined', 'visible'], key: 'prominent' },
      { keywords: ['faint', 'partial', 'thin', 'light'], key: 'faint' },
      { keywords: ['not visible', 'absent', 'missing', 'none', 'no fate'], key: 'absent' },
      { keywords: ['broken', 'segmented', 'interrupted', 'gaps'], key: 'broken' },
      { keywords: ['deep', 'very prominent', 'thick', 'bold'], key: 'deep' },
      { keywords: ['forked', 'branching', 'split', 'branches'], key: 'forked' }
    ]
  };

  const matches = matchMap[lineKey] || [];

  for (const match of matches) {
    if (match.keywords.some(kw => lowerDesc.includes(kw))) {
      return line.characteristics[match.key] || null;
    }
  }

  // Default fallback: return the first characteristic
  const firstKey = Object.keys(line.characteristics)[0];
  return line.characteristics[firstKey] || null;
};

export default {
  PALM_LINES,
  getPalmLineInfo,
  interpretLineCharacteristic,
  buildPalmSummary
};
