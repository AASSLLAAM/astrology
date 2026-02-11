/**
 * Error Handler
 * Centralized error handling with user-friendly messages.
 * Integrates with the translation system for multi-language support.
 */

/**
 * ERROR_TYPES
 * Categorized error types for consistent handling.
 */
export const ERROR_TYPES = {
  NETWORK: 'network',
  API: 'api',
  VALIDATION: 'validation',
  AUTH: 'auth',
  IMAGE: 'image',
  PALM_DETECTION: 'palm_detection',
  STORAGE: 'storage',
  UNKNOWN: 'unknown'
};

/**
 * ERROR_CODES
 * Specific error codes for detailed error tracking.
 */
export const ERROR_CODES = {
  // Network Errors
  NO_INTERNET: 'NO_INTERNET',
  TIMEOUT: 'TIMEOUT',
  CONNECTION_REFUSED: 'CONNECTION_REFUSED',
  
  // API Errors
  API_ERROR: 'API_ERROR',
  RATE_LIMITED: 'RATE_LIMITED',
  INVALID_RESPONSE: 'INVALID_RESPONSE',
  API_KEY_INVALID: 'API_KEY_INVALID',
  API_KEY_MISSING: 'API_KEY_MISSING',
  
  // Image Errors
  IMAGE_TOO_LARGE: 'IMAGE_TOO_LARGE',
  INVALID_FORMAT: 'INVALID_FORMAT',
  IMAGE_PROCESSING: 'IMAGE_PROCESSING',
  NO_HAND_DETECTED: 'NO_HAND_DETECTED',
  
  // Validation Errors
  REQUIRED_FIELD: 'REQUIRED_FIELD',
  INVALID_DATE: 'INVALID_DATE',
  INVALID_INPUT: 'INVALID_INPUT',
  
  // Storage Errors
  STORAGE_FULL: 'STORAGE_FULL',
  STORAGE_UNAVAILABLE: 'STORAGE_UNAVAILABLE',
  
  // General
  UNKNOWN: 'UNKNOWN'
};

/**
 * AppError
 * Custom error class for application-specific errors.
 */
export class AppError extends Error {
  constructor(type, code, message, originalError = null) {
    super(message);
    this.name = 'AppError';
    this.type = type;
    this.code = code;
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
  }
}

/**
 * parseError
 * Analyzes an error and returns a structured AppError.
 * 
 * @param {Error|Response|string} error - The error to parse
 * @returns {AppError}
 */
export const parseError = (error) => {
  // Already an AppError
  if (error instanceof AppError) {
    return error;
  }

  // Network/Fetch errors
  if (error instanceof TypeError) {
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return new AppError(
        ERROR_TYPES.NETWORK,
        ERROR_CODES.NO_INTERNET,
        'Unable to connect. Please check your internet connection.',
        error
      );
    }
  }

  // Timeout errors
  if (error.name === 'AbortError' || error.message?.includes('timeout')) {
    return new AppError(
      ERROR_TYPES.NETWORK,
      ERROR_CODES.TIMEOUT,
      'The request took too long. Please try again.',
      error
    );
  }

  // API Response errors
  if (error.status || error.statusCode) {
    const status = error.status || error.statusCode;
    
    switch (status) {
      case 401:
        return new AppError(
          ERROR_TYPES.AUTH,
          ERROR_CODES.API_KEY_INVALID,
          'Service authentication failed. Please try again later.',
          error
        );
      
      case 403:
        return new AppError(
          ERROR_TYPES.AUTH,
          ERROR_CODES.API_KEY_INVALID,
          'Access denied. Please try again later.',
          error
        );
      
      case 429:
        return new AppError(
          ERROR_TYPES.API,
          ERROR_CODES.RATE_LIMITED,
          'Too many requests. Please wait a moment and try again.',
          error
        );
      
      case 500:
      case 502:
      case 503:
        return new AppError(
          ERROR_TYPES.API,
          ERROR_CODES.API_ERROR,
          'Our cosmic servers are temporarily unavailable. Please try again shortly.',
          error
        );
      
      default:
        return new AppError(
          ERROR_TYPES.API,
          ERROR_CODES.API_ERROR,
          'An unexpected error occurred. Please try again.',
          error
        );
    }
  }

  // String errors
  if (typeof error === 'string') {
    // Check for common error patterns
    if (error.toLowerCase().includes('no hand') || error.toLowerCase().includes('hand not detected')) {
      return new AppError(
        ERROR_TYPES.PALM_DETECTION,
        ERROR_CODES.NO_HAND_DETECTED,
        'Could not detect a hand in the image. Please try again with a clearer photo.',
        null
      );
    }

    if (error.toLowerCase().includes('api key')) {
      return new AppError(
        ERROR_TYPES.AUTH,
        ERROR_CODES.API_KEY_MISSING,
        'Service configuration error. Please contact support.',
        null
      );
    }

    return new AppError(
      ERROR_TYPES.UNKNOWN,
      ERROR_CODES.UNKNOWN,
      error,
      null
    );
  }

  // Generic Error objects
  if (error instanceof Error) {
    return new AppError(
      ERROR_TYPES.UNKNOWN,
      ERROR_CODES.UNKNOWN,
      error.message || 'An unexpected error occurred.',
      error
    );
  }

  // Fallback
  return new AppError(
    ERROR_TYPES.UNKNOWN,
    ERROR_CODES.UNKNOWN,
    'An unexpected error occurred. Please try again.',
    error
  );
};

