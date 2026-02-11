/**
 * Validators
 * Form validation utilities for user inputs.
 * Returns structured validation results with error messages.
 */

import { LIMITS } from './constants';

/**
 * ValidationResult
 * Standard structure for validation results.
 * 
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid - Whether validation passed
 * @property {string|null} error - Error message if invalid
 */

/**
 * validateName
 * Validates user's name input.
 * 
 * @param {string} name - Name to validate
 * @param {string} langCode - Language code for error messages
 * @returns {ValidationResult}
 */
export const validateName = (name, langCode = 'en') => {
  const errors = {
    en: {
      required: 'Please enter your name',
      tooShort: `Name must be at least ${LIMITS.MIN_NAME_LENGTH} characters`,
      tooLong: `Name cannot exceed ${LIMITS.MAX_NAME_LENGTH} characters`,
      invalid: 'Name contains invalid characters'
    },
    hi: {
      required: 'कृपया अपना नाम दर्ज करें',
      tooShort: `नाम कम से कम ${LIMITS.MIN_NAME_LENGTH} अक्षरों का होना चाहिए`,
      tooLong: `नाम ${LIMITS.MAX_NAME_LENGTH} अक्षरों से अधिक नहीं हो सकता`,
      invalid: 'नाम में अमान्य अक्षर हैं'
    },
    es: {
      required: 'Por favor ingresa tu nombre',
      tooShort: `El nombre debe tener al menos ${LIMITS.MIN_NAME_LENGTH} caracteres`,
      tooLong: `El nombre no puede exceder ${LIMITS.MAX_NAME_LENGTH} caracteres`,
      invalid: 'El nombre contiene caracteres inválidos'
    },
    fr: {
      required: 'Veuillez entrer votre nom',
      tooShort: `Le nom doit contenir au moins ${LIMITS.MIN_NAME_LENGTH} caractères`,
      tooLong: `Le nom ne peut pas dépasser ${LIMITS.MAX_NAME_LENGTH} caractères`,
      invalid: 'Le nom contient des caractères invalides'
    },
    it: {
      required: 'Per favore inserisci il tuo nome',
      tooShort: `Il nome deve avere almeno ${LIMITS.MIN_NAME_LENGTH} caratteri`,
      tooLong: `Il nome non può superare ${LIMITS.MAX_NAME_LENGTH} caratteri`,
      invalid: 'Il nome contiene caratteri non validi'
    },
    ko: {
      required: '이름을 입력해 주세요',
      tooShort: `이름은 최소 ${LIMITS.MIN_NAME_LENGTH}자 이상이어야 합니다`,
      tooLong: `이름은 ${LIMITS.MAX_NAME_LENGTH}자를 초과할 수 없습니다`,
      invalid: '이름에 잘못된 문자가 포함되어 있습니다'
    }
  };

  const msg = errors[langCode] || errors.en;

  // Trim whitespace
  const trimmedName = (name || '').trim();

  // Required check
  if (!trimmedName) {
    return { isValid: false, error: msg.required };
  }

  // Length checks
  if (trimmedName.length < LIMITS.MIN_NAME_LENGTH) {
    return { isValid: false, error: msg.tooShort };
  }

  if (trimmedName.length > LIMITS.MAX_NAME_LENGTH) {
    return { isValid: false, error: msg.tooLong };
  }

  // Character validation (allows letters, spaces, hyphens, apostrophes, and unicode letters)
  const nameRegex = /^[\p{L}\p{M}'\-\s]+$/u;
  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, error: msg.invalid };
  }

  return { isValid: true, error: null };
};

/**
 * validateDateOfBirth
 * Validates date of birth input.
 * 
 * @param {string|Date} dob - Date of birth to validate
 * @param {string} langCode - Language code for error messages
 * @returns {ValidationResult}
 */
