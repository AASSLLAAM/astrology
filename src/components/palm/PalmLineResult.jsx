import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../common/GlassCard';

/**
 * PalmLineResult
 * Shows details for a specific line (Heart, Head, Life, Fate).
 * 
 * @param {string} title - Line Name
 * @param {string} description - Detailed interpretation
 * @param {string} color - Accent color for the icon/border
 * @param {string} icon - Emoji or Icon
 */
const PalmLineResult = ({ title, description, color = '#6366f1', icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GlassCard 
      className="mb-3 cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
      variant="dark"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon with Color Glow */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg"
            style={{ 
              backgroundColor: `${color}20`, 
              color: color,
              border: `1px solid ${color}40`
            }}
          >
            {icon}
          </div>

          <div>
            <h4 className="font-bold text-white text-base">{title}</h4>
            <p className="text-xs text-gray-400">Tap to reveal insight</p>
          </div>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-gray-500"
        >
          ▼
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/5 mt-4">
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};

export default PalmLineResult;
