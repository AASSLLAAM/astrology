import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import ZodiacWheel from '../components/horoscope/ZodiacWheel';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { useUser } from '../context/UserContext';
import { SCREENS } from '../../utils/constants';

const HoroscopeScreen = () => {
  const { t } = useLanguage();
  const { navigate } = useNavigation();
  const { user } = useUser();

  const handleSelect = (signId) => {
    navigate(SCREENS.HOROSCOPE_RESULT, { signId });
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        
        <Header title={t('horoscope.title')} showBack={true} />

        <div className="p-6 mt-14 flex-1 overflow-y-auto custom-scrollbar">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">
              {t('horoscope.subtitle')}
            </h2>
            
            {user?.zodiacSign && (
              <div 
                className="mt-4 inline-flex items-center gap-2 bg-indigo-600/30 border border-indigo-500/50 px-4 py-2 rounded-full cursor-pointer"
                onClick={() => handleSelect(user.zodiacSign.id)}
              >
                <span>{user.zodiacSign.emoji}</span>
                <span className="text-sm font-bold text-white">
                  {t('horoscope.yourSign')}: {user.zodiacSign.name}
                </span>
                <span>➔</span>
              </div>
            )}
          </div>

          <ZodiacWheel onSelect={handleSelect} />
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default HoroscopeScreen;
