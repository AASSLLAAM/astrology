import React from 'react';
import GlassCard from '../common/GlassCard';
import { getZodiacById } from '../../utils/zodiacData';

const ZodiacCard = ({ signId, onClick }) => {
  const sign = getZodiacById(signId);
  if (!sign) return null;

  return (
    <GlassCard 
      onClick={onClick}
      className="flex items-center gap-4 cursor-pointer hover:bg-white/10"
      hover
    >
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner bg-black/20"
        style={{ border: `1px solid ${sign.color}` }}
      >
        {sign.emoji}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          {sign.name}
          <span className="text-xs font-normal text-gray-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            {sign.element}
          </span>
        </h3>
        <p className="text-xs text-gray-400 truncate">
          {sign.traits.join(' • ')}
        </p>
      </div>
      
      <div className="text-gray-500">➔</div>
    </GlassCard>
  );
};

export default ZodiacCard;
