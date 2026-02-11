import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const IconButton = ({ 
  icon, 
  onClick, 
  className, 
  variant = 'default',
  size = 'md',
  ...props 
}) => {
  const styles = {
    default: 'bg-white/10 hover:bg-white/20 text-white',
    ghost: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white',
    primary: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg'
  };

  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <motion.button
      className={clsx(
        'rounded-full flex items-center justify-center transition-colors',
        styles[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {typeof icon === 'string' ? <span>{icon}</span> : icon}
    </motion.button>
  );
};

export default IconButton;
