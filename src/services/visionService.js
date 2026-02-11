import { translations } from '../utils/translations';

// 🧠 CONFIGURATION
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
// Using a vision-capable model
const MODEL_VISION = 'allenai/molmo-2-8b:free'; 

/**
 * analyzePalmImage
 * Sends a base64 image to the Vision AI to identify palm lines.
 * 
 * @param {string} base64Image - The captured photo encoded in Base64
 * @returns {Promise<Object>} - Structured data about lines (Length, Depth, Shape)
 */
export const analyzePalmImage = async (base64Image) => {
  if (!API_KEY) {
    console.error('❌ Missing API Key for Vision Service');
    throw new Error('API Key missing');
  }

  // 📝 STRICT VISION PROMPT
  // We ask for a JSON-like structure to easily parse in the app
  const visionPrompt = `
    You are an expert Palmist AI. Analyze the attached image of a human palm.
    Identify the main palmistry lines strictly based on visual evidence.
    
    Return the analysis in this specific FORMAT (do not add conversational text):
    
    Heart Line: [Short description of length, curve, and depth]
    Head Line: [Short description of length, curve, and depth]
    Life Line: [Short description of length, curve, and depth]
    Fate Line: [Short description of visibility and path, or "Not visible"]
    Hand Shape: [Square/Rectangular palm with Short/Long fingers]
    Element: [Fire/Earth/Air/Water based on hand shape]

    If the image is NOT a hand, return strictly: "ERROR: NO_HAND_DETECTED"
  `;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'AI Palm Reader Vision'
      },
      body: JSON.stringify({
        model: MODEL_VISION,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: visionPrompt },
              { type: "image_url", image_url: { url: base64Image } }
            ]
          }
        ],
        max_tokens: 300
      })
    });

    if (!response.ok) {
      throw new Error(`Vision API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const resultText = data.choices[0].message.content;

    // 🕵️ PARSE RESULTS
    if (resultText.includes("NO_HAND_DETECTED")) {
      throw new Error("Could not detect a clear hand. Please try again with better lighting.");
    }

    return parseVisionResult(resultText);

  } catch (error) {
    console.error('👁️ Vision Service Error:', error);
    throw error;
  }
};

/**
 * parseVisionResult
 * Converts the raw text response from AI into a structured object.
 */
const parseVisionResult = (text) => {
  const result = {
    heartLine: "Average length, curved",
    headLine: "Average length, straight",
    lifeLine: "Long, distinct",
    fateLine: "Faint or not visible",
    element: "Earth"
  };

  // Simple extraction logic (robust enough for structured AI output)
  const lines = text.split('\n');
  
  lines.forEach(line => {
    if (line.includes('Heart Line:')) result.heartLine = line.split('Heart Line:')[1].trim();
    if (line.includes('Head Line:')) result.headLine = line.split('Head Line:')[1].trim();
    if (line.includes('Life Line:')) result.lifeLine = line.split('Life Line:')[1].trim();
    if (line.includes('Fate Line:')) result.fateLine = line.split('Fate Line:')[1].trim();
    if (line.includes('Element:')) result.element = line.split('Element:')[1].trim();
  });

  return result;
};
