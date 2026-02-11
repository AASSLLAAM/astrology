/**
 * Translations
 * Complete UI strings for all 6 supported languages.
 * Key structure: section.key
 * 
 * Languages: English, Hindi, Spanish, French, Italian, Korean
 */

export const translations = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇬🇧 ENGLISH
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  en: {
    languageName: 'English',

    // Splash
    splash: {
      title: 'AI Palm Reader',
      subtitle: 'Tarot & Astrology Guidance',
      loading: 'Aligning the stars...'
    },

    // Language Selection
    languageSelect: {
      title: 'Choose Your Language',
      subtitle: 'Select the language for your cosmic journey',
      continue: 'Continue'
    },

    // Onboarding
    onboarding: {
      skip: 'Skip',
      next: 'Next',
      getStarted: 'Get Started',
      slide1: {
        title: 'Tarot Wisdom',
        description: 'Unlock the ancient wisdom of tarot cards. Get personalized readings for love, career, finance, and personal growth.'
      },
      slide2: {
        title: 'Palm Secrets',
        description: 'Your palms hold deep stories. Let AI analyze your heart, head, life, and fate lines to reveal hidden insights.'
      },
      slide3: {
        title: 'AI Guidance',
        description: 'Experience spiritual guidance powered by advanced AI. Get daily insights, horoscopes, and cosmic energy readings.'
      }
    },

    // Profile Setup
    profile: {
      title: 'Create Your Profile',
      subtitle: 'Personalize your cosmic experience',
      name: 'Your Name',
      namePlaceholder: 'Enter your name',
      dob: 'Date of Birth',
      dobPlaceholder: 'Select your date of birth',
      timeOfBirth: 'Time of Birth',
      timePlaceholder: 'Select time (optional)',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      save: 'Begin My Journey',
      errors: {
        nameRequired: 'Please enter your name',
        nameTooShort: 'Name must be at least 2 characters',
        dobRequired: 'Please select your date of birth',
        futureDate: 'Date of birth cannot be in the future',
        genderRequired: 'Please select your gender'
      }
    },

    // Home Dashboard
    home: {
      greeting: 'Welcome',
      subtitle: 'What would you like to explore today?',
      aiChat: 'AI Palm Chat',
      aiChatDesc: 'Ask anything about your destiny',
      features: {
        palmScan: 'Palm Scan',
        tarot: 'Tarot Reading',
        love: 'Love Reading',
        daily: 'Daily Guidance',
        horoscope: 'Horoscope'
      }
    },

    // Palm Scan
    palm: {
      title: 'Palm Reading',
      selectHand: 'Select Your Hand',
      leftHand: 'Left Hand',
      rightHand: 'Right Hand',
      leftDesc: 'Reveals your potential and inherited traits',
      rightDesc: 'Shows your current path and choices',
      scanGuide: 'How to Scan',
      guideSteps: {
        step1: 'Place your hand on a flat, well-lit surface',
        step2: 'Spread your fingers slightly apart',
        step3: 'Ensure all palm lines are clearly visible',
        step4: 'Take a photo or upload an image'
      },
      takePhoto: 'Take Photo',
      uploadImage: 'Upload Image',
      scanning: 'Analyzing your palm lines...',
      result: {
        title: 'Your Palm Reading',
        heartLine: 'Heart Line',
        headLine: 'Head Line',
        lifeLine: 'Life Line',
        fateLine: 'Fate Line',
        heartDesc: 'Emotional expression & relationships',
        headDesc: 'Intellectual style & thinking patterns',
        lifeDesc: 'Vitality, health & life energy',
        fateDesc: 'Destiny path & career direction',
        fullReading: 'Full Interpretation',
        scanAgain: 'Scan Again',
        share: 'Share Reading'
      }
    },

    // AI Chat
    chat: {
      title: 'AI Palm Chat',
      welcome: 'Hello! I am your spiritual guide. Ask me about palm reading, astrology, or seek guidance on any aspect of your life. I am here to offer calm, reflective insights.',
      placeholder: 'Ask about your destiny...',
      send: 'Send',
      thinking: 'Consulting the cosmos...',
      error: 'The cosmic connection was interrupted. Please try again.',
      suggestions: [
        'What does my heart line reveal?',
        'Tell me about my zodiac energy today',
        'What guidance do the stars offer me?',
        'How can I attract positive energy?'
      ]
    },

    // Tarot
    tarot: {
      title: 'Tarot Reading',
      subtitle: 'Choose a category for your reading',
      categories: {
        love: 'Love',
        career: 'Career',
        finance: 'Finance',
        growth: 'Personal Growth'
      },
      categoryDesc: {
        love: 'Explore relationships, romance & emotional bonds',
        career: 'Insights on work, ambition & professional path',
        finance: 'Guidance on wealth, investments & abundance',
        growth: 'Self-discovery, spirituality & inner strength'
      },
      shuffling: 'Shuffling the cosmic deck...',
      tapToReveal: 'Tap a card to reveal its wisdom',
      yourCards: 'Your Cards',
      reading: 'Your Tarot Interpretation',
      drawAgain: 'Draw Again',
      share: 'Share Reading'
    },

    // Daily Guidance
    daily: {
      title: "Today's Guidance",
      energy: "Today's Energy",
      focus: 'Emotional Focus',
      embrace: 'Embrace',
      avoid: 'Avoid',
      lucky: 'Lucky Element',
      share: 'Share Guidance',
      refresh: 'New Guidance'
    },

    // Horoscope
    horoscope: {
      title: 'Horoscope',
      subtitle: 'Select your zodiac sign',
      yourSign: 'Your Sign',
      mood: 'Mood',
      love: 'Love',
      career: 'Career',
      advice: 'Advice',
      share: 'Share Horoscope'
    },

    // Love Reading
    love: {
      title: 'Love Reading',
      subtitle: 'Discover your romantic energy',
      compatibility: 'Compatibility Insight',
      energy: 'Love Energy',
      guidance: 'Heart Guidance',
      share: 'Share Reading'
    },

    // Settings
    settings: {
      title: 'Settings',
      language: 'Language',
      shareApp: 'Share App',
      rateApp: 'Rate App',
      privacy: 'Privacy Policy',
      about: 'About',
      version: 'Version'
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      retry: 'Try Again',
      back: 'Back',
      close: 'Close',
      share: 'Share',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',
      ok: 'OK'
    },

    // Exit
    exit: {
      title: 'Exit App',
      message: 'Are you sure you want to leave?',
      toast: 'Press back again to exit',
      stay: 'Stay',
      leave: 'Leave'
    },

    // Disclaimer
    disclaimer: {
      text: 'For entertainment and self-reflection purposes only. This is not a substitute for professional advice.',
      short: 'For guidance & reflection only'
    },

    // Errors
    errors: {
      network: 'No internet connection. Please check your network.',
      api: 'Service temporarily unavailable. Please try again later.',
      image: 'Could not process the image. Please try another photo.',
      noHand: 'Could not detect a hand in the image. Please try again.',
      generic: 'Something went wrong. Please try again.'
    },

    // Rate App
    rate: {
      title: 'Enjoying AI Palm Reader?',
      message: 'If you find our app helpful, would you mind rating us? It helps us grow!',
      rateNow: 'Rate Now',
      later: 'Maybe Later',
      noThanks: 'No Thanks'
    },

    // Network Status
    network: {
      offline: 'You are offline',
      online: 'Back online!'
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇮🇳 HINDI
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  hi: {
    languageName: 'हिन्दी',

    splash: {
      title: 'AI हस्तरेखा पाठक',
      subtitle: 'टैरो और ज्योतिष मार्गदर्शन',
      loading: 'तारों को संरेखित कर रहे हैं...'
    },

    languageSelect: {
      title: 'अपनी भाषा चुनें',
      subtitle: 'अपनी ब्रह्मांडीय यात्रा के लिए भाषा चुनें',
      continue: 'जारी रखें'
    },

    onboarding: {
      skip: 'छोड़ें',
      next: 'आगे',
      getStarted: 'शुरू करें',
      slide1: {
        title: 'टैरो ज्ञान',
        description: 'टैरो कार्ड की प्राचीन बुद्धि को अनलॉक करें। प्रेम, करियर, वित्त और व्यक्तिगत विकास के लिए व्यक्तिगत रीडिंग प्राप्त करें।'
      },
      slide2: {
        title: 'हस्तरेखा रहस्य',
        description: 'आपकी हथेलियाँ गहरी कहानियाँ रखती हैं। AI को अपनी हृदय, मस्तक, जीवन और भाग्य रेखाओं का विश्लेषण करने दें।'
      },
      slide3: {
        title: 'AI मार्गदर्शन',
        description: 'उन्नत AI द्वारा संचालित आध्यात्मिक मार्गदर्शन का अनुभव करें। दैनिक अंतर्दृष्टि, राशिफल और ब्रह्मांडीय ऊर्जा रीडिंग प्राप्त करें।'
      }
    },

    profile: {
      title: 'अपनी प्रोफ़ाइल बनाएं',
      subtitle: 'अपने ब्रह्मांडीय अनुभव को व्यक्तिगत बनाएं',
      name: 'आपका नाम',
      namePlaceholder: 'अपना नाम दर्ज करें',
      dob: 'जन्म तिथि',
      dobPlaceholder: 'अपनी जन्म तिथि चुनें',
      timeOfBirth: 'जन्म का समय',
      timePlaceholder: 'समय चुनें (वैकल्पिक)',
      gender: 'लिंग',
      male: 'पुरुष',
      female: 'महिला',
      other: 'अन्य',
      save: 'मेरी यात्रा शुरू करें',
      errors: {
        nameRequired: 'कृपया अपना नाम दर्ज करें',
        nameTooShort: 'नाम कम से कम 2 अक्षर का होना चाहिए',
        dobRequired: 'कृपया अपनी जन्म तिथि चुनें',
        futureDate: 'जन्म तिथि भविष्य में नहीं हो सकती',
        genderRequired: 'कृपया अपना लिंग चुनें'
      }
    },

    home: {
      greeting: 'स्वागत है',
      subtitle: 'आज आप क्या जानना चाहेंगे?',
      aiChat: 'AI हस्तरेखा चैट',
      aiChatDesc: 'अपने भाग्य के बारे में कुछ भी पूछें',
      features: {
        palmScan: 'हस्तरेखा स्कैन',
        tarot: 'टैरो रीडिंग',
        love: 'प्रेम रीडिंग',
        daily: 'दैनिक मार्गदर्शन',
        horoscope: 'राशिफल'
      }
    },

    palm: {
      title: 'हस्तरेखा पठन',
      selectHand: 'अपना हाथ चुनें',
      leftHand: 'बायाँ हाथ',
      rightHand: 'दायाँ हाथ',
      leftDesc: 'आपकी क्षमता और विरासत में मिले गुणों को दर्शाता है',
      rightDesc: 'आपके वर्तमान मार्ग और चुनावों को दिखाता है',
      scanGuide: 'स्कैन कैसे करें',
      guideSteps: {
        step1: 'अपना हाथ एक सपाट, अच्छी रोशनी वाली सतह पर रखें',
        step2: 'अपनी उंगलियों को थोड़ा फैलाएं',
        step3: 'सुनिश्चित करें कि सभी हथेली की रेखाएँ स्पष्ट दिखें',
        step4: 'एक फोटो लें या छवि अपलोड करें'
      },
      takePhoto: 'फ़ोटो लें',
      uploadImage: 'छवि अपलोड करें',
      scanning: 'आपकी हथेली की रेखाओं का विश्लेषण...',
      result: {
        title: 'आपकी हस्तरेखा रीडिंग',
        heartLine: 'हृदय रेखा',
        headLine: 'मस्तक रेखा',
        lifeLine: 'जीवन रेखा',
        fateLine: 'भाग्य रेखा',
        heartDesc: 'भावनात्मक अभिव्यक्ति और संबंध',
        headDesc: 'बौद्धिक शैली और सोच के पैटर्न',
        lifeDesc: 'जीवन शक्ति, स्वास्थ्य और जीवन ऊर्जा',
        fateDesc: 'भाग्य पथ और करियर दिशा',
        fullReading: 'पूर्ण व्याख्या',
        scanAgain: 'फिर से स्कैन करें',
        share: 'रीडिंग साझा करें'
      }
    },

    chat: {
      title: 'AI हस्तरेखा चैट',
      welcome: 'नमस्ते! मैं आपका आध्यात्मिक मार्गदर्शक हूँ। मुझसे हस्तरेखा, ज्योतिष के बारे में पूछें या अपने जीवन के किसी भी पहलू पर मार्गदर्शन लें।',
      placeholder: 'अपने भाग्य के बारे में पूछें...',
      send: 'भेजें',
      thinking: 'ब्रह्मांड से परामर्श...',
      error: 'ब्रह्मांडीय संबंध बाधित हुआ। कृपया पुनः प्रयास करें।',
      suggestions: [
        'मेरी हृदय रेखा क्या बताती है?',
        'आज मेरी राशि की ऊर्जा कैसी है?',
        'तारे मुझे क्या मार्गदर्शन देते हैं?',
        'मैं सकारात्मक ऊर्जा कैसे आकर्षित करूं?'
      ]
    },

    tarot: {
      title: 'टैरो रीडिंग',
      subtitle: 'अपनी रीडिंग के लिए श्रेणी चुनें',
      categories: {
        love: 'प्रेम',
        career: 'करियर',
        finance: 'वित्त',
        growth: 'व्यक्तिगत विकास'
      },
      categoryDesc: {
        love: 'रिश्ते, रोमांस और भावनात्मक बंधन',
        career: 'कार्य, महत्वाकांक्षा और पेशेवर मार्ग',
        finance: 'धन, निवेश और समृद्धि पर मार्गदर्शन',
        growth: 'आत्म-खोज, आध्यात्मिकता और आंतरिक शक्ति'
      },
      shuffling: 'ब्रह्मांडीय डेक को शफ़ल कर रहे हैं...',
      tapToReveal: 'ज्ञान प्रकट करने के लिए कार्ड टैप करें',
      yourCards: 'आपके कार्ड',
      reading: 'आपकी टैरो व्याख्या',
      drawAgain: 'फिर से खींचें',
      share: 'रीडिंग साझा करें'
    },

    daily: {
      title: 'आज का मार्गदर्शन',
      energy: 'आज की ऊर्जा',
      focus: 'भावनात्मक केंद्र',
      embrace: 'अपनाएं',
      avoid: 'बचें',
      lucky: 'भाग्यशाली तत्व',
      share: 'मार्गदर्शन साझा करें',
      refresh: 'नया मार्गदर्शन'
    },

    horoscope: {
      title: 'राशिफल',
      subtitle: 'अपनी राशि चुनें',
      yourSign: 'आपकी राशि',
      mood: 'मनोदशा',
      love: 'प्रेम',
      career: 'करियर',
      advice: 'सलाह',
      share: 'राशिफल साझा करें'
    },

    love: {
      title: 'प्रेम रीडिंग',
      subtitle: 'अपनी रोमांटिक ऊर्जा खोजें',
      compatibility: 'अनुकूलता अंतर्दृष्टि',
      energy: 'प्रेम ऊर्जा',
      guidance: 'हृदय मार्गदर्शन',
      share: 'रीडिंग साझा करें'
    },

    settings: {
      title: 'सेटिंग्स',
      language: 'भाषा',
      shareApp: 'ऐप साझा करें',
      rateApp: 'ऐप को रेट करें',
      privacy: 'गोपनीयता नीति',
      about: 'हमारे बारे में',
      version: 'संस्करण'
    },

    common: {
      loading: 'लोड हो रहा है...',
      error: 'कुछ गलत हो गया',
      retry: 'पुनः प्रयास करें',
      back: 'वापस',
      close: 'बंद करें',
      share: 'साझा करें',
      save: 'सहेजें',
      cancel: 'रद्द करें',
      confirm: 'पुष्टि करें',
      yes: 'हाँ',
      no: 'नहीं',
      ok: 'ठीक है'
    },

    exit: {
      title: 'ऐप बंद करें',
      message: 'क्या आप वाकई बाहर जाना चाहते हैं?',
      toast: 'बाहर निकलने के लिए फिर से दबाएं',
      stay: 'रहें',
      leave: 'बाहर जाएं'
    },

    disclaimer: {
      text: 'केवल मनोरंजन और आत्म-चिंतन के उद्देश्य से। यह पेशेवर सलाह का विकल्प नहीं है।',
      short: 'केवल मार्गदर्शन और चिंतन के लिए'
    },

    errors: {
      network: 'कोई इंटरनेट कनेक्शन नहीं। कृपया अपना नेटवर्क जांचें।',
      api: 'सेवा अस्थायी रूप से अनुपलब्ध है। कृपया बाद में पुनः प्रयास करें।',
      image: 'छवि प्रोसेस नहीं हो सकी। कृपया दूसरी फ़ोटो आज़माएं।',
      noHand: 'छवि में हाथ का पता नहीं चला। कृपया पुनः प्रयास करें।',
      generic: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।'
    },

    rate: {
      title: 'AI हस्तरेखा पाठक पसंद आ रहा है?',
      message: 'अगर आपको हमारा ऐप उपयोगी लगता है, तो क्या आप हमें रेट करेंगे?',
      rateNow: 'अभी रेट करें',
      later: 'बाद में',
      noThanks: 'नहीं धन्यवाद'
    },

    network: {
      offline: 'आप ऑफ़लाइन हैं',
      online: 'वापस ऑनलाइन!'
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇪🇸 SPANISH
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  es: {
    languageName: 'Español',

    splash: {
      title: 'Lector de Palma AI',
      subtitle: 'Tarot y Guía Astrológica',
      loading: 'Alineando las estrellas...'
    },

    languageSelect: {
      title: 'Elige Tu Idioma',
      subtitle: 'Selecciona el idioma para tu viaje cósmico',
      continue: 'Continuar'
    },

    onboarding: {
      skip: 'Omitir',
      next: 'Siguiente',
      getStarted: 'Comenzar',
      slide1: {
        title: 'Sabiduría del Tarot',
        description: 'Desbloquea la sabiduría ancestral del tarot. Obtén lecturas personalizadas para el amor, la carrera, las finanzas y el crecimiento personal.'
      },
      slide2: {
        title: 'Secretos de la Palma',
        description: 'Tus palmas guardan historias profundas. Deja que la IA analice tus líneas del corazón, cabeza, vida y destino.'
      },
      slide3: {
        title: 'Guía con IA',
        description: 'Experimenta guía espiritual impulsada por IA avanzada. Obtén perspectivas diarias, horóscopos y lecturas de energía cósmica.'
      }
    },

    profile: {
      title: 'Crea Tu Perfil',
      subtitle: 'Personaliza tu experiencia cósmica',
      name: 'Tu Nombre',
      namePlaceholder: 'Ingresa tu nombre',
      dob: 'Fecha de Nacimiento',
      dobPlaceholder: 'Selecciona tu fecha de nacimiento',
      timeOfBirth: 'Hora de Nacimiento',
      timePlaceholder: 'Selecciona hora (opcional)',
      gender: 'Género',
      male: 'Masculino',
      female: 'Femenino',
      other: 'Otro',
      save: 'Comenzar Mi Viaje',
      errors: {
        nameRequired: 'Por favor ingresa tu nombre',
        nameTooShort: 'El nombre debe tener al menos 2 caracteres',
        dobRequired: 'Por favor selecciona tu fecha de nacimiento',
        futureDate: 'La fecha de nacimiento no puede ser en el futuro',
        genderRequired: 'Por favor selecciona tu género'
      }
    },

    home: {
      greeting: 'Bienvenido',
      subtitle: '¿Qué te gustaría explorar hoy?',
      aiChat: 'Chat AI de Palma',
      aiChatDesc: 'Pregunta cualquier cosa sobre tu destino',
      features: {
        palmScan: 'Escaneo de Palma',
        tarot: 'Lectura de Tarot',
        love: 'Lectura de Amor',
        daily: 'Guía Diaria',
        horoscope: 'Horóscopo'
      }
    },

    palm: {
      title: 'Lectura de Palma',
      selectHand: 'Selecciona Tu Mano',
      leftHand: 'Mano Izquierda',
      rightHand: 'Mano Derecha',
      leftDesc: 'Revela tu potencial y rasgos heredados',
      rightDesc: 'Muestra tu camino actual y decisiones',
      scanGuide: 'Cómo Escanear',
      guideSteps: {
        step1: 'Coloca tu mano en una superficie plana y bien iluminada',
        step2: 'Separa ligeramente los dedos',
        step3: 'Asegúrate de que las líneas sean claramente visibles',
        step4: 'Toma una foto o sube una imagen'
      },
      takePhoto: 'Tomar Foto',
      uploadImage: 'Subir Imagen',
      scanning: 'Analizando las líneas de tu palma...',
      result: {
        title: 'Tu Lectura de Palma',
        heartLine: 'Línea del Corazón',
        headLine: 'Línea de la Cabeza',
        lifeLine: 'Línea de la Vida',
        fateLine: 'Línea del Destino',
        heartDesc: 'Expresión emocional y relaciones',
        headDesc: 'Estilo intelectual y patrones de pensamiento',
        lifeDesc: 'Vitalidad, salud y energía vital',
        fateDesc: 'Camino del destino y dirección profesional',
        fullReading: 'Interpretación Completa',
        scanAgain: 'Escanear de Nuevo',
        share: 'Compartir Lectura'
      }
    },

    chat: {
      title: 'Chat AI de Palma',
      welcome: '¡Hola! Soy tu guía espiritual. Pregúntame sobre quiromancia, astrología o busca orientación sobre cualquier aspecto de tu vida.',
      placeholder: 'Pregunta sobre tu destino...',
      send: 'Enviar',
      thinking: 'Consultando el cosmos...',
      error: 'La conexión cósmica fue interrumpida. Por favor intenta de nuevo.',
      suggestions: [
        '¿Qué revela mi línea del corazón?',
        'Cuéntame sobre mi energía zodiacal hoy',
        '¿Qué guía me ofrecen las estrellas?',
        '¿Cómo puedo atraer energía positiva?'
      ]
    },

    tarot: {
      title: 'Lectura de Tarot',
      subtitle: 'Elige una categoría para tu lectura',
      categories: {
        love: 'Amor',
        career: 'Carrera',
        finance: 'Finanzas',
        growth: 'Crecimiento Personal'
      },
      categoryDesc: {
        love: 'Explora relaciones, romance y vínculos emocionales',
        career: 'Perspectivas sobre trabajo, ambición y camino profesional',
        finance: 'Guía sobre riqueza, inversiones y abundancia',
        growth: 'Autodescubrimiento, espiritualidad y fuerza interior'
      },
      shuffling: 'Barajando el mazo cósmico...',
      tapToReveal: 'Toca una carta para revelar su sabiduría',
      yourCards: 'Tus Cartas',
      reading: 'Tu Interpretación del Tarot',
      drawAgain: 'Sacar de Nuevo',
      share: 'Compartir Lectura'
    },

    daily: {
      title: 'Guía de Hoy',
      energy: 'Energía de Hoy',
      focus: 'Enfoque Emocional',
      embrace: 'Abraza',
      avoid: 'Evita',
      lucky: 'Elemento de Suerte',
      share: 'Compartir Guía',
      refresh: 'Nueva Guía'
    },

    horoscope: {
      title: 'Horóscopo',
      subtitle: 'Selecciona tu signo zodiacal',
      yourSign: 'Tu Signo',
      mood: 'Ánimo',
      love: 'Amor',
      career: 'Carrera',
      advice: 'Consejo',
      share: 'Compartir Horóscopo'
    },

    love: {
      title: 'Lectura de Amor',
      subtitle: 'Descubre tu energía romántica',
      compatibility: 'Compatibilidad',
      energy: 'Energía Amorosa',
      guidance: 'Guía del Corazón',
      share: 'Compartir Lectura'
    },

    settings: {
      title: 'Configuración',
      language: 'Idioma',
      shareApp: 'Compartir App',
      rateApp: 'Calificar App',
      privacy: 'Política de Privacidad',
      about: 'Acerca de',
      version: 'Versión'
    },

    common: {
      loading: 'Cargando...',
      error: 'Algo salió mal',
      retry: 'Intentar de Nuevo',
      back: 'Atrás',
      close: 'Cerrar',
      share: 'Compartir',
      save: 'Guardar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      yes: 'Sí',
      no: 'No',
      ok: 'OK'
    },

    exit: {
      title: 'Salir de la App',
      message: '¿Estás seguro de que quieres salir?',
      toast: 'Presiona atrás de nuevo para salir',
      stay: 'Quedarme',
      leave: 'Salir'
    },

    disclaimer: {
      text: 'Solo para entretenimiento y autoreflexión. No sustituye el consejo profesional.',
      short: 
