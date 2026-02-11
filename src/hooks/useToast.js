import { useState, useCallback, useEffect, useRef } from 'react';
import { create } from 'zustand';

/**
 * Toast Store (Zustand)
 * Global state for toast messages accessible from anywhere.
 * Using Zustand here because toasts can be triggered from services,
 * not just React components.
 */
const useToastStore = create((set, get) => ({
  toasts: [],
  
  /**
   * addToast
   * Adds a new toast to the queue.
   * @param {object} toast - Toast configuration
   */
  addToast: (toast) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const newToast = {
      id,
      message: toast.message || '',
      type: toast.type || 'info', // 'success', 'error', 'warning', 'info'
      duration: toast.duration || 3000,
      icon: toast.icon || null,
      visible: true
    };

    set((state) => ({
      toasts: [...state.toasts, newToast]
    }));

    // Auto dismiss
    setTimeout(() => {
      get().dismissToast(id);
    }, newToast.duration);

    return id;
  },

  /**
   * dismissToast
   * Marks a toast as not visible (triggers exit animation).
   * Then removes it after animation completes.
   */
  dismissToast: (id) => {
    set((state) => ({
      toasts: state.toasts.map(t => 
        t.id === id ? { ...t, visible: false } : t
      )
    }));

    // Remove from DOM after animation (300ms)
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter(t => t.id !== id)
      }));
    }, 300);
  },

  /**
   * clearAll
   * Removes all toasts immediately.
   */
  clearAll: () => {
    set({ toasts: [] });
  }
}));

/**
 * useToast Hook
 * Provides convenient methods to show toasts.
 */
export const useToast = () => {
  const { toasts, addToast, dismissToast, clearAll } = useToastStore();

  /**
   * showToast
   * Quick function to show a toast with a message.
   * @param {string} message - The text to display
   * @param {string} type - Toast type ('info', 'success', 'error', 'warning')
   * @param {number} duration - Auto-dismiss time in ms
   */
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    return addToast({ message, type, duration });
  }, [addToast]);

  /**
   * showSuccess
   * Shorthand for success toast.
   */
  const showSuccess = useCallback((message, duration = 3000) => {
    return addToast({ message, type: 'success', icon: '✓', duration });
  }, [addToast]);

  /**
   * showError
   * Shorthand for error toast.
   */
  const showError = useCallback((message, duration = 4000) => {
    return addToast({ message, type: 'error', icon: '✕', duration });
  }, [addToast]);

  /**
   * showWarning
   * Shorthand for warning toast.
   */
  const showWarning = useCallback((message, duration = 3500) => {
    return addToast({ message, type: 'warning', icon: '⚠', duration });
  }, [addToast]);

  /**
   * showInfo
   * Shorthand for info toast.
   */
  const showInfo = useCallback((message, duration = 3000) => {
    return addToast({ message, type: 'info', icon: 'ℹ', duration });
  }, [addToast]);

  return {
    toasts,
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    dismissToast,
    clearAll
  };
};

// Export store for non-React usage (e.g., in services)
export { useToastStore };
export default useToast;
