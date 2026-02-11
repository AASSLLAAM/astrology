import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const SwipeableContainer = ({ children, onSwipeLeft, onSwipeRight }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.offset.x > threshold && onSwipeRight) {
      onSwipeRight();
    } else if (info.offset.x < -threshold && onSwipeLeft) {
      onSwipeLeft();
    }
    
    // Reset position
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 30 });
  };

  return (
    <motion.div
      style={{ x, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }} // Snap back
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      className="w-full h-full touch-pan-y"
    >
      {children}
    </motion.div>
  );
};

export default SwipeableContainer;
