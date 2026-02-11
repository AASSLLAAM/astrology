import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { GLASS_CLASSES } from '../../theme/glassmorphism';

/**
 * GlassCard Component
 * A reusable container with the signature "Cosmic Glass" effect.
 * 
 * @param {React.ReactNode} children - Content to render inside
 * @param {string} className - Additional CSS classes
 * @param {string} variant - 'default', 'dark', 'active', 'clean'
 * @param {boolean} hover - Enable hover lift effect
 * @param {boolean} glow - Enable subtle glow border
 * @param {Function} onClick - Click handler
 * @param {Object} motionProps - Props passed to Framer Motion
 */
const GlassCard = ({
  children,
  className,
  variant = 'default',
  hover = false,
  glow = false,
  onClick,
  ...motionProps
}) => {
  // Map variants to predefined glass styles
  const variantStyles = {
    default: GLASS_CLASSES.card,
    dark: GLASS_CLASSES.cardDark,
    active: GLASS_CLASSES.cardActive,
    clean: 'bg-white/5 border border-white/5 backdrop-blur-sm' // Lighter version
  };

  // Base classes always applied
  const baseClasses = 'rounded-3xl p-6 transition-all duration-300 relative overflow-hidden';
  
  // Interactive classes
  const hoverClasses = hover ? 'hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  // Glow effect class
  const glowClasses = glow ? 'shadow-[0_0_20px_rgba(99,102,241,0.2)] border-indigo-500/30' : '';

  // Combine all classes
  const styles = clsx(
    baseClasses,
    variantStyles[variant] || variantStyles.default,
    hoverClasses,
    glowClasses,
    className
  );

  // Default motion variants if none provided
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={styles}
      onClick={onClick}
      initial="hidden"
      animate="visible"
      variants={defaultVariants}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      {...motionProps}
    >
      {/* Optional: Subtle gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      
      {/* Content wrapper to ensure z-index above overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
