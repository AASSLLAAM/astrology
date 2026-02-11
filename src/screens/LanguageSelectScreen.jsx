import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import LanguagePicker from '../components/settings/LanguagePicker';
import GradientButton from '../components/common/GradientButton';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';

const LanguageSelectScreen = () => {
  const { t } = useLanguage();
  const { navigate } = useNavigation();

  const handleContinue = () => {
    navigate('onboarding');
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col p-6">
        <CosmicBackground />

        <div className="flex-1 flex flex-col justify-center mt-safe-top">
          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block">🌍</span>
            <h1 className="text-2xl font-bold text-white mb-2">
              {t('languageSelect.title')}
            </h1>
            <p className="text-gray-400 text-sm">
              {t('languageSelect.subtitle')}
            </p>
          </div>

          <LanguagePicker />
        </div>

        <div className="pb-safe-bottom mb-8">
          <GradientButton 
            fullWidth 
            onClick={handleContinue}
            icon="➔"
          >
            {t('languageSelect.continue')}
          </GradientButton>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default LanguageSelectScreen;
