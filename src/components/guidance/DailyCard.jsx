import React from 'react';
import GlassCard from '../common/GlassCard';
import { useLanguage } from '../../hooks/useLanguage';

const DailyCard = ({ title, content, icon, color = 'bg-indigo-500' }) => {
  return (
    <GlassCard className="h-full flex flex-col justify-between">
      <div className="mb-3">
        <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center text-sm text-white mb-2`}>
          {icon}
        </div>
        <h3 className="text-sm font-bold text-white/90 uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-300 font-light leading-relaxed">
        {content}
      </p>
    </GlassCard>
  );
};

export default DailyCard;
