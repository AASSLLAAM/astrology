/**
 * Tarot Data
 * Complete Major Arcana deck with meanings per category.
 * Used for card selection, display, and AI prompt building.
 */

export const TAROT_CARDS = [
  {
    id: 0,
    name: 'The Fool',
    numeral: '0',
    emoji: '🃏',
    keywords: ['New beginnings', 'Innocence', 'Spontaneity', 'Free spirit'],
    upright: 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation, and believing in the universe.',
    reversed: 'When reversed, The Fool suggests recklessness, risk-taking without thought, being taken advantage of, inconsideration, and a need to be more careful.',
    categories: {
      love: 'A fresh start in romance awaits. Be open to unexpected connections and let your heart lead without fear. New relationships may blossom from the most surprising places.',
      career: 'An exciting new opportunity or career path is emerging. Trust your instincts and take that leap of faith. This is a time for bold beginnings in your professional life.',
      finance: 'A new financial chapter begins. While optimism is wonderful, ensure you balance enthusiasm with practical planning. Fresh starts in investments or savings are favored.',
      growth: 'You are being called to embrace the unknown. Release old patterns and step into a new version of yourself. The universe supports your personal transformation.'
    }
  },
  {
    id: 1,
    name: 'The Magician',
    numeral: 'I',
    emoji: '🎩',
    keywords: ['Manifestation', 'Willpower', 'Skill', 'Resourcefulness'],
    upright: 'The Magician represents the power of manifestation, using your skills and resources wisely, taking action to create the life you desire, and channeling cosmic energy into tangible results.',
    reversed: 'When reversed, The Magician warns of manipulation, poor planning, unused talents, and the gap between intention and action.',
    categories: {
      love: 'You hold the power to manifest the love you desire. Use your charm and authentic self to attract deep connections. Communication is your strongest tool in romance right now.',
      career: 'All the tools for success are already in your hands. Channel your focus and skills into creating the professional reality you envision. Leadership opportunities emerge.',
      finance: 'You have the ability to transform your financial situation. Apply your skills creatively to generate new income streams. Resourcefulness leads to abundance.',
      growth: 'You are discovering your inner power. The universe is showing you that you already possess everything needed for transformation. Align your will with your higher purpose.'
    }
  },
  {
    id: 2,
    name: 'The High Priestess',
    numeral: 'II',
    emoji: '🌙',
    keywords: ['Intuition', 'Mystery', 'Subconscious', 'Inner wisdom'],
    upright: 'The High Priestess represents deep intuition, the subconscious mind, divine feminine energy, mystery, and the wisdom that comes from looking inward rather than outward.',
    reversed: 'When reversed, The High Priestess suggests ignoring your intuition, secrets being revealed, withdrawal from emotions, and disconnection from your inner voice.',
    categories: {
      love: 'Trust your intuition about matters of the heart. There may be hidden feelings or unspoken truths that need to surface. Listen to what your heart already knows.',
      career: 'Your instincts about a work situation are correct. Trust the subtle signs and your inner knowing. Not everything is as it appears on the surface professionally.',
      finance: 'Look beyond the surface of financial decisions. Your intuition is guiding you toward wise choices. Hidden information about an investment or opportunity may soon be revealed.',
      growth: 'Deep spiritual wisdom is awakening within you. Meditation, journaling, and inner reflection are especially powerful now. Trust the quiet voice of your soul.'
    }
  },
  {
    id: 3,
    name: 'The Empress',
    numeral: 'III',
    emoji: '👑',
    keywords: ['Abundance', 'Nature', 'Nurturing', 'Fertility'],
    upright: 'The Empress embodies abundance, beauty, nature, nurturing energy, creativity, and the fertile ground from which all things grow. She represents comfort and sensual pleasures.',
    reversed: 'When reversed, The Empress indicates creative block, dependence on others, neglecting self-care, and feeling disconnected from nature and your own nurturing instincts.',
    categories: {
      love: 'Love is flourishing abundantly. Nurture your relationships with warmth and care. Romance is enhanced by creating beautiful, comfortable spaces together. Deep emotional fulfillment awaits.',
      career: 'Creativity and productivity are at their peak. Projects you nurture now will bear beautiful fruit. Collaborative, nurturing leadership brings the best results.',
      finance: 'A period of financial abundance and growth approaches. Investments planted earlier are beginning to bloom. Focus on creating sustainable wealth through patient cultivation.',
      growth: 'Connect with nature and your creative spirit. Self-care and self-love are not luxuries but necessities for your growth. You are blooming into a more beautiful version of yourself.'
    }
  },
  {
    id: 4,
    name: 'The Emperor',
    numeral: 'IV',
    emoji: '🏛️',
    keywords: ['Authority', 'Structure', 'Stability', 'Leadership'],
    upright: 'The Emperor represents authority, structure, a solid foundation, discipline, and the power that comes from taking responsibility and establishing order in your life.',
    reversed: 'When reversed, The Emperor warns of rigidity, excessive control, domination, inflexibility, and the misuse of power or authority.',
    categories: {
      love: 'Stability and commitment are the foundation of your love life now. Building secure, structured relationships brings deep satisfaction. A protective and loyal partner energy is present.',
      career: 'Take charge of your professional direction. Leadership, organization, and strategic planning will elevate your career. Establish your authority with wisdom and fairness.',
      finance: 'Financial discipline and structure lead to long-term security. Create budgets, set goals, and build a solid foundation. Conservative, well-planned investments are favored.',
      growth: 'Establish healthy boundaries and create structure in your personal life. Self-discipline is your path to freedom. Take responsibility for your own growth journey.'
    }
  },
  {
    id: 5,
    name: 'The Hierophant',
    numeral: 'V',
    emoji: '📿',
    keywords: ['Tradition', 'Wisdom', 'Spiritual guidance', 'Conformity'],
    upright: 'The Hierophant represents spiritual wisdom, religious beliefs, conformity, tradition, and institutions. He is the bridge between the earthly and the divine.',
    reversed: 'When reversed, The Hierophant suggests challenging tradition, unconventional approaches, freedom from dogma, and personal beliefs over institutional ones.',
    categories: {
      love: 'Traditional values and commitment deepen your relationships. Consider what wisdom from the past can guide your love life. Shared beliefs and values strengthen your bond.',
      career: 'Seek guidance from mentors or established institutions. Following proven methods and traditional paths leads to success. Education or certifications may advance your career.',
      finance: 'Conservative financial approaches are favored. Seek advice from experienced financial advisors. Traditional investments and time-tested strategies build lasting wealth.',
      growth: 'Explore spiritual traditions and teachings. A teacher or guide may appear to support your journey. Finding meaning in rituals and established wisdom brings deep inner peace.'
    }
  },
  {
    id: 6,
    name: 'The Lovers',
    numeral: 'VI',
    emoji: '💕',
    keywords: ['Union', 'Choice', 'Harmony', 'Alignment'],
    upright: 'The Lovers represent deep connections, important choices, harmony, alignment of values, and the union of opposites. This card speaks to the power of love and meaningful partnership.',
    reversed: 'When reversed, The Lovers warn of disharmony, imbalance, misalignment, poor choices in relationships, and internal conflict between head and heart.',
    categories: {
      love: 'A profound romantic connection is highlighted. This may be a soulmate-level bond or a significant choice about your love life. Follow your heart while honoring your values.',
      career: 'An important career choice lies ahead. Align your work with your personal values and passions. Partnerships and collaborations are especially powerful now.',
      finance: 'Financial choices should align with your core values. Partnerships or joint ventures are highlighted. Choose financial paths that bring both material and emotional fulfillment.',
      growth: 'Integration of your inner masculine and feminine energies brings wholeness. Important life choices are guided by your deepest values. Self-love is the foundation of all love.'
    }
  },
  {
    id: 7,
    name: 'The Chariot',
    numeral: 'VII',
    emoji: '🏎️',
    keywords: ['Determination', 'Victory', 'Willpower', 'Control'],
    upright: 'The Chariot represents determination, willpower, victory through focus, overcoming obstacles, and the triumph that comes from aligning your inner forces toward a single goal.',
    reversed: 'When reversed, The Chariot indicates lack of direction, aggression, scattered energy, obstacles blocking progress, and losing control of a situation.',
    categories: {
      love: 'Take the reins of your romantic life with confidence. Determination and clear direction lead to relationship victory. Overcome any obstacles in love with focused energy.',
      career: 'Career momentum is building powerfully. Your determination will break through any professional barriers. Victory is assured when you stay focused and disciplined.',
      finance: 'Financial progress accelerates through focused action. Stay determined in your financial goals and don\'t let obstacles deter you. Victory over financial challenges is near.',
      growth: 'You are conquering inner battles and moving forward with purpose. Harness your willpower to overcome old habits. You are the charioteer of your own destiny.'
    }
  },
  {
    id: 8,
    name: 'Strength',
    numeral: 'VIII',
    emoji: '🦁',
    keywords: ['Courage', 'Inner strength', 'Compassion', 'Patience'],
    upright: 'Strength represents inner power, courage, patience, compassion, and the quiet confidence that comes from knowing you can handle whatever life presents.',
    reversed: 'When reversed, Strength suggests self-doubt, weakness, insecurity, raw emotion, and needing to reconnect with your inner courage.',
    categories: {
      love: 'Gentle strength and patience deepen your romantic connections. Approach love with compassion rather than force. Your inner confidence is deeply attractive to others.',
      career: 'Quiet confidence and persistent effort lead to professional success. Lead with compassion and patience. Your inner strength inspires colleagues and opens doors.',
      finance: 'Patient, steady financial management yields great results. Have the courage to make important money decisions. Inner confidence helps you negotiate better outcomes.',
      growth: 'True strength comes from within. Embrace your vulnerabilities as sources of power. Patience with yourself during transformation is essential. You are stronger than you realize.'
    }
  },
  {
    id: 9,
    name: 'The Hermit',
    numeral: 'IX',
    emoji: '🏔️',
    keywords: ['Solitude', 'Inner guidance', 'Reflection', 'Wisdom'],
    upright: 'The Hermit represents a period of solitude, inner reflection, seeking deeper truth, and the wisdom that comes from stepping away from the noise of the world.',
    reversed: 'When reversed, The Hermit suggests isolation, loneliness, withdrawal, refusing guidance, and avoiding necessary self-reflection.',
    categories: {
      love: 'Take time for inner reflection about your romantic needs. Solitude helps clarify what you truly desire in a partner. Healing old wounds creates space for deeper love.',
      career: 'Step back to gain perspective on your career path. Quiet contemplation reveals your true professional calling. Sometimes wisdom means knowing when to pause.',
      finance: 'Reflect carefully before making financial decisions. Seek inner guidance rather than following the crowd. A thoughtful, researched approach to money serves you well.',
      growth: 'A period of meaningful solitude supports deep personal growth. Meditation and introspection reveal your inner light. The answers you seek are already within you.'
    }
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    numeral: 'X',
    emoji: '🎡',
    keywords: ['Cycles', 'Destiny', 'Change', 'Luck'],
    upright: 'The Wheel of Fortune represents the cycles of life, destiny in motion, turning points, good luck, and the understanding that change is the only constant.',
    reversed: 'When reversed, The Wheel suggests resistance to change, bad luck, delays, and feeling stuck in negative cycles.',
    categories: {
      love: 'The wheel of romantic destiny is turning in your favor. Unexpected changes bring positive shifts in love. Trust that the universe is aligning you with the right connections.',
      career: 'A fortunate turning point in your career approaches. Destiny is at work behind the scenes. Be ready to seize opportunities as the wheel turns in your direction.',
      finance: 'Financial fortune is shifting positively. Lucky breaks and unexpected opportunities for wealth may appear. The cycle of abundance is beginning to turn your way.',
      growth: 'Life is cyclical, and you are entering a new, more enlightened phase. Embrace the changes as gifts from the universe. Your destiny is unfolding exactly as it should.'
    }
  },
  {
    id: 11,
    name: 'Justice',
    numeral: 'XI',
    emoji: '⚖️',
    keywords: ['Fairness', 'Truth', 'Balance', 'Accountability'],
    upright: 'Justice represents fairness, truth, cause and effect, accountability, and the understanding that our actions have consequences that ultimately bring balance.',
    reversed: 'When reversed, Justice warns of unfairness, dishonesty, lack of accountability, bias, and avoiding consequences.',
    categories: {
      love: 'Balance and fairness are essential in your relationships now. Honest communication resolves conflicts. Karmic connections may be bringing important lessons in love.',
      career: 'Fairness and ethical behavior lead to professional rewards. Legal matters may be resolved in your favor. Your honest efforts are being recognized and rewarded.',
      finance: 'Financial fairness and balance are highlighted. Debts may be settled, and fair returns on investments are expected. Ethical financial practices bring lasting prosperity.',
      growth: 'Honest self-assessment accelerates your growth. Take responsibility for your choices and their consequences. Inner balance comes from aligning actions with values.'
    }
  },
  {
    id: 12,
    name: 'The Hanged Man',
    numeral: 'XII',
    emoji: '🙃',
    keywords: ['Surrender', 'New perspective', 'Letting go', 'Pause'],
    upright: 'The Hanged Man represents seeing things from a new perspective, surrendering to the moment, letting go of control, and finding wisdom in stillness and patience.',
    reversed: 'When reversed, The Hanged Man suggests stalling, resistance to necessary sacrifice, indecision, and refusing to see things differently.',
    categories: {
      love: 'Surrender your expectations about how love should look. A shift in perspective reveals deeper beauty in your relationships. Letting go of control allows love to flow naturally.',
      career: 'Pause and view your career from a completely new angle. What seems like a delay is actually preparation. Surrendering old professional identities opens new pathways.',
      finance: 'Release attachment to specific financial outcomes. A different perspective on money brings unexpected insights. Sometimes financial pause leads to greater future gains.',
      growth: 'Surrender is not weakness but wisdom. Viewing your life from a new angle reveals hidden gifts. This pause in action is actually profound inner movement.'
    }
  },
  {
    id: 13,
    name: 'Death',
    numeral: 'XIII',
    emoji: '🦋',
    keywords: ['Transformation', 'Endings', 'Renewal', 'Release'],
    upright: 'Death represents transformation, the end of one chapter and the beginning of another, release of what no longer serves you, and the beautiful renewal that follows every ending.',
    reversed: 'When reversed, Death suggests resistance to change, fear of endings, stagnation, and inability to move forward.',
    categories: {
      love: 'A powerful transformation in your love life is occurring. Old relationship patterns are ending to make way for deeper, more authentic connections. Embrace this beautiful metamorphosis.',
      career: 'A significant career transformation is underway. Old roles or paths are ending, creating space for more aligned opportunities. Trust the process of professional evolution.',
      finance: 'Your financial approach is undergoing a necessary transformation. Old money habits are falling away. From this ending, a more prosperous relationship with abundance emerges.',
      growth: 'You are experiencing a profound personal transformation. The old you is gracefully giving way to a more evolved version. Like the butterfly, your transformation is beautiful.'
    }
  },
  {
    id: 14,
    name: 'Temperance',
    numeral: 'XIV',
    emoji: '🌈',
    keywords: ['Balance', 'Moderation', 'Patience', 'Harmony'],
    upright: 'Temperance represents balance, moderation, patience, finding middle ground, and the art of blending different aspects of life into a harmonious whole.',
    reversed: 'When reversed, Temperance warns of imbalance, excess, impatience, and lack of harmony in your approach to life.',
    categories: {
      love: 'Balance and patience strengthen your romantic connections. Blending different needs and desires creates beautiful harmony. Moderation in emotional expression deepens trust.',
      career: 'A balanced approach to work brings the best results. Patience with career progress is rewarded. Finding harmony between ambition and well-being is key.',
      finance: 'Financial moderation and balanced planning create lasting stability. Avoid extremes in spending or saving. A patient, measured approach to wealth building is most effective.',
      growth: 'Finding balance in all areas of your life accelerates inner growth. The middle path holds deep wisdom. Patience with your personal evolution brings lasting transformation.'
    }
  },
  {
    id: 15,
    name: 'The Devil',
    numeral: 'XV',
    emoji: '⛓️',
    keywords: ['Liberation', 'Shadow self', 'Attachment', 'Awareness'],
    upright: 'The Devil represents becoming aware of limiting patterns, understanding attachments, facing your shadow self, and the liberating power of honest self-awareness.',
    reversed: 'When reversed, The Devil suggests breaking free from restrictions, releasing unhealthy attachments, reclaiming personal power, and overcoming limiting beliefs.',
    categories: {
      love: 'Become aware of any unhealthy patterns in your relationships. Liberation comes through honest recognition. Breaking free from limiting beliefs about love opens your heart to true connection.',
      career: 'Recognize what is holding you back professionally. Awareness of limiting career beliefs is the first step to freedom. You have the power to break free from unfulfilling work patterns.',
      finance: 'Examine your relationship with money and material attachment. Awareness of unhealthy financial patterns empowers positive change. True abundance begins with inner freedom.',
      growth: 'Facing your shadow self with compassion brings profound growth. The chains of old patterns can be released. Self-awareness is your greatest tool for liberation and transformation.'
    }
  },
  {
    id: 16,
    name: 'The Tower',
    numeral: 'XVI',
    emoji: '⚡',
    keywords: ['Breakthrough', 'Revelation', 'Awakening', 'Liberation'],
    upright: 'The Tower represents sudden breakthrough, the collapse of false structures, revelation of truth, and the liberating destruction that makes way for authentic rebuilding.',
    reversed: 'When reversed, The Tower suggests avoiding necessary change, fear of upheaval, delaying the inevitable, and resisting transformation.',
    categories: {
      love: 'A sudden revelation may shake your romantic world, but it clears the path for more authentic love. Truth is emerging, and honest foundations will be rebuilt stronger than before.',
      career: 'A sudden shift in your career landscape creates space for something more aligned. What seems like disruption is actually liberation. From this breakthrough, your true calling emerges.',
      finance: 'A financial wake-up call leads to better long-term decisions. Sudden changes in your money situation ultimately serve your highest good. Rebuild on a foundation of truth.',
      growth: 'A powerful awakening is occurring. Old beliefs and false self-images are crumbling. From this breakthrough, your authentic self emerges stronger and more aligned than ever.'
    }
  },
  {
    id: 17,
    name: 'The Star',
    numeral: 'XVII',
    emoji: '⭐',
    keywords: ['Hope', 'Inspiration', 'Renewal', 'Serenity'],
    upright: 'The Star represents hope, inspiration, renewal, serenity, and the beautiful light that shines after every storm. It promises healing and a brighter future ahead.',
    reversed: 'When reversed, The Star suggests lack of faith, discouragement, disconnection from hope, and needing to reconnect with your inner light.',
    categories: {
      love: 'Hope and renewal fill your romantic landscape. A beautiful, soul-nourishing connection awaits. After any storms, your love life is entering a period of serene beauty and deep fulfillment.',
      career: 'Inspiration and renewed hope illuminate your career path. Your professional dreams are being supported by the universe. Stay true to your vision; the stars are aligning for you.',
      finance: 'Financial hope and renewal are on the horizon. After challenging times, a period of abundance and flow begins. Trust that the universe supports your financial well-being.',
      growth: 'You are entering a period of beautiful renewal and hope. Your inner light is shining brighter than ever. Trust your unique gifts and allow your authentic self to inspire others.'
    }
  },
  {
    id: 18,
    name: 'The Moon',
    numeral: 'XVIII',
    emoji: '🌕',
    keywords: ['Intuition', 'Illusion', 'Subconscious', 'Dreams'],
    upright: 'The Moon represents deep intuition, the subconscious mind, dreams, illusions, and the mysterious journey through the unknown that ultimately reveals hidden truth.',
    reversed: 'When reversed, The Moon suggests confusion clearing, overcoming fears, releasing anxiety, and seeing through deception.',
    categories: {
      love: 'Trust your deep intuition about romantic matters. Dreams and subconscious feelings are guiding you. Not everything is as it appears; look beneath the surface of your relationships.',
      career: 'Navigate career uncertainties with your intuition as your guide. Creative and artistic endeavors are especially favored. Trust the process even when the path seems unclear.',
      finance: 'Financial situations may not be entirely clear right now. Trust your instincts and wait for more information before making major decisions. Clarity will come with patience.',
      growth: 'Deep subconscious wisdom is emerging through dreams and intuition. Embrace the mystery of your inner journey. The unknown is not to be feared but explored with curiosity.'
    }
  },
  {
    id: 19,
    name: 'The Sun',
    numeral: 'XIX',
    emoji: '☀️',
    keywords: ['Joy', 'Success', 'Vitality', 'Positivity'],
    upright: 'The Sun represents pure joy, success, vitality, optimism, and the radiant warmth of life lived fully. It is one of the most positive cards in the deck.',
    reversed: 'When reversed, The Sun suggests temporary setbacks, diminished joy, inner child needs attention, and needing to reconnect with simple happiness.',
    categories: {
      love: 'Radiant joy and warmth fill your love life. Relationships are blessed with happiness and vitality. Romance flourishes in the bright light of honest, joyful connection.',
      career: 'Professional success and recognition shine upon you. Your work brings you genuine joy and fulfillment. Confidence and positivity attract wonderful career opportunities.',
      finance: 'Financial abundance and success are highlighted. Your positive approach to money manifests prosperity. This is an excellent time for growth and joyful abundance.',
      growth: 'Your inner light is radiating powerfully. Joy, confidence, and vitality characterize this phase of your growth. Reconnect with your inner child and the simple pleasures of being alive.'
    }
  },
  {
    id: 20,
    name: 'Judgement',
    numeral: 'XX',
    emoji: '📯',
    keywords: ['Awakening', 'Calling', 'Rebirth', 'Purpose'],
    upright: 'Judgement represents a spiritual awakening, answering your higher calling, rebirth, absolution, and the powerful moment of hearing and responding to your life\'s true purpose.',
    reversed: 'When reversed, Judgement suggests self-doubt, ignoring your calling, harsh self-judgment, and refusing to learn from past experiences.',
    categories: {
      love: 'A deeper calling in love is emerging. Past relationship lessons are integrating into wisdom. You are being reborn into a more authentic, fulfilling romantic expression.',
      career: 'You are hearing the call of your true professional purpose. Past career experiences have prepared you for this moment. Answer the call and step into your destined role.',
      finance: 'A financial awakening is occurring. Past money lessons come together to inform wiser decisions. You are being called to a more purposeful relationship with abundance.',
      growth: 'A profound spiritual awakening is happening within you. You are answering your soul\'s deepest calling. All past experiences have been preparation for this powerful moment of rebirth.'
    }
  },
  {
    id: 21,
    name: 'The World',
    numeral: 'XXI',
    emoji: '🌍',
    keywords: ['Completion', 'Achievement', 'Fulfillment', 'Wholeness'],
    upright: 'The World represents completion, accomplishment, wholeness, integration, and the beautiful fulfillment that comes from completing a major cycle of growth and achievement.',
    reversed: 'When reversed, The World suggests incompletion, delays in reaching goals, seeking closure, and needing to complete unfinished business.',
    categories: {
      love: 'A beautiful sense of romantic completion and fulfillment is present. Your love life reaches a harmonious, whole expression. Celebrate the deep connections you have cultivated.',
      career: 'Professional achievement and completion of major goals are celebrated. You are reaching the pinnacle of a career cycle. The world recognizes your accomplishments and contributions.',
      finance: 'Financial wholeness and the achievement of important money goals are highlighted. A major financial cycle completes successfully. Enjoy the abundance you have created.',
      growth: 'You are completing a major cycle of personal evolution. Integration of all your experiences creates a sense of wholeness. Celebrate how far you have come on your beautiful journey.'
    }
  }
];

