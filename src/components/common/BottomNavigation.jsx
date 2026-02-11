import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../hooks/useNavigation';
import { useLanguage } from '../../hooks/useLanguage';
import { SCREENS } from '../../utils/constants';

const BottomNavigation = () => {
  const { currentScreen, navigate } = useNavigation();
  const { t } = useLanguage();

  const navItems = [
    { id: SCREENS.HOME, label: 'Home', icon: '🏠' },
    { id: SCREENS.DAILY_GUIDANCE, label: 'Daily', icon: '✨' },
    { id: SCREENS.SETTINGS, label: 'Settings', icon: '⚙️' }
  ];

  // Only show on main screens
  const showNav = [SCREENS.HOME, SCREENS.DAILY_GUIDANCE, SCREENS.SETTINGS].includes(currentScreen);

  if (!showNav) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f0a1e]/90 backdrop-blur-xl border-t border-white/10 pb-safe-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="relative flex flex-col items-center justify-center w-full h-full"
            >
              <div className={`
                text-2xl transition-transform duration-300
                ${isActive ? 'scale-110 -translate-y-1' : 'opacity-50'}
              `}>
                {item.icon}
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-2 w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
