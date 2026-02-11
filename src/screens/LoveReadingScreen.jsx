import React, { useState, useEffect } from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import LoveCompatibility from '../components/love/LoveCompatibility';
import LoveInsight from '../components/love/LoveInsight';
import { useLanguage } from '../hooks/useLanguage';
import { useAppContext } from '../context/AppContext';
import { generateAIResponse } from '../services/aiService';
import { getLoveReadingPrompt } from '../utils/systemPrompts';

const LoveReadingScreen = () => {
  const { t, language } = useLanguage();
  const { showLoading, hideLoading } = useAppContext();
  const [reading, setReading] = useState('');

  useEffect(() => {
    const fetchReading = async () => {
      showLoading();
      try {
        const prompt = getLoveReadingPrompt(language);
        const response = await generateAIResponse(prompt, language);
        setReading(response);
      } finally {
        hideLoading();
      }
    };
    fetchReading();
  }, []);

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        <Header title={t('love.title')} showBack={true} />

        <div className="p-6 mt-14 flex-1 overflow-y-auto custom-scrollbar">
          <LoveCompatibility 
            percentage={88} 
            text="Your heart chakra is open and radiating warmth." 
          />
          
          <div className="mt-6 prose prose-invert prose-sm max-w-none">
            <LoveInsight 
              title={t('love.guidance')} 
              content={reading} 
              icon="💖"
            />
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default LoveReadingScreen;
