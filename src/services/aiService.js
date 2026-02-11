import { translations } from '../utils/translations';

// 🧠 CONFIGURATION
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL_TEXT = 'liquid/lfm-2.5-1.2b-thinking:free'; // Optimized for reasoning/text

// 🛡️ STRICT SYSTEM PROMPT GENERATOR
const getSystemPrompt = (languageCode = 'en') => {
  const langName = translations[languageCode]?.languageName || 'English';
  
  return `
    ROLE:
    You are an expert Palm Reader, Astrologer, and Tarot Guide with a calm, mystical, and empathetic personality. 
    You provide deep spiritual insights, focusing on self-reflection, personal growth, and positive energy.
    
    TONE & STYLE:
    - Mystical, soothing, and wise.
    - Empathetic and non-judgmental.
    - Use metaphors related to nature, cosmos, stars, and energy.
    - Structure your answers with clear paragraphs and bullet points if needed.
    - Language: Respond strictly in ${langName}.

    ⛔ STRICT SAFETY & ETHICAL RULES (NEVER BREAK THESE):
    1. NO ABSOLUTE PREDICTIONS: Never say "You will marry at age X" or "You will die on date Y". Instead say "The energy suggests..." or "Potentials indicate...".
    2. NO FEAR-BASED CONTENT: Never predict death, illness, disaster, or divorce. Always frame challenges as "opportunities for growth" or "periods of transformation".
    3. NO MEDICAL/LEGAL ADVICE: If asked about health or law, politely decline and suggest professional help. Say "For physical health matters, please consult a medical professional."
    4. NO CURSES OR BLACK MAGIC: Do not discuss curses, hexes, or negative entities. Focus on light and protection.
    
    OUTPUT FORMAT:
    - Provide long-form, detailed answers (minimum 3-4 paragraphs).
    - Use structure: 
       • "The Energy of the Cards/Stars" (Overview)
       • "Deep Dive" (Specific meanings)
       • "Guidance & Action" (Practical advice)
    
    TASK:
    Analyze the user's query regarding Palmistry, Tarot, or Astrology based on these principles.
  `;
};

/**
 * generateAIResponse
 * Generic function to call OpenRouter API for text-based guidance.
 * 
 * @param {string} userPrompt - The specific question or context from the user.
 * @param {string} language - The user's selected language code.
 * @param {Array} history - Optional conversation history for chat context.
 */
export const generateAIResponse = async (userPrompt, language = 'en', history = []) => {
  if (!API_KEY) {
    console.error('❌ Missing API Key for OpenRouter');
    return { error: 'Service temporarily unavailable. Please check configuration.' };
  }

  try {
    const systemInstruction = getSystemPrompt(language);
    
    const messages = [
      { role: 'system', content: systemInstruction },
      ...history,
      { role: 'user', content: userPrompt }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': window.location.origin, // OpenRouter requirement
        'X-Title': 'AI Palm Reader' // OpenRouter requirement
      },
      body: JSON.stringify({
        model: MODEL_TEXT,
        messages: messages,
        temperature: 0.7, // Balance between creativity and consistency
        max_tokens: 1000, // Allow for long-form answers
        top_p: 0.9
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('🔮 AI Service Error:', error);
    return null; // Handle UI fallback in component
  }
};

/**
 * generatePalmReading
 * Specialized wrapper for palm reading interpretation text.
 * Note: Vision analysis happens in visionService.js, this generates the 'meaning' text.
 */
export const generatePalmReading = async (palmData, language) => {
  const prompt = `
    Analyze these palmistry features found in the user's hand:
    - Heart Line: ${palmData.heartLine}
    - Head Line: ${palmData.headLine}
    - Life Line: ${palmData.lifeLine}
    - Fate Line: ${palmData.fateLine}
    
    Provide a holistic reading interpreting how these lines interact. Focus on emotional style, intellectual approach, and vitality.
  `;
  return generateAIResponse(prompt, language);
};

/**
 * generateTarotReading
 * Specialized wrapper for tarot interpretation.
 */
export const generateTarotReading = async (cards, category, language) => {
  const cardNames = cards.map(c => c.name).join(', ');
  const prompt = `
    I drew these Tarot cards for a reading focused on "${category}": ${cardNames}.
    Interpret the spread. 
    1. Explain the meaning of each card in this context.
    2. How they relate to each other.
    3. What guidance they offer for my ${category}.
  `;
  return generateAIResponse(prompt, language);
};
