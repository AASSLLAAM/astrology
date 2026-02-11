import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SwipeableContainer from '../common/SwipeableContainer';
import OnboardingSlide from './OnboardingSlide';
import OnboardingDots from './OnboardingDots';
import GradientButton from '../common/GradientButton';
import { useLanguage } from '../../hooks/useLanguage';
import { ONBOARDING_SLIDES, getSlideContent } from '../../data/onboardingData';

const OnboardingContent = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();
  
  const totalSlides = ONBOARDING_SLIDES.length;

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Get localized content for current slide
  const currentSlide = getSlideContent(currentIndex, language, t);

  return (
    <div className="flex flex-col h-full relative overflow-hidden pb-safe-bottom">
      {/* Skip Button */}
      <div className="absolute top-safe-top right-4 z-20">
        <button 
          onClick={onComplete}
          className="text-white/50 text-sm font-medium hover:text-white transition-colors"
        >
          {t('onboarding.skip')}
        </button>
      </div>

      {/* Swipe Area */}
      <div className="flex-1 mt-safe-top">
        <SwipeableContainer onSwipeLeft={handleNext} onSwipeRight={handlePrev}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <OnboardingSlide slide={currentSlide} />
            </motion.div>
          </AnimatePresence>
        </SwipeableContainer>
      </div>

      {/* Footer Controls */}
      <div className="px-6 pb-8 pt-4">
        <OnboardingDots total={totalSlides} current={currentIndex} />
        
        <GradientButton 
          fullWidth 
          onClick={handleNext}
          className="mt-4"
        >
          {currentIndex === totalSlides - 1 
            ? t('onboarding.getStarted') 
            : t('onboarding.next')
          }
        </GradientButton>
      </div>
    </div>
  );
};

export default OnboardingContent;
