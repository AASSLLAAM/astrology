import React from 'react';
import { motion } from 'framer-motion';

const OnboardingDots = ({ total, current }) => {
  return (
    <div className="flex gap-2 justify-center py-4">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-2 rounded-full transition-colors duration-300 ${i === current ? 'bg-white' : 'bg-white/20'}`}
          animate={{ width: i === current ? 24 : 8 }}
          layout
        />
      ))}
    </div>
  );
};

export default OnboardingDots;
