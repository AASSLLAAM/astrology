import React from 'react';
import GlassCard from '../common/GlassCard';

const LoveInsight = ({ title, content, icon }) => {
  return (
    <GlassCard className="mb-4 border-l-4 border-l-pink-500">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-xl">{icon}</div>
        <div>
          <h4 className="font-bold text-pink-200 text-sm uppercase tracking-wide mb-2">
            {title}
          </h4>
          <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default LoveInsight;
