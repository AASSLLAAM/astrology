import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../hooks/useToast';
import clsx from 'clsx';

const Toast = () => {
  const { toasts, dismissToast } = useToast();

  const typeStyles = {
    info: 'bg-gray-800 border-gray-700 text-white',
    success: 'bg-emerald-900/90 border-emerald-700 text-emerald-100',
    error: 'bg-red-900/90 border-red-700 text-red-100',
    warning: 'bg-amber-900/90 border-amber-700 text-amber-100'
  };

  return (
    <div className="fixed bottom-safe-bottom left-0 right-0 z-[100] pointer-events-none flex flex-col items-center gap-2 p-4 mb-16">
      <AnimatePresence>
        {toasts.map((toast) => (
          toast.visible && (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              onClick={() => dismissToast(toast.id)}
              className={clsx(
                'pointer-events-auto px-6 py-3 rounded-full shadow-lg border backdrop-blur-md',
                'flex items-center gap-3 min-w-[200px] max-w-[90vw]',
                'cursor-pointer select-none',
                typeStyles[toast.type]
              )}
            >
              {toast.icon && <span className="text-lg">{toast.icon}</span>}
              <span className="text-sm font-medium">{toast.message}</span>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
