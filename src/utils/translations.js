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
      short: 'Solo para guía y reflexión'
    },

    errors: {
      network: 'Sin conexión a internet. Por favor verifica tu red.',
      api: 'Servicio temporalmente no disponible. Intenta más tarde.',
      image: 'No se pudo procesar la imagen. Intenta con otra foto.',
      noHand: 'No se detectó una mano en la imagen. Intenta de nuevo.',
      generic: 'Algo salió mal. Por favor intenta de nuevo.'
    },

    rate: {
      title: '¿Disfrutas AI Palm Reader?',
      message: 'Si encuentras nuestra app útil, ¿nos calificarías?',
      rateNow: 'Calificar Ahora',
      later: 'Quizás Después',
      noThanks: 'No Gracias'
    },

    network: {
      offline: 'Estás sin conexión',
      online: '¡De vuelta en línea!'
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇫🇷 FRENCH
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  fr: {
    languageName: 'Français',

    splash: {
      title: 'Lecteur de Paume IA',
      subtitle: 'Tarot et Guide Astrologique',
      loading: 'Alignement des étoiles...'
    },

    languageSelect: {
      title: 'Choisissez Votre Langue',
      subtitle: 'Sélectionnez la langue de votre voyage cosmique',
      continue: 'Continuer'
    },

    onboarding: {
      skip: 'Passer',
      next: 'Suivant',
      getStarted: 'Commencer',
      slide1: {
        title: 'Sagesse du Tarot',
        description: 'Débloquez la sagesse ancestrale des cartes de tarot. Obtenez des lectures personnalisées pour l\'amour, la carrière, les finances et la croissance personnelle.'
      },
      slide2: {
        title: 'Secrets de la Paume',
        description: 'Vos paumes renferment des histoires profondes. Laissez l\'IA analyser vos lignes de cœur, de tête, de vie et de destin.'
      },
      slide3: {
        title: 'Guidance IA',
        description: 'Vivez une guidance spirituelle alimentée par l\'IA avancée. Obtenez des aperçus quotidiens, des horoscopes et des lectures d\'énergie cosmique.'
      }
    },

    profile: {
      title: 'Créez Votre Profil',
      subtitle: 'Personnalisez votre expérience cosmique',
      name: 'Votre Nom',
      namePlaceholder: 'Entrez votre nom',
      dob: 'Date de Naissance',
      dobPlaceholder: 'Sélectionnez votre date de naissance',
      timeOfBirth: 'Heure de Naissance',
      timePlaceholder: 'Sélectionnez l\'heure (optionnel)',
      gender: 'Genre',
      male: 'Masculin',
      female: 'Féminin',
      other: 'Autre',
      save: 'Commencer Mon Voyage',
      errors: {
        nameRequired: 'Veuillez entrer votre nom',
        nameTooShort: 'Le nom doit contenir au moins 2 caractères',
        dobRequired: 'Veuillez sélectionner votre date de naissance',
        futureDate: 'La date de naissance ne peut pas être dans le futur',
        genderRequired: 'Veuillez sélectionner votre genre'
      }
    },

    home: {
      greeting: 'Bienvenue',
      subtitle: 'Que souhaitez-vous explorer aujourd\'hui?',
      aiChat: 'Chat IA Paume',
      aiChatDesc: 'Posez n\'importe quelle question sur votre destin',
      features: {
        palmScan: 'Scan de Paume',
        tarot: 'Lecture de Tarot',
        love: 'Lecture d\'Amour',
        daily: 'Guide Quotidien',
        horoscope: 'Horoscope'
      }
    },

    palm: {
      title: 'Lecture de Paume',
      selectHand: 'Sélectionnez Votre Main',
      leftHand: 'Main Gauche',
      rightHand: 'Main Droite',
      leftDesc: 'Révèle votre potentiel et vos traits hérités',
      rightDesc: 'Montre votre chemin actuel et vos choix',
      scanGuide: 'Comment Scanner',
      guideSteps: {
        step1: 'Placez votre main sur une surface plane et bien éclairée',
        step2: 'Écartez légèrement vos doigts',
        step3: 'Assurez-vous que toutes les lignes sont clairement visibles',
        step4: 'Prenez une photo ou téléchargez une image'
      },
      takePhoto: 'Prendre une Photo',
      uploadImage: 'Télécharger une Image',
      scanning: 'Analyse des lignes de votre paume...',
      result: {
        title: 'Votre Lecture de Paume',
        heartLine: 'Ligne de Cœur',
        headLine: 'Ligne de Tête',
        lifeLine: 'Ligne de Vie',
        fateLine: 'Ligne du Destin',
        heartDesc: 'Expression émotionnelle et relations',
        headDesc: 'Style intellectuel et schémas de pensée',
        lifeDesc: 'Vitalité, santé et énergie vitale',
        fateDesc: 'Chemin du destin et direction de carrière',
        fullReading: 'Interprétation Complète',
        scanAgain: 'Scanner à Nouveau',
        share: 'Partager la Lecture'
      }
    },

    chat: {
      title: 'Chat IA Paume',
      welcome: 'Bonjour! Je suis votre guide spirituel. Interrogez-moi sur la chiromancie, l\'astrologie ou cherchez des conseils sur n\'importe quel aspect de votre vie.',
      placeholder: 'Posez une question sur votre destin...',
      send: 'Envoyer',
      thinking: 'Consultation du cosmos...',
      error: 'La connexion cosmique a été interrompue. Veuillez réessayer.',
      suggestions: [
        'Que révèle ma ligne de cœur?',
        'Parlez-moi de mon énergie zodiacale aujourd\'hui',
        'Quelle guidance les étoiles m\'offrent-elles?',
        'Comment attirer l\'énergie positive?'
      ]
    },

    tarot: {
      title: 'Lecture de Tarot',
      subtitle: 'Choisissez une catégorie pour votre lecture',
      categories: {
        love: 'Amour',
        career: 'Carrière',
        finance: 'Finances',
        growth: 'Croissance Personnelle'
      },
      categoryDesc: {
        love: 'Explorez les relations, la romance et les liens émotionnels',
        career: 'Perspectives sur le travail, l\'ambition et le parcours professionnel',
        finance: 'Guidance sur la richesse, les investissements et l\'abondance',
        growth: 'Découverte de soi, spiritualité et force intérieure'
      },
      shuffling: 'Mélange du jeu cosmique...',
      tapToReveal: 'Touchez une carte pour révéler sa sagesse',
      yourCards: 'Vos Cartes',
      reading: 'Votre Interprétation du Tarot',
      drawAgain: 'Tirer à Nouveau',
      share: 'Partager la Lecture'
    },

    daily: {
      title: 'Guide du Jour',
      energy: 'Énergie du Jour',
      focus: 'Focus Émotionnel',
      embrace: 'Embrassez',
      avoid: 'Évitez',
      lucky: 'Élément Chanceux',
      share: 'Partager le Guide',
      refresh: 'Nouveau Guide'
    },

    horoscope: {
      title: 'Horoscope',
      subtitle: 'Sélectionnez votre signe zodiacal',
      yourSign: 'Votre Signe',
      mood: 'Humeur',
      love: 'Amour',
      career: 'Carrière',
      advice: 'Conseil',
      share: 'Partager l\'Horoscope'
    },

    love: {
      title: 'Lecture d\'Amour',
      subtitle: 'Découvrez votre énergie romantique',
      compatibility: 'Compatibilité',
      energy: 'Énergie Amoureuse',
      guidance: 'Guide du Cœur',
      share: 'Partager la Lecture'
    },

    settings: {
      title: 'Paramètres',
      language: 'Langue',
      shareApp: 'Partager l\'App',
      rateApp: 'Noter l\'App',
      privacy: 'Politique de Confidentialité',
      about: 'À Propos',
      version: 'Version'
    },

    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      retry: 'Réessayer',
      back: 'Retour',
      close: 'Fermer',
      share: 'Partager',
      save: 'Enregistrer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      yes: 'Oui',
      no: 'Non',
      ok: 'OK'
    },

    exit: {
      title: 'Quitter l\'App',
      message: 'Êtes-vous sûr de vouloir partir?',
      toast: 'Appuyez à nouveau pour quitter',
      stay: 'Rester',
      leave: 'Quitter'
    },

    disclaimer: {
      text: 'Uniquement à des fins de divertissement et de réflexion personnelle. Ne remplace pas un conseil professionnel.',
      short: 'Pour guidance et réflexion uniquement'
    },

    errors: {
      network: 'Pas de connexion internet. Vérifiez votre réseau.',
      api: 'Service temporairement indisponible. Réessayez plus tard.',
      image: 'Impossible de traiter l\'image. Essayez une autre photo.',
      noHand: 'Aucune main détectée dans l\'image. Réessayez.',
      generic: 'Une erreur est survenue. Veuillez réessayer.'
    },

    rate: {
      title: 'Vous aimez AI Palm Reader?',
      message: 'Si notre app vous est utile, pourriez-vous nous noter?',
      rateNow: 'Noter Maintenant',
      later: 'Plus Tard',
      noThanks: 'Non Merci'
    },

    network: {
      offline: 'Vous êtes hors ligne',
      online: 'De retour en ligne!'
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇮🇹 ITALIAN
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  it: {
    languageName: 'Italiano',

    splash: {
      title: 'Lettore di Palmo IA',
      subtitle: 'Tarocchi e Guida Astrologica',
      loading: 'Allineando le stelle...'
    },

    languageSelect: {
      title: 'Scegli La Tua Lingua',
      subtitle: 'Seleziona la lingua per il tuo viaggio cosmico',
      continue: 'Continua'
    },

    onboarding: {
      skip: 'Salta',
      next: 'Avanti',
      getStarted: 'Inizia',
      slide1: {
        title: 'Saggezza dei Tarocchi',
        description: 'Sblocca l\'antica saggezza dei tarocchi. Ottieni letture personalizzate per amore, carriera, finanze e crescita personale.'
      },
      slide2: {
        title: 'Segreti del Palmo',
        description: 'I tuoi palmi custodiscono storie profonde. Lascia che l\'IA analizzi le tue linee del cuore, della testa, della vita e del destino.'
      },
      slide3: {
        title: 'Guida IA',
        description: 'Sperimenta la guida spirituale alimentata dall\'IA avanzata. Ottieni intuizioni quotidiane, oroscopi e letture di energia cosmica.'
      }
    },

    profile: {
      title: 'Crea Il Tuo Profilo',
      subtitle: 'Personalizza la tua esperienza cosmica',
      name: 'Il Tuo Nome',
      namePlaceholder: 'Inserisci il tuo nome',
      dob: 'Data di Nascita',
      dobPlaceholder: 'Seleziona la tua data di nascita',
      timeOfBirth: 'Ora di Nascita',
      timePlaceholder: 'Seleziona l\'ora (opzionale)',
      gender: 'Genere',
      male: 'Maschile',
      female: 'Femminile',
      other: 'Altro',
      save: 'Inizia Il Mio Viaggio',
      errors: {
        nameRequired: 'Per favore inserisci il tuo nome',
        nameTooShort: 'Il nome deve avere almeno 2 caratteri',
        dobRequired: 'Per favore seleziona la tua data di nascita',
        futureDate: 'La data di nascita non può essere nel futuro',
        genderRequired: 'Per favore seleziona il tuo genere'
      }
    },

    home: {
      greeting: 'Benvenuto',
      subtitle: 'Cosa vorresti esplorare oggi?',
      aiChat: 'Chat IA Palmo',
      aiChatDesc: 'Chiedi qualsiasi cosa sul tuo destino',
      features: {
        palmScan: 'Scansione Palmo',
        tarot: 'Lettura Tarocchi',
        love: 'Lettura d\'Amore',
        daily: 'Guida Quotidiana',
        horoscope: 'Oroscopo'
      }
    },

    palm: {
      title: 'Lettura del Palmo',
      selectHand: 'Seleziona La Tua Mano',
      leftHand: 'Mano Sinistra',
      rightHand: 'Mano Destra',
      leftDesc: 'Rivela il tuo potenziale e i tratti ereditati',
      rightDesc: 'Mostra il tuo percorso attuale e le scelte',
      scanGuide: 'Come Scansionare',
      guideSteps: {
        step1: 'Posiziona la mano su una superficie piana e ben illuminata',
        step2: 'Separa leggermente le dita',
        step3: 'Assicurati che tutte le linee siano chiaramente visibili',
        step4: 'Scatta una foto o carica un\'immagine'
      },
      takePhoto: 'Scatta Foto',
      uploadImage: 'Carica Immagine',
      scanning: 'Analisi delle linee del palmo...',
      result: {
        title: 'La Tua Lettura del Palmo',
        heartLine: 'Linea del Cuore',
        headLine: 'Linea della Testa',
        lifeLine: 'Linea della Vita',
        fateLine: 'Linea del Destino',
        heartDesc: 'Espressione emotiva e relazioni',
        headDesc: 'Stile intellettuale e schemi di pensiero',
        lifeDesc: 'Vitalità, salute ed energia vitale',
        fateDesc: 'Percorso del destino e direzione di carriera',
        fullReading: 'Interpretazione Completa',
        scanAgain: 'Scansiona di Nuovo',
        share: 'Condividi Lettura'
      }
    },

    chat: {
      title: 'Chat IA Palmo',
      welcome: 'Ciao! Sono la tua guida spirituale. Chiedimi di chiromanzia, astrologia o cerca guida su qualsiasi aspetto della tua vita.',
      placeholder: 'Chiedi del tuo destino...',
      send: 'Invia',
      thinking: 'Consultando il cosmo...',
      error: 'La connessione cosmica è stata interrotta. Per favore riprova.',
      suggestions: [
        'Cosa rivela la mia linea del cuore?',
        'Parlami della mia energia zodiacale oggi',
        'Quale guida mi offrono le stelle?',
        'Come posso attrarre energia positiva?'
      ]
    },

    tarot: {
      title: 'Lettura Tarocchi',
      subtitle: 'Scegli una categoria per la tua lettura',
      categories: {
        love: 'Amore',
        career: 'Carriera',
        finance: 'Finanze',
        growth: 'Crescita Personale'
      },
      categoryDesc: {
        love: 'Esplora relazioni, romanticismo e legami emotivi',
        career: 'Prospettive su lavoro, ambizione e percorso professionale',
        finance: 'Guida su ricchezza, investimenti e abbondanza',
        growth: 'Scoperta di sé, spiritualità e forza interiore'
      },
      shuffling: 'Mescolando il mazzo cosmico...',
      tapToReveal: 'Tocca una carta per rivelare la sua saggezza',
      yourCards: 'Le Tue Carte',
      reading: 'La Tua Interpretazione dei Tarocchi',
      drawAgain: 'Pesca di Nuovo',
      share: 'Condividi Lettura'
    },

    daily: {
      title: 'Guida di Oggi',
      energy: 'Energia di Oggi',
      focus: 'Focus Emotivo',
      embrace: 'Abbraccia',
      avoid: 'Evita',
      lucky: 'Elemento Fortunato',
      share: 'Condividi Guida',
      refresh: 'Nuova Guida'
    },

    horoscope: {
      title: 'Oroscopo',
      subtitle: 'Seleziona il tuo segno zodiacale',
      yourSign: 'Il Tuo Segno',
      mood: 'Umore',
      love: 'Amore',
      career: 'Carriera',
      advice: 'Consiglio',
      share: 'Condividi Oroscopo'
    },

    love: {
      title: 'Lettura d\'Amore',
      subtitle: 'Scopri la tua energia romantica',
      compatibility: 'Compatibilità',
      energy: 'Energia d\'Amore',
      guidance: 'Guida del Cuore',
      share: 'Condividi Lettura'
    },

    settings: {
      title: 'Impostazioni',
      language: 'Lingua',
      shareApp: 'Condividi App',
      rateApp: 'Valuta App',
      privacy: 'Politica sulla Privacy',
      about: 'Informazioni',
      version: 'Versione'
    },

    common: {
      loading: 'Caricamento...',
      error: 'Qualcosa è andato storto',
      retry: 'Riprova',
      back: 'Indietro',
      close: 'Chiudi',
      share: 'Condividi',
      save: 'Salva',
      cancel: 'Annulla',
      confirm: 'Conferma',
      yes: 'Sì',
      no: 'No',
      ok: 'OK'
    },

    exit: {
      title: 'Esci dall\'App',
      message: 'Sei sicuro di voler uscire?',
      toast: 'Premi ancora per uscire',
      stay: 'Resta',
      leave: 'Esci'
    },

    disclaimer: {
      text: 'Solo per intrattenimento e riflessione personale. Non sostituisce il consiglio professionale.',
      short: 'Solo per guida e riflessione'
    },

    errors: {
      network: 'Nessuna connessione internet. Controlla la tua rete.',
      api: 'Servizio temporaneamente non disponibile. Riprova più tardi.',
      image: 'Impossibile elaborare l\'immagine. Prova un\'altra foto.',
      noHand: 'Nessuna mano rilevata nell\'immagine. Riprova.',
      generic: 'Qualcosa è andato storto. Per favore riprova.'
    },

    rate: {
      title: 'Ti piace AI Palm Reader?',
      message: 'Se trovi la nostra app utile, ci valuteresti?',
      rateNow: 'Valuta Ora',
      later: 'Forse Dopo',
      noThanks: 'No Grazie'
    },

    network: {
      offline: 'Sei offline',
      online: 'Di nuovo online!'
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇰🇷 KOREAN
  // ━━━━━━━━━━━━━━━━━━━━━━━━
  ko: {
    languageName: '한국어',

    splash: {
      title: 'AI 손금 리더',
      subtitle: '타로 & 점성술 가이드',
      loading: '별들을 정렬하는 중...'
    },

    languageSelect: {
      title: '언어를 선택하세요',
      subtitle: '우주 여행을 위한 언어를 선택하세요',
      continue: '계속하기'
    },

    onboarding: {
      skip: '건너뛰기',
      next: '다음',
      getStarted: '시작하기',
      slide1: {
        title: '타로의 지혜',
        description: '타로 카드의 고대 지혜를 풀어보세요. 사랑, 경력, 재정 및 개인 성장에 대한 맞춤형 리딩을 받으세요.'
      },
      slide2: {
        title: '손금의 비밀',
        description: '당신의 손바닥에는 깊은 이야기가 담겨 있습니다. AI가 심장선, 두뇌선, 생명선, 운명선을 분석하게 하세요.'
      },
      slide3: {
        title: 'AI 가이던스',
        description: '고급 AI로 구동되는 영적 안내를 경험하세요. 일일 인사이트, 운세 및 우주 에너지 리딩을 받으세요.'
      }
    },

    profile: {
      title: '프로필 만들기',
      subtitle: '우주적 경험을 개인화하세요',
      name: '이름',
      namePlaceholder: '이름을 입력하세요',
      dob: '생년월일',
      dobPlaceholder: '생년월일을 선택하세요',
      timeOfBirth: '출생 시간',
      timePlaceholder: '시간 선택 (선택사항)',
      gender: '성별',
      male: '남성',
      female: '여성',
      other: '기타',
      save: '여정 시작하기',
      errors: {
        nameRequired: '이름을 입력해 주세요',
        nameTooShort: '이름은 최소 2자 이상이어야 합니다',
        dobRequired: '생년월일을 선택해 주세요',
        futureDate: '생년월일은 미래일 수 없습니다',
        genderRequired: '성별을 선택해 주세요'
      }
    },

    home: {
      greeting: '환영합니다',
      subtitle: '오늘 무엇을 탐구하고 싶으신가요?',
      aiChat: 'AI 손금 채팅',
      aiChatDesc: '운명에 대해 무엇이든 물어보세요',
      features: {
        palmScan: '손금 스캔',
        tarot: '타로 리딩',
        love: '사랑 리딩',
        daily: '일일 가이던스',
        horoscope: '운세'
      }
    },

    palm: {
      title: '손금 읽기',
      selectHand: '손을 선택하세요',
      leftHand: '왼손',
      rightHand: '오른손',
      leftDesc: '잠재력과 물려받은 특성을 나타냅니다',
      rightDesc: '현재의 길과 선택을 보여줍니다',
      scanGuide: '스캔 방법',
      guideSteps: {
        step1: '평평하고 조명이 좋은 표면에 손을 놓으세요',
        step2: '손가락을 약간 벌리세요',
        step3: '모든 손금이 선명하게 보이는지 확인하세요',
        step4: '사진을 찍거나 이미지를 업로드하세요'
      },
      takePhoto: '사진 찍기',
      uploadImage: '이미지 업로드',
      scanning: '손금을 분석하는 중...',
      result: {
        title: '당신의 손금 리딩',
        heartLine: '심장선',
        headLine: '두뇌선',
        lifeLine: '생명선',
        fateLine: '운명선',
        heartDesc: '감정 표현과 관계',
        headDesc: '지적 스타일과 사고 패턴',
        lifeDesc: '활력, 건강 및 생명 에너지',
        fateDesc: '운명의 길과 경력 방향',
        fullReading: '전체 해석',
        scanAgain: '다시 스캔',
        share: '리딩 공유'
      }
    },

    chat: {
      title: 'AI 손금 채팅',
      welcome: '안녕하세요! 저는 당신의 영적 안내자입니다. 손금, 점성술에 대해 물어보거나 삶의 어떤 측면에 대해 안내를 구하세요.',
      placeholder: '운명에 대해 물어보세요...',
      send: '보내기',
      thinking: '우주와 상담 중...',
      error: '우주적 연결이 중단되었습니다. 다시 시도해 주세요.',
      suggestions: [
        '내 심장선은 무엇을 나타내나요?',
        '오늘 나의 별자리 에너지는 어떤가요?',
        '별들은 나에게 어떤 안내를 주나요?',
        '긍정적인 에너지를 어떻게 끌어당길 수 있나요?'
      ]
    },

    tarot: {
      title: '타로 리딩',
      subtitle: '리딩 카테고리를 선택하세요',
      categories: {
        love: '사랑',
        career: '경력',
        finance: '재정',
        growth: '개인 성장'
      },
      categoryDesc: {
        love: '관계, 로맨스 및 감정적 유대 탐구',
        career: '직업, 야망 및 전문적 경로에 대한 통찰',
        finance: '부, 투자 및 풍요에 대한 안내',
        growth: '자기 발견, 영성 및 내면의 힘'
      },
      shuffling: '우주의 덱을 섞는 중...',
      tapToReveal: '카드를 탭하여 지혜를 밝히세요',
      yourCards: '당신의 카드',
      reading: '타로 해석',
      drawAgain: '다시 뽑기',
      share: '리딩 공유'
    },

    daily: {
      title: '오늘의 가이던스',
      energy: '오늘의 에너지',
      focus: '감정적 초점',
      embrace: '수용하세요',
      avoid: '피하세요',
      lucky: '행운의 요소',
      share: '가이던스 공유',
      refresh: '새로운 가이던스'
    },

    horoscope: {
      title: '운세',
      subtitle: '별자리를 선택하세요',
      yourSign: '당신의 별자리',
      mood: '기분',
      love: '사랑',
      career: '경력',
      advice: '조언',
      share: '운세 공유'
    },

    love: {
      title: '사랑 리딩',
      subtitle: '로맨틱 에너지를 발견하세요',
      compatibility: '호환성 인사이트',
      energy: '사랑 에너지',
      guidance: '마음의 안내',
      share: '리딩 공유'
    },

    settings: {
      title: '설정',
      language: '언어',
      shareApp: '앱 공유',
      rateApp: '앱 평가',
      privacy: '개인정보 보호정책',
      about: '정보',
      version: '버전'
    },

    common: {
      loading: '로딩 중...',
      error: '문제가 발생했습니다',
      retry: '다시 시도',
      back: '뒤로',
      close: '닫기',
      share: '공유',
      save: '저장',
      cancel: '취소',
      confirm: '확인',
      yes: '예',
      no: '아니오',
      ok: '확인'
    },

    exit: {
      title: '앱 종료',
      message: '정말 나가시겠습니까?',
      toast: '한 번 더 누르면 종료됩니다',
      stay: '머물기',
      leave: '나가기'
    },

    disclaimer: {
      text: '오락 및 자기 성찰 목적으로만 사용됩니다. 전문적인 조언을 대체하지 않습니다.',
      short: '안내 및 성찰 목적으로만'
    },

    errors: {
      network: '인터넷 연결 없음. 네트워크를 확인하세요.',
      api: '서비스가 일시적으로 사용할 수 없습니다. 나중에 다시 시도하세요.',
      image: '이미지를 처리할 수 없습니다. 다른 사진을 시도하세요.',
      noHand: '이미지에서 손을 감지할 수 없습니다. 다시 시도하세요.',
      generic: '문제가 발생했습니다. 다시 시도해 주세요.'
    },

    rate: {
      title: 'AI Palm Reader가 마음에 드시나요?',
      message: '저희 앱이 유용하다면 평가해 주시겠어요?',
      rateNow: '지금 평가',
      later: '나중에',
      noThanks: '괜찮습니다'
    },

    network: {
      offline: '오프라인 상태입니다',
      online: '다시 온라인!'
    }
  }
};

export default translations;
