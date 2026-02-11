import React from 'react';
import GlassCard from '../common/GlassCard';

const LuckyElement = ({ type, value, icon, subtext }) => {
  return (
    <GlassCard className="flex items-center gap-3 p-3">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="text-xs text-gray-400 uppercase tracking-wider">{type}</h4>
        <p className="text-sm font-bold text-white">{value}</p>
        {subtext && <p className="text-[10px] text-gray-500">{subtext}</p>}
      </div>
    </GlassCard>
  );
};

export default LuckyElement;
