 import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useUser } from '../context/UserContext';
import { useNavigation } from '../hooks/useNavigation';
import { useLanguage } from '../hooks/useLanguage';
import CosmicBackground from '../components/common/CosmicBackground';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { TIMING } from '../utils/constants'; // Fixed path

const SplashScreen = () => {
  const { isAppReady } = useAppContext();
  const { user, hasOnboarded } = useUser();
  const { navigate, resetNavigation } = useNavigation();
  const { t } = useLanguage();

  useEffect(() => {
    if (isAppReady) {
      const timer = setTimeout(() => {
        if (!hasOnboarded) {
          resetNavigation('language-select');
        } else if (!user?.name) {
          resetNavigation('profile-setup');
        } else {
          resetNavigation('home');
        }
      }, TIMING.SPLASH_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isAppReady, hasOnboarded, user, resetNavigation]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <CosmicBackground />
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-8 backdrop-blur-md shadow-[0_0_40px_rgba(99,102,241,0.4)]"><span className="text-6xl filter drop-shadow-lg">🔮</span></div>
        <motion.h1 className="text-3xl font-bold text-white tracking-wide text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>{t('splash.title')}</motion.h1>
        <motion.p className="text-indigo-200 mt-2 text-sm tracking-widest uppercase" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>{t('splash.subtitle')}</motion.p>
      </motion.div>
      <motion.div className="absolute bottom-20 flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}><LoadingSpinner size="md" color="indigo" /><span className="text-xs text-white/40 tracking-wider">{t('splash.loading')}</span></motion.div>
    </div>
  );
};

export default SplashScreen;
