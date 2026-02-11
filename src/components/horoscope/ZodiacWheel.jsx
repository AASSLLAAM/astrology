import React from 'react';
import { motion } from 'framer-motion';
import { ZODIAC_SIGNS } from '../../utils/zodiacData';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * ZodiacWheel
 * A grid/wheel selector for zodiac signs.
 * 
 * @param {string} selectedSign - ID of currently selected sign
 * @param {Function} onSelect - Handler for selection
 */
const ZodiacWheel = ({ selectedSign, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-3 gap-3 p-2">
      {ZODIAC_SIGNS.map((sign) => {
        const isSelected = selectedSign === sign.id;
        
        return (
          <motion.button
            key={sign.id}
            onClick={() => onSelect(sign.id)}
            className={`
              relative flex flex-col items-center justify-center p-3 rounded-2xl
              border transition-all duration-300
              ${isSelected 
                ? 'bg-indigo-600/30 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                : 'bg-white/5 border-white/5 hover:bg-white/10'
              }
            `}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl mb-1 filter drop-shadow-md">
              {sign.emoji}
            </span>
            <span className={`text-[10px] font-medium tracking-wide uppercase ${isSelected ? 'text-white' : 'text-gray-400'}`}>
              {sign.name}
            </span>
            <span className="text-[8px] text-gray-500 mt-0.5">
              {t(`zodiac.dates.${sign.id}`) || `${sign.startMonth}/${sign.startDay}-${sign.endMonth}/${sign.endDay}`}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ZodiacWheel;
