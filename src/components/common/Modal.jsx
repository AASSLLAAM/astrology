import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import IconButton from './IconButton'; // Will be created in #71

/**
 * Modal
 * Reusable modal dialog with backdrop and animation.
 */
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  maxWidth = 'max-w-md'
}) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className={`w-full ${maxWidth} bg-[#1a1035] border border-white/10 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <IconButton 
                  icon="✕" 
                  onClick={onClose} 
                  variant="ghost" 
                  size="sm"
                  aria-label="Close"
                />
              </div>

              {/* Body */}
              <div className="p-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {children}
              </div>

              {/* Footer */}
              {footer && (
                <div className="p-5 border-t border-white/5 bg-black/20 flex justify-end gap-3">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
