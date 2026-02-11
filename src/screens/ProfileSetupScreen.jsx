import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import ProfileForm from '../components/profile/ProfileForm';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';

const ProfileSetupScreen = () => {
  const { t } = useLanguage();
  const { resetNavigation } = useNavigation();

  const handleComplete = () => {
    // Profile saved in component, just navigate to home
    resetNavigation('home');
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col p-6 overflow-y-auto custom-scrollbar">
        <CosmicBackground />

        <div className="mt-safe-top mb-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">
            {t('profile.title')}
          </h1>
          <p className="text-gray-400 text-sm">
            {t('profile.subtitle')}
          </p>
        </div>

        <ProfileForm onComplete={handleComplete} />
        
        {/* Bottom Spacer */}
        <div className="h-20" />
      </div>
    </AnimatedTransition>
  );
};

export default ProfileSetupScreen;
