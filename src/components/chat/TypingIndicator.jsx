import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white/5 rounded-2xl rounded-bl-none px-4 py-3 w-fit border border-white/5 flex items-center gap-1"
    >
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: dot * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default TypingIndicator;
