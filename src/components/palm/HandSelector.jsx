import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import GlassCard from '../common/GlassCard';
import { HANDS } from '../../utils/constants';

/**
 * HandSelector
 * Interactive cards to choose Left or Right hand for scanning.
 */
const HandSelector = ({ selectedHand, onSelect }) => {
  const { t } = useLanguage();

  const hands = [
    {
      id: HANDS.LEFT,
      title: t('palm.leftHand'),
      desc: t('palm.leftDesc'),
      icon: '🤚', // Left hand representation
      align: 'items-start'
    },
    {
      id: HANDS.RIGHT,
      title: t('palm.rightHand'),
      desc: t('palm.rightDesc'),
      icon: '✋', // Right hand representation
      align: 'items-end'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {hands.map((hand) => {
        const isSelected = selectedHand === hand.id;

        return (
          <GlassCard
            key={hand.id}
            variant={isSelected ? 'active' : 'default'}
            className="cursor-pointer relative overflow-hidden group h-48 flex flex-col justify-between"
            onClick={() => onSelect(hand.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Selection Ring */}
            <div className={`
              absolute top-3 right-3 w-5 h-5 rounded-full border-2 
              flex items-center justify-center transition-all duration-300
              ${isSelected ? 'border-indigo-400 bg-indigo-500' : 'border-white/20'}
            `}>
              {isSelected && (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="text-[10px]"
                >
                  ✓
                </motion.div>
              )}
            </div>

            {/* Icon */}
            <div className={`text-4xl transition-transform duration-500 ${isSelected ? 'scale-110' : 'grayscale opacity-70'}`}>
              {hand.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className={`font-bold mb-1 transition-colors ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                {hand.title}
              </h3>
              <p className="text-[10px] leading-tight text-white/60">
                {hand.desc}
              </p>
            </div>

            {/* Background Glow */}
            {isSelected && (
              <motion.div
                layoutId="hand-glow"
                className="absolute inset-0 bg-indigo-500/10 -z-10"
                transition={{ duration: 0.3 }}
              />
            )}
          </GlassCard>
        );
      })}
    </div>
  );
};

export default HandSelector;
