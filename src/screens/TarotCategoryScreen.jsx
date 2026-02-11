import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import CategorySelector from '../components/tarot/CategorySelector';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { SCREENS } from '../../utils/constants';

const TarotCategoryScreen = () => {
  const { t } = useLanguage();
  const { navigate } = useNavigation();

  const handleSelect = (categoryId) => {
    navigate(SCREENS.TAROT_READING, { category: categoryId });
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        
        <Header title={t('tarot.title')} showBack={true} />

        <div className="p-6 mt-14">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            {t('tarot.subtitle')}
          </h2>
          <p className="text-gray-400 text-sm text-center mb-8">
            Select a focus for your cosmic guidance
          </p>

          <CategorySelector onSelect={handleSelect} />
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default TarotCategoryScreen;
