import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import FeatureCard from '../components/common/FeatureCard';
import BottomNavigation from '../components/common/BottomNavigation';
import GlassCard from '../components/common/GlassCard';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { useBackHandler } from '../hooks/useBackHandler';
import { HOME_FEATURES, SCREENS } from '../../utils/constants';

const HomeScreen = () => {
  const { user } = useUser();
  const { t } = useLanguage();
  const { navigate } = useNavigation();
  
  // Enable double-back-to-exit logic on this screen
  useBackHandler();

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col pb-24 overflow-y-auto custom-scrollbar">
        <CosmicBackground />
        
        {/* Custom Header (Non-fixed for Home) */}
        <div className="px-6 pt-safe-top mt-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {t('home.greeting')}, {user?.name || 'Seeker'}
            </h1>
            <p className="text-sm text-gray-400">
              {t('home.subtitle')}
            </p>
          </div>
          {/* Avatar / Zodiac Icon */}
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl">
            {user?.zodiacSign?.emoji || '👤'}
          </div>
        </div>

        {/* AI Chat CTA (Hero Section) */}
        <div className="px-6 mb-8">
          <GlassCard 
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => navigate(SCREENS.AI_CHAT)}
            variant="active"
            glow
          >
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 animate-pulse-glow">
                🤖
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  {t('home.aiChat')}
                </h2>
                <p className="text-xs text-gray-300">
                  {t('home.aiChatDesc')}
                </p>
              </div>
              <div className="ml-auto text-white/50 group-hover:translate-x-1 transition-transform">
                ➔
              </div>
            </div>
            
            {/* Decorative Background Blob */}
            <div className="absolute -right-4 -bottom-10 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none" />
          </GlassCard>
        </div>

        {/* Features Grid */}
        <div className="px-6 grid grid-cols-2 gap-4">
          {HOME_FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={t(`home.features.${feature.id.replace('-scan', 'Scan')}`)}
              icon={feature.icon}
              gradient={feature.gradient}
              onClick={() => navigate(feature.screen)}
              delay={index}
            />
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-8 px-6 text-center">
          <p className="text-[10px] text-gray-500">
            {t('disclaimer.short')}
          </p>
        </div>
      </div>

      <BottomNavigation />
    </AnimatedTransition>
  );
};

export default HomeScreen;
