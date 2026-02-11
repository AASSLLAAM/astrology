import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import GlassCard from '../common/GlassCard';

const WelcomeMessage = ({ onSuggestionClick }) => {
  const { t } = useLanguage();
  const suggestions = t('chat.suggestions') || []; // Ensure array

  return (
    <div className="space-y-4 pt-4">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">
          🔮
        </div>
      </div>

      <div className="text-center px-4">
        <h2 className="text-xl font-bold text-white mb-2">{t('chat.title')}</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          {t('chat.welcome')}
        </p>
      </div>

      <div className="grid gap-2 mt-6">
        {Array.isArray(suggestions) && suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-left text-xs bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl px-4 py-3 text-gray-300 transition-colors"
          >
            ✨ "{suggestion}"
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMessage;
