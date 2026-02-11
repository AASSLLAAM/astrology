/**
 * Framer Motion Variants & Transition Presets
 * Used to ensure consistent motion across the app.
 */

// ⚙️ Standard Transition Settings
export const TRANSITIONS = {
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30
  },
  soft: {
    type: "spring",
    stiffness: 100,
    damping: 20
  },
  easeOut: {
    duration: 0.4,
    ease: [0.43, 0.13, 0.23, 0.96]
  }
};

// 📄 Page Transitions (Screen switching)
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Slight slide up
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20, // Slight slide up on exit
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// ⬆️ Slide Up (Cards, Bottom Sheets)
export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: TRANSITIONS.soft
  },
  exit: { 
    y: 50, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// 🌫️ Simple Fade (Text, Backgrounds)
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0 }
};

// 📦 Stagger Container (Lists, Chat bubbles, Tarot deck)
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child
      delayChildren: 0.1
    }
  }
};

// 👶 Child Item (Used inside Stagger Container)
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: TRANSITIONS.soft
  }
};

// 🔍 Scale In (Icons, Popups, Modals)
export const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: TRANSITIONS.spring
  },
  exit: { 
    scale: 0.8, 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

// 🃏 Tarot Card Flip
export const flipVariants = {
  front: { 
    rotateY: 0,
    transition: { duration: 0.6 }
  },
  back: { 
    rotateY: 180,
    transition: { duration: 0.6 }
  }
};

export default {
  TRANSITIONS,
  pageVariants,
  slideUpVariants,
  fadeVariants,
  containerVariants,
  itemVariants,
  scaleVariants,
  flipVariants
};
