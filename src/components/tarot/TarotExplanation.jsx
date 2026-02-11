import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';

const TarotExplanation = ({ card, category }) => {
  if (!card) return null;

  // Determine which text to show based on category or reversal
  // Logic usually handled in parent, but fallback here
  const meaning = card.categories?.[category] || card.upright;

  return (
    <GlassCard className="mt-4 border-t-4 border-t-amber-500">
      <div className="mb-3 flex items-baseline gap-2">
        <h3 className="text-xl font-bold text-amber-500">
          {card.name}
        </h3>
        <span className="text-sm text-gray-400 font-serif italic">
          {card.isReversed ? '(Reversed)' : '(Upright)'}
        </span>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {card.keywords.map((kw, i) => (
          <span 
            key={i} 
            className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-300 text-[10px] uppercase tracking-wider border border-amber-500/20"
          >
            {kw}
          </span>
        ))}
      </div>

      <p className="text-gray-200 leading-relaxed text-sm">
        {meaning}
      </p>
    </GlassCard>
  );
};

export default TarotExplanation;
