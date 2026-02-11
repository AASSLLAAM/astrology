import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import LoadingSpinner from './LoadingSpinner';

const LoadingOverlay = () => {
  const { isLoading, loadingMessage } = useAppContext();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Glowing Ring Effect */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-20 animate-pulse"></div>
            <LoadingSpinner size="xl" color="white" />
          </div>

          {/* Message */}
          <motion.p
            className="mt-6 text-white text-lg font-medium tracking-wide text-center px-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {loadingMessage || 'Loading...'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