/**
 * getRandomCards
 * Draws random tarot cards from the deck.
 * 
 * @param {number} count - Number of cards to draw (default 3)
 * @returns {Array} - Array of randomly selected card objects
 */
export const getRandomCards = (count = 3) => {
  const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

/**
 * getCardById
 * Finds a card by its ID number.
 * 
 * @param {number} id - Card ID (0-21)
 * @returns {object|null}
 */
export const getCardById = (id) => {
  return TAROT_CARDS.find(card => card.id === id) || null;
};

/**
 * getCardsByCategory
 * Returns all cards with category-specific meanings.
 * 
 * @param {string} category - 'love', 'career', 'finance', 'growth'
 * @returns {Array}
 */
export const getCardMeaning = (cardId, category) => {
  const card = getCardById(cardId);
  if (!card) return null;
  return card.categories[category] || card.upright;
};

/**
 * TAROT_SPREADS
 * Defines different spread configurations.
 */
export const TAROT_SPREADS = {
  single: {
    name: 'Single Card',
    count: 1,
    positions: ['Your Message']
  },
  threeCard: {
    name: 'Past, Present, Future',
    count: 3,
    positions: ['Past Influence', 'Present Energy', 'Future Potential']
  }
};

export default {
  TAROT_CARDS,
  TAROT_SPREADS,
  getRandomCards,
  getCardById,
  getCardMeaning
};
