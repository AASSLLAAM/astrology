import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedBackground
 * A subtle, flowing gradient background.
 * Used for specific screens like splash or loading to add life.
 */
const AnimatedBackground = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {/* Gradient Blob 1 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradient Blob 2 */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradient Blob 3 */}
      <motion.div
        className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[90px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