/**
 * getErrorMessage
 * Returns a user-friendly error message based on error type and code.
 * 
 * @param {AppError|Error} error - The error object
 * @param {string} langCode - Language code for translation
 * @returns {string}
 */
export const getErrorMessage = (error, langCode = 'en') => {
  const appError = error instanceof AppError ? error : parseError(error);
  
  // Translation keys mapping
  const errorMessages = {
    en: {
      [ERROR_CODES.NO_INTERNET]: 'No internet connection. Please check your network and try again.',
      [ERROR_CODES.TIMEOUT]: 'The request took too long. Please try again.',
      [ERROR_CODES.API_ERROR]: 'Our cosmic servers are temporarily busy. Please try again in a moment.',
      [ERROR_CODES.RATE_LIMITED]: 'You\'re moving too fast! Please wait a moment before trying again.',
      [ERROR_CODES.API_KEY_INVALID]: 'Service temporarily unavailable. Please try again later.',
      [ERROR_CODES.API_KEY_MISSING]: 'Service configuration error. Please contact support.',
      [ERROR_CODES.IMAGE_TOO_LARGE]: 'The image is too large. Please use a smaller image.',
      [ERROR_CODES.INVALID_FORMAT]: 'Invalid image format. Please use JPG, PNG, or WebP.',
      [ERROR_CODES.IMAGE_PROCESSING]: 'Could not process the image. Please try another photo.',
      [ERROR_CODES.NO_HAND_DETECTED]: 'Could not detect a hand in the image. Please try again with a clearer photo.',
      [ERROR_CODES.STORAGE_FULL]: 'Storage is full. Please clear some space and try again.',
      [ERROR_CODES.STORAGE_UNAVAILABLE]: 'Storage is unavailable. Please enable local storage.',
      [ERROR_CODES.UNKNOWN]: 'Something went wrong. Please try again.'
    },
    hi: {
      [ERROR_CODES.NO_INTERNET]: 'इंटरनेट कनेक्शन नहीं है। कृपया अपना नेटवर्क जांचें।',
      [ERROR_CODES.TIMEOUT]: 'अनुरोध में बहुत समय लगा। कृपया पुनः प्रयास करें।',
      [ERROR_CODES.API_ERROR]: 'सर्वर अस्थायी रूप से व्यस्त है। कृपया थोड़ी देर बाद प्रयास करें।',
      [ERROR_CODES.RATE_LIMITED]: 'कृपया थोड़ा धीरे! एक क्षण प्रतीक्षा करें।',
      [ERROR_CODES.NO_HAND_DETECTED]: 'छवि में हाथ का पता नहीं चला। कृपया स्पष्ट फ़ोटो से पुनः प्रयास करें।',
      [ERROR_CODES.UNKNOWN]: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।'
    },
    es: {
      [ERROR_CODES.NO_INTERNET]: 'Sin conexión a internet. Por favor verifica tu red.',
      [ERROR_CODES.TIMEOUT]: 'La solicitud tardó demasiado. Por favor intenta de nuevo.',
      [ERROR_CODES.API_ERROR]: 'Nuestros servidores están temporalmente ocupados. Intenta más tarde.',
      [ERROR_CODES.RATE_LIMITED]: '¡Vas muy rápido! Espera un momento antes de intentar de nuevo.',
      [ERROR_CODES.NO_HAND_DETECTED]: 'No se detectó una mano en la imagen. Intenta con una foto más clara.',
      [ERROR_CODES.UNKNOWN]: 'Algo salió mal. Por favor intenta de nuevo.'
    },
    fr: {
      [ERROR_CODES.NO_INTERNET]: 'Pas de connexion internet. Vérifiez votre réseau.',
      [ERROR_CODES.TIMEOUT]: 'La demande a pris trop de temps. Veuillez réessayer.',
      [ERROR_CODES.API_ERROR]: 'Nos serveurs sont temporairement occupés. Réessayez plus tard.',
      [ERROR_CODES.RATE_LIMITED]: 'Vous allez trop vite ! Attendez un moment.',
      [ERROR_CODES.NO_HAND_DETECTED]: 'Aucune main détectée dans l\'image. Essayez avec une photo plus claire.',
      [ERROR_CODES.UNKNOWN]: 'Une erreur est survenue. Veuillez réessayer.'
    },
    it: {
      [ERROR_CODES.NO_INTERNET]: 'Nessuna connessione internet. Controlla la tua rete.',
      [ERROR_CODES.TIMEOUT]: 'La richiesta ha impiegato troppo tempo. Riprova.',
      [ERROR_CODES.API_ERROR]: 'I nostri server sono temporaneamente occupati. Riprova più tardi.',
      [ERROR_CODES.RATE_LIMITED]: 'Stai andando troppo veloce! Attendi un momento.',
      [ERROR_CODES.NO_HAND_DETECTED]: 'Nessuna mano rilevata nell\'immagine. Prova con una foto più chiara.',
      [ERROR_CODES.UNKNOWN]: 'Qualcosa è andato storto. Per favore riprova.'
    },
    ko: {
      [ERROR_CODES.NO_INTERNET]: '인터넷 연결이 없습니다. 네트워크를 확인하세요.',
      [ERROR_CODES.TIMEOUT]: '요청 시간이 초과되었습니다. 다시 시도하세요.',
      [ERROR_CODES.API_ERROR]: '서버가 일시적으로 바쁩니다. 잠시 후 다시 시도하세요.',
      [ERROR_CODES.RATE_LIMITED]: '너무 빠릅니다! 잠시 기다려 주세요.',
      [ERROR_CODES.NO_HAND_DETECTED]: '이미지에서 손을 감지할 수 없습니다. 더 선명한 사진으로 다시 시도하세요.',
      [ERROR_CODES.UNKNOWN]: '문제가 발생했습니다. 다시 시도해 주세요.'
    }
  };

  const messages = errorMessages[langCode] || errorMessages.en;
  return messages[appError.code] || messages[ERROR_CODES.UNKNOWN] || appError.message;
};