export const validateDateOfBirth = (dob, langCode = 'en') => {
  const errors = {
    en: {
      required: 'Please select your date of birth',
      invalid: 'Please enter a valid date',
      future: 'Date of birth cannot be in the future',
      tooOld: 'Please enter a valid date of birth',
      tooYoung: 'You must be at least 13 years old to use this app'
    },
    hi: {
      required: 'कृपया अपनी जन्म तिथि चुनें',
      invalid: 'कृपया एक वैध तिथि दर्ज करें',
      future: 'जन्म तिथि भविष्य में नहीं हो सकती',
      tooOld: 'कृपया एक वैध जन्म तिथि दर्ज करें',
      tooYoung: 'इस ऐप का उपयोग करने के लिए आपकी उम्र कम से कम 13 वर्ष होनी चाहिए'
    },
    es: {
      required: 'Por favor selecciona tu fecha de nacimiento',
      invalid: 'Por favor ingresa una fecha válida',
      future: 'La fecha de nacimiento no puede ser en el futuro',
      tooOld: 'Por favor ingresa una fecha de nacimiento válida',
      tooYoung: 'Debes tener al menos 13 años para usar esta app'
    },
    fr: {
      required: 'Veuillez sélectionner votre date de naissance',
      invalid: 'Veuillez entrer une date valide',
      future: 'La date de naissance ne peut pas être dans le futur',
      tooOld: 'Veuillez entrer une date de naissance valide',
      tooYoung: 'Vous devez avoir au moins 13 ans pour utiliser cette app'
    },
    it: {
      required: 'Per favore seleziona la tua data di nascita',
      invalid: 'Per favore inserisci una data valida',
      future: 'La data di nascita non può essere nel futuro',
      tooOld: 'Per favore inserisci una data di nascita valida',
      tooYoung: 'Devi avere almeno 13 anni per usare questa app'
    },
    ko: {
      required: '생년월일을 선택해 주세요',
      invalid: '유효한 날짜를 입력해 주세요',
      future: '생년월일은 미래일 수 없습니다',
      tooOld: '유효한 생년월일을 입력해 주세요',
      tooYoung: '이 앱을 사용하려면 최소 13세 이상이어야 합니다'
    }
  };

  const msg = errors[langCode] || errors.en;

  // Required check
  if (!dob) {
    return { isValid: false, error: msg.required };
  }

  // Parse date
  const date = typeof dob === 'string' ? new Date(dob) : dob;

  // Valid date check
  if (isNaN(date.getTime())) {
    return { isValid: false, error: msg.invalid };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Future date check
  if (date > today) {
    return { isValid: false, error: msg.future };
  }

  // Age limits
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 13);

  if (date < minDate) {
    return { isValid: false, error: msg.tooOld };
  }

  if (date > maxDate) {
    return { isValid: false, error: msg.tooYoung };
  }

  return { isValid: true, error: null };
};

/**
 * validateTimeOfBirth
 * Validates time of birth (optional field).
 * 
 * @param {string} time - Time string (HH:MM format)
 * @param {string} langCode - Language code for error messages
 * @returns {ValidationResult}
 */
export const validateTimeOfBirth = (time, langCode = 'en') => {
  const errors = {
    en: { invalid: 'Please enter a valid time (HH:MM)' },
    hi: { invalid: 'कृपया एक वैध समय दर्ज करें (HH:MM)' },
    es: { invalid: 'Por favor ingresa una hora válida (HH:MM)' },
    fr: { invalid: 'Veuillez entrer une heure valide (HH:MM)' },
    it: { invalid: 'Per favore inserisci un orario valido (HH:MM)' },
    ko: { invalid: '유효한 시간을 입력해 주세요 (HH:MM)' }
  };

  const msg = errors[langCode] || errors.en;

  // Time is optional
  if (!time || time.trim() === '') {
    return { isValid: true, error: null };
  }

  // Validate time format
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  if (!timeRegex.test(time)) {
    return { isValid: false, error: msg.invalid };
  }

  return { isValid: true, error: null };
};

/**
 * validateGender
 * Validates gender selection.
 * 
 * @param {string} gender - Gender value ('male', 'female', 'other')
 * @param {string} langCode - Language code for error messages
 * @returns {ValidationResult}
 */
export const validateGender = (gender, langCode = 'en') => {
  const errors = {
    en: { required: 'Please select your gender' },
    hi: { required: 'कृपया अपना लिंग चुनें' },
    es: { required: 'Por favor selecciona tu género' },
    fr: { required: 'Veuillez sélectionner votre genre' },
    it: { required: 'Per favore seleziona il tuo genere' },
    ko: { required: '성별을 선택해 주세요' }
  };

  const msg = errors[langCode] || errors.en;

  const validGenders = ['male', 'female', 'other'];

  if (!gender || !validGenders.includes(gender)) {
    return { isValid: false, error: msg.required };
  }

  return { isValid: true, error: null };
};

/**
 * validateProfile
 * Validates complete profile data.
 * 
 * @param {Object} profile - Profile data object
 * @param {string} langCode - Language code for error messages
 * @returns {{ isValid: boolean, errors: Object }}
 */
export const validateProfile = (profile, langCode = 'en') => {
  const errors = {};
  let isValid = true;

  // Validate name
  const nameResult = validateName(profile.name, langCode);
  if (!nameResult.isValid) {
    errors.name = nameResult.error;
    isValid = false;
  }

  // Validate date of birth
  const dobResult = validateDateOfBirth(profile.dob, langCode);
  if (!dobResult.isValid) {
    errors.dob = dobResult.error;
    isValid = false;
  }

  // Validate time of birth (optional)
  if (profile.timeOfBirth) {
    const timeResult = validateTimeOfBirth(profile.timeOfBirth, langCode);
    if (!timeResult.isValid) {
      errors.timeOfBirth = timeResult.error;
      isValid = false;
    }
  }

  // Validate gender
  const genderResult = validateGender(profile.gender, langCode);
  if (!genderResult.isValid) {
    errors.gender = genderResult.error;
    isValid = false;
  }

  return { isValid, errors };
};

/**
 * validateEmail
 * Validates email format (for future use).
 * 
 * @param {string} email
 * @param {string} langCode
 * @returns {ValidationResult}
 */
