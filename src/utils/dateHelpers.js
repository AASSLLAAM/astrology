/**
 * Date Helpers
 * Utility functions for date operations throughout the app.
 */

/**
 * formatDate
 * Formats a date string or Date object into a human-readable format.
 * 
 * @param {string|Date} date - Date to format
 * @param {string} format - 'short', 'long', 'full', 'relative'
 * @returns {string}
 * 
 * @example
 * formatDate('2000-05-15', 'long') => 'May 15, 2000'
 * formatDate(new Date(), 'short') => '05/15/2000'
 */
export const formatDate = (date, format = 'long') => {
  if (!date) return '';
  
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(d.getTime())) return '';

  switch (format) {
    case 'short':
      return d.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });

    case 'long':
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

    case 'full':
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

    case 'month-day':
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
      });

    case 'time':
      return d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

    case 'iso':
      return d.toISOString().split('T')[0];

    case 'relative':
      return getRelativeTime(d);

    default:
      return d.toLocaleDateString();
  }
};

/**
 * getRelativeTime
 * Returns a human-readable relative time string.
 * 
 * @param {Date} date - The date to compare against now
 * @returns {string}
 * 
 * @example
 * getRelativeTime(twoHoursAgo) => '2 hours ago'
 */
export const getRelativeTime = (date) => {
  const now = new Date();
  const d = typeof date === 'string' ? new Date(date) : date;
  const diffMs = now.getTime() - d.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffSeconds < 60) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffWeeks === 1) return '1 week ago';
  if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
  if (diffMonths === 1) return '1 month ago';
  if (diffMonths < 12) return `${diffMonths} months ago`;
  
  return formatDate(d, 'long');
};

/**
 * calculateAge
 * Calculates age from a date of birth.
 * 
 * @param {string|Date} dob - Date of birth
 * @returns {number} - Age in years
 */
export const calculateAge = (dob) => {
  if (!dob) return 0;

  const birthDate = typeof dob === 'string' ? new Date(dob) : dob;
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

/**
 * isToday
 * Checks if a date is today.
 * 
 * @param {string|Date} date
 * @returns {boolean}
 */
export const isToday = (date) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();

  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
};

/**
 * isFutureDate
 * Checks if a date is in the future.
 * 
 * @param {string|Date} date
 * @returns {boolean}
 */
export const isFutureDate = (date) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return d > now;
};

/**
 * getTodayString
 * Returns today's date as an ISO string (YYYY-MM-DD).
 * 
 * @returns {string}
 */
export const getTodayString = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * getDayOfWeek
 * Returns the day name for a given date.
 * 
 * @param {string|Date} date
 * @returns {string}
 */
export const getDayOfWeek = (date) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[d.getDay()];
};

/**
 * getMoonPhase
 * Calculates an approximate moon phase for a given date.
 * Used for spiritual/astrology features.
 * 
 * @param {Date} date - Date to check (defaults to today)
 * @returns {object} - { name, emoji, description }
 */
export const getMoonPhase = (date = new Date()) => {
  // Simplified moon phase calculation
  // Based on a known new moon date and the lunar cycle (~29.53 days)
  const knownNewMoon = new Date('2024-01-11T11:57:00Z');
  const lunarCycle = 29.53058770576;

  const daysSinceNew = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const currentCycleDay = ((daysSinceNew % lunarCycle) + lunarCycle) % lunarCycle;

  const phases = [
    {
      name: 'New Moon',
      emoji: '🌑',
      description: 'A time for new beginnings, setting intentions, and planting seeds for the future.',
      min: 0,
      max: 1.85
    },
    {
      name: 'Waxing Crescent',
      emoji: '🌒',
      description: 'Energy is building. Take the first steps toward your goals with faith and courage.',
      min: 1.85,
      max: 7.38
    },
    {
      name: 'First Quarter',
      emoji: '🌓',
      description: 'A time of action and determination. Face challenges and push through obstacles.',
      min: 7.38,
      max: 11.07
    },
    {
      name: 'Waxing Gibbous',
      emoji: '🌔',
      description: 'Refine your efforts. Adjust and align your actions with your deepest intentions.',
      min: 11.07,
      max: 14.76
    },
    {
      name: 'Full Moon',
      emoji: '🌕',
      description: 'Peak energy and illumination. Celebrate achievements and release what no longer serves you.',
      min: 14.76,
      max: 18.45
    },
    {
      name: 'Waning Gibbous',
      emoji: '🌖',
      description: 'A time for gratitude and sharing wisdom. Reflect on lessons learned.',
      min: 18.45,
      max: 22.14
    },
    {
      name: 'Last Quarter',
      emoji: '🌗',
      description: 'Release and let go. Forgive, surrender, and make space for new energy.',
      min: 22.14,
      max: 25.83
    },
    {
      name: 'Waning Crescent',
      emoji: '🌘',
      description: 'Rest and restore. Honor the quiet before the new cycle begins. Dream and vision.',
      min: 25.83,
      max: 29.53
    }
  ];

  const phase = phases.find(p => currentCycleDay >= p.min && currentCycleDay < p.max) || phases[0];

  return {
    name: phase.name,
    emoji: phase.emoji,
    description: phase.description,
    cycleDay: Math.round(currentCycleDay),
    cyclePercent: Math.round((currentCycleDay / lunarCycle) * 100)
  };
};

/**
 * getSeasonInfo
 * Returns the current season based on the date.
 * 
 * @param {Date} date
 * @returns {object}
 */
export const getSeasonInfo = (date = new Date()) => {
  const month = date.getMonth() + 1;

  const seasons = {
    spring: {
      name: 'Spring',
      emoji: '🌸',
      months: [3, 4, 5],
      energy: 'Renewal, growth, and new beginnings'
    },
    summer: {
      name: 'Summer',
      emoji: '☀️',
      months: [6, 7, 8],
      energy: 'Vitality, abundance, and expression'
    },
    autumn: {
      name: 'Autumn',
      emoji: '🍂',
      months: [9, 10, 11],
      energy: 'Harvest, reflection, and release'
    },
    winter: {
      name: 'Winter',
      emoji: '❄️',
      months: [12, 1, 2],
      energy: 'Rest, introspection, and transformation'
    }
  };

  for (const [key, season] of Object.entries(seasons)) {
    if (season.months.includes(month)) {
      return season;
    }
  }

  return seasons.spring;
};

/**
 * getMaxDate
 * Returns today's date as a max value for date inputs (prevent future dates).
 * 
 * @returns {string} - YYYY-MM-DD format
 */
export const getMaxDate = () => {
  return getTodayString();
};

/**
 * getMinDate
 * Returns a reasonable minimum date for date of birth (120 years ago).
 * 
 * @returns {string} - YYYY-MM-DD format
 */
export const getMinDate = () => {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 120);
  return d.toISOString().split('T')[0];
};

export default {
  formatDate,
  getRelativeTime,
  calculateAge,
  isToday,
  isFutureDate,
  getTodayString,
  getDayOfWeek,
  getMoonPhase,
  getSeasonInfo,
  getMaxDate,
  getMinDate
};