/**
 * logError
 * Logs error details for debugging (console in dev, could be sent to service in prod).
 * 
 * @param {AppError|Error} error - The error to log
 * @param {string} context - Where the error occurred
 */
export const logError = (error, context = 'Unknown') => {
  const appError = error instanceof AppError ? error : parseError(error);
  
  const logData = {
    context,
    type: appError.type,
    code: appError.code,
    message: appError.message,
    timestamp: appError.timestamp || new Date().toISOString(),
    stack: appError.originalError?.stack || appError.stack
  };

  // In development, log to console
  if (import.meta.env.DEV) {
    console.group(`🔴 Error in ${context}`);
    console.error('Type:', logData.type);
    console.error('Code:', logData.code);
    console.error('Message:', logData.message);
    console.error('Timestamp:', logData.timestamp);
    if (logData.stack) {
      console.error('Stack:', logData.stack);
    }
    console.groupEnd();
  }

  // In production, you could send to an error tracking service
  // Example: sendToErrorService(logData);
  
  return logData;
};

/**
 * handleApiError
 * Specialized handler for API response errors.
 * 
 * @param {Response} response - Fetch API Response object
 * @returns {Promise<AppError>}
 */
export const handleApiError = async (response) => {
  let errorBody = null;
  
  try {
    errorBody = await response.json();
  } catch {
    // Response body is not JSON
  }

  const error = {
    status: response.status,
    statusText: response.statusText,
    body: errorBody
  };

  return parseError(error);
};

/**
 * withErrorHandling
 * Higher-order function to wrap async functions with error handling.
 * 
 * @param {Function} fn - Async function to wrap
 * @param {string} context - Context name for logging
 * @returns {Function}
 */
export const withErrorHandling = (fn, context = 'Unknown') => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      const appError = parseError(error);
      logError(appError, context);
      throw appError;
    }
  };
};

/**
 * isNetworkError
 * Quick check if an error is network-related.
 * 
 * @param {Error} error
 * @returns {boolean}
 */
export const isNetworkError = (error) => {
  const appError = error instanceof AppError ? error : parseError(error);
  return appError.type === ERROR_TYPES.NETWORK;
};

/**
 * isRetryableError
 * Determines if an error should trigger a retry.
 * 
 * @param {Error} error
 * @returns {boolean}
 */
export const isRetryableError = (error) => {
  const appError = error instanceof AppError ? error : parseError(error);
  
  const retryableCodes = [
    ERROR_CODES.TIMEOUT,
    ERROR_CODES.NO_INTERNET,
    ERROR_CODES.API_ERROR,
    ERROR_CODES.RATE_LIMITED
  ];
  
  return retryableCodes.includes(appError.code);
};

export default {
  ERROR_TYPES,
  ERROR_CODES,
  AppError,
  parseError,
  getErrorMessage,
  logError,
  handleApiError,
  withErrorHandling,
  isNetworkError,
  isRetryableError
};
