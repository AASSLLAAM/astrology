import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { flipVariants } from '../../theme/animations';
import TarotBack from '../../assets/illustrations/TarotBack'; // Will be created in assets

/**
 * TarotCard Component
 * Renders a flip-able tarot card.
 * 
 * @param {Object} card - Card data object (id, name, emoji, etc.)
 * @param {boolean} isRevealed - Whether the card is face up
 * @param {Function} onClick - Click handler
 * @param {boolean} isReversed - Whether the card is drawn reversed (upside down)
 * @param {string} size - 'sm', 'md', 'lg'
 * @param {boolean} glow - Show selection glow
 */
const TarotCard = ({ 
  card, 
  isRevealed = false, 
  onClick, 
  isReversed = false,
  size = 'md',
  glow = false
}) => {
  const sizes = {
    sm: 'w-24 h-36',
    md: 'w-32 h-48',
    lg: 'w-48 h-72'
  };

  const glowClass = glow ? 'shadow-[0_0_20px_rgba(251,191,36,0.6)]' : 'shadow-xl';

  return (
    <div 
      className={clsx('relative perspective-1000 cursor-pointer', sizes[size])}
      onClick={onClick}
    >
      <motion.div
        className={clsx(
          'w-full h-full relative preserve-3d transition-shadow duration-300 rounded-xl',
          glowClass
        )}
        initial="back"
        animate={isRevealed ? "front" : "back"}
        variants={flipVariants}
      >
        {/* 🎴 FRONT (Face) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-zinc-900 border-2 border-amber-500/50 flex flex-col items-center justify-between p-2"
          style={{ transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          {/* Top Number */}
          <div className="text-amber-500 font-serif text-xs">{card?.numeral}</div>
          
          {/* Main Visual (Emoji/Illustration placeholder) */}
          <div className="text-6xl filter drop-shadow-lg">
            {card?.emoji}
          </div>
          
          {/* Bottom Name */}
          <div className="text-center">
            <h4 className="text-amber-100 text-[10px] uppercase tracking-widest font-bold">
              {card?.name}
            </h4>
            {isReversed && (
              <span className="text-[8px] text-red-400 block uppercase tracking-tight">
                Reversed
              </span>
            )}
          </div>

          {/* Decorative Corner Borders */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-500/30" />
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-amber-500/30" />
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-amber-500/30" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-500/30" />
        </div>

        {/* 🌑 BACK (Design) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-indigo-950 border border-indigo-500/30 flex items-center justify-center">
          <TarotBack className="w-full h-full text-indigo-400/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export default TarotCard;
