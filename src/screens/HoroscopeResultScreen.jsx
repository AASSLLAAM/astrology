import React, { useState, useEffect } from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import HoroscopeResult from '../components/horoscope/HoroscopeResult';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { useAppContext } from '../context/AppContext';
import { getZodiacById } from '../../utils/zodiacData';
import { generateAIResponse } from '../services/aiService';
import { getHoroscopePrompt } from '../utils/systemPrompts';

const HoroscopeResultScreen = () => {
  const { t, language } = useLanguage();
  const { getParam } = useNavigation();
  const { showLoading, hideLoading } = useAppContext();
  
  const signId = getParam('signId');
  const sign = getZodiacById(signId);
  
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const fetchHoroscope = async () => {
      if (!sign) return;
      
      showLoading(t('common.loading'));
      
      try {
        const prompt = getHoroscopePrompt(language, sign.name);
        const response = await generateAIResponse(prompt, language);
        
        // Simple parser to split response sections if AI formatted correctly
        // (Assuming AI returns structured text as requested in prompt)
        setPrediction(response);
      } catch (error) {
        console.error(error);
      } finally {
        hideLoading();
      }
    };

    fetchHoroscope();
  }, [signId]); // Only fetch on sign change

  if (!sign) return null;

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        
        <Header title={sign.name} showBack={true} />

        <div className="p-6 mt-14 flex-1 overflow-y-auto custom-scrollbar pb-safe-bottom">
          <HoroscopeResult sign={sign} prediction={prediction} />
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default HoroscopeResultScreen;
