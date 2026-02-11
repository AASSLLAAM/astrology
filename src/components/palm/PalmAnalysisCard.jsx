import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';

/**
 * PalmAnalysisCard
 * The main summary card shown at the top of results.
 * Displays the AI-generated holistic reading.
 */
const PalmAnalysisCard = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <GlassCard 
      variant="active"
      className="mb-6 border-indigo-500/30"
      glow
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-indigo-500 rounded-lg p-2">
          ✨
        </div>
        <h3 className="text-lg font-bold text-white">
          Cosmic Interpretation
        </h3>
      </div>

      <div className="prose prose-invert prose-sm max-w-none">
        <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
          {analysis}
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 border border-white/5">
          AI Analysis
        </span>
        <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 border border-white/5">
          Based on Vision
        </span>
      </div>
    </GlassCard>
  );
};

export default PalmAnalysisCard;
