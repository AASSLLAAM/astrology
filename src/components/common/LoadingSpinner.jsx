import React from 'react';
import { motion } from 'framer-motion';

/**
 * LoadingSpinner
 * Customizable spinner for loading states.
 * 
 * @param {string} size - 'sm', 'md', 'lg', 'xl'
 * @param {string} color - 'white', 'indigo', 'purple'
 */
const LoadingSpinner = ({ size = 'md', color = 'white' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const colors = {
    white: 'border-white/20 border-t-white',
    indigo: 'border-indigo-200 border-t-indigo-600',
    purple: 'border-purple-200 border-t-purple-600'
  };

  return (
    <motion.div
      className={`rounded-full ${sizes[size]} ${colors[color]}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default LoadingSpinner;
