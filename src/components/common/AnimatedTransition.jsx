import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../theme/animations';

const AnimatedTransition = ({ children, className }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
