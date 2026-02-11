import React, { useState, useEffect } from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import DailyCard from '../components/guidance/DailyCard';
import EnergyMeter from '../components/guidance/EnergyMeter';
import LuckyElement from '../components/guidance/LuckyElement';
import ShareGuidance from '../components/guidance/ShareGuidance';
import LoadingOverlay from '../components/common/LoadingOverlay';
import { useLanguage } from '../hooks/useLanguage';
import { useUser } from '../context/UserContext';
import { useAppContext } from '../context/AppContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { generateDailyGuidance, buildGuidancePrompt } from '../utils/guidanceTemplates';
import { generateAIResponse } from '../services/aiService';
import { getTodayString } from '../utils/dateHelpers';
import { STORAGE_KEYS } from '../services/storageService';

const DailyGuidanceScreen = () => {
  const { t, language } = useLanguage();
  const { user } = useUser();
  const { showLoading, hideLoading } = useAppContext();
  
  // Cache guidance by date
  const [cachedGuidance, setCachedGuidance] = useLocalStorage(STORAGE_KEYS.DAILY_GUIDANCE_CACHE, {});
  const [todayGuidance, setTodayGuidance] = useState(null);

  useEffect(() => {
    const fetchGuidance = async () => {
      const today = getTodayString();
      
      // 1. Check Cache
      if (cachedGuidance?.date === today && cachedGuidance?.content) {
        setTodayGuidance(cachedGuidance.content);
        return;
      }

      // 2. Generate New
      showLoading();
      try {
        // Base structure (deterministic/random)
        const baseData = generateDailyGuidance(today);
        
        // AI Enhancement (message)
        const prompt = buildGuidancePrompt(baseData, user);
        const aiMessage = await generateAIResponse(prompt, language);

        const newGuidance = {
          ...baseData,
          aiMessage: aiMessage || 'The stars are aligning for you today.'
        };

        setTodayGuidance(newGuidance);
        setCachedGuidance({ date: today, content: newGuidance });
        
      } catch (error) {
        console.error('Guidance Error:', error);
      } finally {
        hideLoading();
      }
    };

    fetchGuidance();
  }, []); // Run once on mount

  if (!todayGuidance) return null;

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col pb-24">
        <CosmicBackground />
        
        <Header title={t('daily.title')} showBack={true} />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 mt-14">
          
          {/* Main Energy Card */}
          <div className="mb-6 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-3xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-white text-xl font-bold mb-2">
              {todayGuidance.energy.label}
            </h2>
            <p className="text-indigo-200 text-sm mb-4">
              {todayGuidance.energy.description}
            </p>
            <EnergyMeter 
              label="Cosmic Alignment" 
              value={todayGuidance.energy.level} 
              color={todayGuidance.energy.color} 
            />
          </div>

          {/* AI Message */}
          <div className="mb-6 prose prose-invert prose-sm max-w-none">
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
              {todayGuidance.aiMessage}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <DailyCard 
              title={t('daily.focus')} 
              content={todayGuidance.focus.message} 
              icon={todayGuidance.focus.emoji}
              color="bg-pink-500"
            />
            
            <div className="space-y-4">
              <LuckyElement 
                type="Color" 
                value={todayGuidance.lucky.color.name}
                icon={todayGuidance.lucky.color.emoji}
              />
              <LuckyElement 
                type="Number" 
                value={todayGuidance.lucky.number}
                icon="🔢"
              />
            </div>
          </div>

          {/* Embrace / Avoid */}
          <div className="space-y-3 mb-8">
            <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4">
              <h4 className="text-emerald-400 text-xs font-bold uppercase mb-2">
                {t('daily.embrace')}
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {todayGuidance.embrace.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>{item.emoji}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
              <h4 className="text-red-400 text-xs font-bold uppercase mb-2">
                {t('daily.avoid')}
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {todayGuidance.avoid.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>{item.emoji}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ShareGuidance guidance={todayGuidance} />
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default DailyGuidanceScreen;
