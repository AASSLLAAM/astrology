import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { generateParticles } from '../../data/onboardingData'; // Reusing particle logic

/**
 * CosmicBackground
 * Renders twinkling stars and distant nebula effects.
 * Acts as the base layer for the entire app.
 */
const CosmicBackground = () => {
  // Generate static stars once
  const stars = useMemo(() => generateParticles(20), []);

  return (
    <div className="fixed inset-0 w-full h-full bg-cosmic-dark -z-50 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1e] via-[#1a1035] to-[#0f0a1e]" />

      {/* Distant Nebula Glow */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent opacity-50" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-white select-none pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: star.size === 'lg' ? 20 : star.size === 'md' ? 14 : 8,
            color: star.symbol === '✨' ? '#FBBF24' : 'white'
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        >
          {star.symbol}
        </motion.div>
      ))}

      {/* Shooting Star (Occasional) */}
      <motion.div
        className="absolute w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ top: '10%', left: '100%', opacity: 0 }}
        animate={{
          top: ['10%', '60%'],
          left: ['100%', '-20%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "linear"
        }}
        style={{ rotate: '-45deg' }}
      />
    </div>
  );
};

export default CosmicBackground;
