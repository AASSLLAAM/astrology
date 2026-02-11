import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import HeartAnimation from './HeartAnimation';

const LoveCompatibility = ({ percentage, text }) => {
  return (
    <GlassCard className="text-center py-8 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        {/* Heart Animation Container */}
        <div className="mb-4 relative w-32 h-32 flex items-center justify-center">
          <HeartAnimation />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-white drop-shadow-md">
              {percentage}%
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-pink-200 mb-2">
          Compatibility Energy
        </h3>
        
        <p className="text-sm text-gray-300 px-4">
          {text}
        </p>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/20 blur-[50px] rounded-full" />
    </GlassCard>
  );
};

export default LoveCompatibility;