export const validateEmail = (email, langCode = 'en') => {
  const errors = {
    en: {
      required: 'Please enter your email',
      invalid: 'Please enter a valid email address'
    },
    hi: {
      required: 'कृपया अपना ईमेल दर्ज करें',
      invalid: 'कृपया एक वैध ईमेल पता दर्ज करें'
    },
    es: {
      required: 'Por favor ingresa tu email',
      invalid: 'Por favor ingresa un email válido'
    },
    fr: {
      required: 'Veuillez entrer votre email',
      invalid: 'Veuillez entrer une adresse email valide'
    },
    it: {
      required: 'Per favore inserisci la tua email',
      invalid: 'Per favore inserisci un indirizzo email valido'
    },
    ko: {
      required: '이메일을 입력해 주세요',
      invalid: '유효한 이메일 주소를 입력해 주세요'
    }
  };

  const msg = errors[langCode] || errors.en;

  if (!email || email.trim() === '') {
    return { isValid: false, error: msg.required };
  }

  // Standard email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, error: msg.invalid };
  }

  return { isValid: true, error: null };
};

/**
 * validateChatMessage
 * Validates chat input before sending.
 * 
 * @param {string} message
 * @param {string} langCode
 * @returns {ValidationResult}
 */
export const validateChatMessage = (message, langCode = 'en') => {
  const errors = {
    en: {
      empty: 'Please enter a message',
      tooLong: 'Message is too long (max 1000 characters)'
    },
    hi: {
      empty: 'कृपया एक संदेश दर्ज करें',
      tooLong: 'संदेश बहुत लंबा है (अधिकतम 1000 अक्षर)'
    },
    es: {
      empty: 'Por favor ingresa un mensaje',
      tooLong: 'El mensaje es demasiado largo (máx 1000 caracteres)'
    },
    fr: {
      empty: 'Veuillez entrer un message',
      tooLong: 'Le message est trop long (max 1000 caractères)'
    },
    it: {
      empty: 'Per favore inserisci un messaggio',
      tooLong: 'Il messaggio è troppo lungo (max 1000 caratteri)'
    },
    ko: {
      empty: '메시지를 입력해 주세요',
      tooLong: '메시지가 너무 깁니다 (최대 1000자)'
    }
  };

  const msg = errors[langCode] || errors.en;
  const trimmed = (message || '').trim();

  if (!trimmed) {
    return { isValid: false, error: msg.empty };
  }

  if (trimmed.length > 1000) {
    return { isValid: false, error: msg.tooLong };
  }

  return { isValid: true, error: null };
};

/**
 * sanitizeInput
 * Removes potentially harmful characters from user input.
 * 
 * @param {string} input
 * @returns {string}
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove angle brackets
    .slice(0, 5000); // Limit length
};

/**
 * isValidImageBase64
 * Checks if a string is a valid base64 image.
 * 
 * @param {string} base64
 * @returns {boolean}
 */
export const isValidImageBase64 = (base64) => {
  if (!base64 || typeof base64 !== 'string') return false;
  
  // Check for data URL format
  const regex = /^data:image\/(jpeg|jpg|png|webp|gif);base64,[A-Za-z0-9+/]+=*$/;
  return regex.test(base64);
};

/**
 * validateImageSize
 * Checks if image data URL is within size limits.
 * 
 * @param {string} dataUrl - Base64 data URL
 * @param {number} maxSizeMB - Maximum size in MB
 * @returns {ValidationResult}
 */
export const validateImageSize = (dataUrl, maxSizeMB = LIMITS.MAX_IMAGE_SIZE_MB, langCode = 'en') => {
  const errors = {
    en: { tooLarge: `Image is too large. Maximum size is ${maxSizeMB}MB.` },
    hi: { tooLarge: `छवि बहुत बड़ी है। अधिकतम आकार ${maxSizeMB}MB है।` },
    es: { tooLarge: `La imagen es demasiado grande. Tamaño máximo es ${maxSizeMB}MB.` },
    fr: { tooLarge: `L'image est trop grande. Taille maximum est ${maxSizeMB}MB.` },
    it: { tooLarge: `L'immagine è troppo grande. Dimensione massima è ${maxSizeMB}MB.` },
    ko: { tooLarge: `이미지가 너무 큽니다. 최대 크기는 ${maxSizeMB}MB입니다.` }
  };

  const msg = errors[langCode] || errors.en;

  if (!dataUrl) {
    return { isValid: false, error: 'No image provided' };
  }

  // Calculate approximate size from base64
  // Base64 is roughly 4/3 larger than binary, and data URL has header
  const base64Length = dataUrl.length - (dataUrl.indexOf(',') + 1);
  const sizeBytes = (base64Length * 3) / 4;
  const sizeMB = sizeBytes / (1024 * 1024);

  if (sizeMB > maxSizeMB) {
    return { isValid: false, error: msg.tooLarge };
  }

  return { isValid: true, error: null };
};

export default {
  validateName,
  validateDateOfBirth,
  validateTimeOfBirth,
  validateGender,
  validateProfile,
  validateEmail,
  validateChatMessage,
  sanitizeInput,
  isValidImageBase64,
  validateImageSize
};
