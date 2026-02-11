import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TarotCard from './TarotCard';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * TarotDeck
 * Interactive deck for shuffling and drawing cards.
 * 
 * @param {Function} onDraw - Callback when card is drawn (returns index)
 * @param {number} cardsToDraw - How many cards needed
 * @param {number} drawnCount - How many already drawn
 */
const TarotDeck = ({ onDraw, cardsToDraw = 1, drawnCount = 0 }) => {
  const { t } = useLanguage();
  const [isShuffling, setIsShuffling] = useState(false);

  const handleDeckClick = () => {
    if (drawnCount >= cardsToDraw || isShuffling) return;
    
    // Simulate shuffle/draw sound or haptic here
    if (navigator.vibrate) navigator.vibrate(50);
    
    onDraw();
  };

  // Stack of visual cards to represent the deck
  const deckStack = Array.from({ length: 5 }).map((_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div 
        className="relative w-32 h-48 cursor-pointer group"
        onClick={handleDeckClick}
      >
        {/* Render Stack Effect */}
        {deckStack.map((i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: deckStack.length - i }}
            initial={{ y: -i * 1, x: -i * 0.5 }}
            whileHover={{ y: -i * 2, x: -i * 1 }} // Fan out on hover
          >
            <TarotCard size="md" isRevealed={false} />
          </motion.div>
        ))}

        {/* Glow/Hint */}
        {drawnCount < cardsToDraw && (
          <motion.div
            className="absolute -inset-4 rounded-xl border-2 border-dashed border-white/20 z-0 pointer-events-none"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      <p className="mt-8 text-sm text-gray-400 font-medium animate-pulse">
        {drawnCount < cardsToDraw 
          ? t('tarot.tapToReveal') 
          : t('common.loading')
        }
      </p>
    </div>
  );
};

export default TarotDeck;
