import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import GlassCard from './GlassCard';
import IconButton from './IconButton';

const InstallPrompt = () => {
  const { showInstallPrompt, setShowInstallPrompt, installPWA } = useAppContext();

  if (!showInstallPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-20 left-4 right-4 z-[90]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
      >
        <GlassCard className="flex items-center justify-between p-4 bg-indigo-900/80 border-indigo-500/30">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl">⬇️</div>
            <div>
              <h4 className="font-bold text-white text-sm">Install App</h4>
              <p className="text-xs text-white/70">For better offline experience</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={installPWA}
              className="text-xs bg-white text-indigo-900 font-bold px-3 py-1.5 rounded-lg"
            >
              Install
            </button>
            <IconButton 
              icon="✕" 
              size="sm" 
              variant="ghost" 
              onClick={() => setShowInstallPrompt(false)} 
            />
          </div>
        </GlassCard>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstallPrompt;
