import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { useLanguage } from '../../hooks/useLanguage';

const HoroscopeResult = ({ sign, prediction }) => {
  const { t } = useLanguage();

  if (!sign || !prediction) return null;

  return (
    <div className="space-y-4">
      {/* Header Card */}
      <GlassCard className="text-center py-6 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-white/10">
        <div className="text-5xl mb-2 filter drop-shadow-xl">{sign.emoji}</div>
        <h2 className="text-2xl font-bold text-white mb-1">{sign.name}</h2>
        <p className="text-xs text-indigo-200 uppercase tracking-widest">
          {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </GlassCard>

      {/* Main Prediction */}
      <GlassCard>
        <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider opacity-70">
          {t('horoscope.advice')}
        </h3>
        <p className="text-gray-200 leading-relaxed text-sm whitespace-pre-line">
          {prediction.general || prediction}
        </p>
      </GlassCard>

      {/* Specific Areas Grid */}
      {prediction.love && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <GlassCard className="bg-pink-500/10 border-pink-500/20">
            <h4 className="text-pink-300 font-bold text-xs mb-1">❤️ {t('horoscope.love')}</h4>
            <p className="text-xs text-gray-300">{prediction.love}</p>
          </GlassCard>
          
          <GlassCard className="bg-blue-500/10 border-blue-500/20">
            <h4 className="text-blue-300 font-bold text-xs mb-1">💼 {t('horoscope.career')}</h4>
            <p className="text-xs text-gray-300">{prediction.career}</p>
          </GlassCard>
          
          <GlassCard className="bg-purple-500/10 border-purple-500/20">
            <h4 className="text-purple-300 font-bold text-xs mb-1">🧘 {t('horoscope.mood')}</h4>
            <p className="text-xs text-gray-300">{prediction.mood}</p>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default HoroscopeResult;
