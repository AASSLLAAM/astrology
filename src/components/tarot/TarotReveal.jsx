import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from './TarotCard';
import { containerVariants, itemVariants } from '../../theme/animations';

/**
 * TarotReveal
 * Displays the drawn cards in a layout, ready to be flipped.
 * 
 * @param {Array} cards - Array of card objects
 * @param {Array} revealedIndices - Array of indices that are currently face up
 * @param {Function} onRevealCard - Handler when a card is clicked
 */
const TarotReveal = ({ cards, revealedIndices, onRevealCard }) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => {
        const isRevealed = revealedIndices.includes(index);
        
        return (
          <motion.div key={card.id || index} variants={itemVariants}>
            <div className="flex flex-col items-center gap-3">
              <TarotCard
                card={card}
                isRevealed={isRevealed}
                onClick={() => onRevealCard(index)}
                glow={!isRevealed} // Glow until revealed
                isReversed={card.isReversed}
              />
              
              {/* Label (Only shown after reveal) */}
              <motion.span
                className="text-xs font-medium text-amber-200/80 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: isRevealed ? 1 : 0 }}
              >
                {isRevealed ? card.name : '???'}
              </motion.span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TarotReveal;
