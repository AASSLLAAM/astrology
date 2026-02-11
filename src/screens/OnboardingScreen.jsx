import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import OnboardingContent from '../components/onboarding/OnboardingContent';
import { useNavigation } from '../hooks/useNavigation';

const OnboardingScreen = () => {
  const { resetNavigation } = useNavigation();

  const handleComplete = () => {
    // Proceed to profile setup, clearing history so user can't swipe back to onboarding
    resetNavigation('profile-setup');
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full">
        <CosmicBackground />
        <OnboardingContent onComplete={handleComplete} />
      </div>
    </AnimatedTransition>
  );
};

export default OnboardingScreen;
