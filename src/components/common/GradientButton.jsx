import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import LoadingSpinner from './LoadingSpinner'; // We'll create this shortly, forward reference is fine

/**
 * GradientButton Component
 * Primary call-to-action button with cosmic gradients.
 * 
 * @param {React.ReactNode} children - Button text or content
 * @param {Function} onClick - Click handler
 * @param {string} variant - 'primary', 'secondary', 'outline', 'ghost'
 * @param {boolean} isLoading - Show loading spinner
 * @param {boolean} disabled - Disable interaction
 * @param {string} className - Extra classes
 * @param {React.ReactNode} icon - Optional icon component
 * @param {boolean} fullWidth - Stretch to full width
 */
const GradientButton = ({
  children,
  onClick,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  className,
  icon,
  fullWidth = false,
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm',
    outline: 'bg-transparent border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500/10',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
    danger: 'bg-red-500/20 text-red-200 border border-red-500/50 hover:bg-red-500/30'
  };

  // Construct classes
  const buttonClass = clsx(
    'relative overflow-hidden rounded-2xl font-semibold transition-all duration-300',
    'flex items-center justify-center gap-2',
    'py-3.5 px-6', // Comfortable touch target size
    fullWidth ? 'w-full' : 'w-auto',
    variants[variant],
    disabled || isLoading ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-[1.02] active:scale-[0.98]',
    className
  );

  return (
    <motion.button
      className={buttonClass}
      onClick={disabled || isLoading ? undefined : onClick}
      disabled={disabled || isLoading}
      whileTap={!(disabled || isLoading) ? { scale: 0.96 } : undefined}
      {...props}
    >
      {/* Loading State */}
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" color="white" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {/* Icon (if provided) */}
          {icon && <span className="text-xl">{icon}</span>}
          
          {/* Button Text */}
          <span className="relative z-10">{children}</span>
        </>
      )}

      {/* Primary Variant Glow Effect */}
      {variant === 'primary' && !disabled && !isLoading && (
        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 rounded-2xl pointer-events-none" />
      )}
    </motion.button>
  );
};

export default GradientButton;
