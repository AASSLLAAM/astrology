 import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import BottomNavigation from '../components/common/BottomNavigation';
import SettingsItem from '../components/settings/SettingsItem';
import LanguagePicker from '../components/settings/LanguagePicker';
import AboutSection from '../components/settings/AboutSection';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { ShareService } from '../services/shareService';
import { RateService } from '../services/rateService';
import { LINKS } from '../utils/constants'; // Fixed path

const SettingsScreen = () => {
  const { t } = useLanguage();
  const { navigate } = useNavigation();

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col pb-24">
        <CosmicBackground />
        <Header title={t('settings.title')} showBack={false} />
        <div className="p-6 mt-14 flex-1 overflow-y-auto custom-scrollbar">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3 ml-2">{t('settings.language')}</h3>
          <LanguagePicker />
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3 ml-2 mt-8">App</h3>
          <SettingsItem icon="📤" label={t('settings.shareApp')} onClick={() => ShareService.shareApp()} />
          <SettingsItem icon="⭐" label={t('settings.rateApp')} onClick={() => RateService.rateNow()} />
          <SettingsItem icon="🔒" label={t('settings.privacy')} onClick={() => navigate('privacy')} />
          <AboutSection />
        </div>
        <BottomNavigation />
      </div>
    </AnimatedTransition>
  );
};

export default SettingsScreen;
