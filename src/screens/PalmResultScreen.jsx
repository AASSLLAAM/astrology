 import React, { useEffect } from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import PalmAnalysisCard from '../components/palm/PalmAnalysisCard';
import PalmLineResult from '../components/palm/PalmLineResult';
import GradientButton from '../components/common/GradientButton';
import Disclaimer from '../components/common/Disclaimer';
import { useNavigation } from '../hooks/useNavigation';
import { useLanguage } from '../hooks/useLanguage';
import { ShareService } from '../services/shareService';
import { HistoryService } from '../services/historyService';
import { RateService } from '../services/rateService';
import { READING_TYPES, PALM_LINES } from '../utils/constants'; // Fixed path

const PalmResultScreen = () => {
  const { t } = useLanguage();
  const { getParam, navigate } = useNavigation();
  const result = getParam('result');

  useEffect(() => {
    if (result) {
      HistoryService.addEntry(READING_TYPES.PALM, result);
      RateService.logEvent();
    }
  }, [result]);

  const handleShare = () => {
    ShareService.shareReading('Palm Reading', result.analysis);
  };

  const handleScanAgain = () => {
    navigate('palm-scan', {}, true);
  };

  if (!result) return null;

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        <Header title={t('palm.result.title')} showBack={true} rightAction={<button onClick={handleShare} className="text-2xl">📤</button>} />
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 mt-14 pb-safe-bottom">
          <PalmAnalysisCard analysis={result.analysis} />
          <div className="space-y-4 mb-8">
            <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest px-2">{t('palm.result.fullReading')}</h3>
            <PalmLineResult title={t('palm.result.heartLine')} description={result.lines.heartLine.interpretation?.meaning || t('palm.result.heartDesc')} icon="❤️" color="#EF4444" />
            <PalmLineResult title={t('palm.result.headLine')} description={result.lines.headLine.interpretation?.meaning || t('palm.result.headDesc')} icon="🧠" color="#3B82F6" />
            <PalmLineResult title={t('palm.result.lifeLine')} description={result.lines.lifeLine.interpretation?.meaning || t('palm.result.lifeDesc')} icon="🌿" color="#22C55E" />
            <PalmLineResult title={t('palm.result.fateLine')} description={result.lines.fateLine.interpretation?.meaning || t('palm.result.fateDesc')} icon="✨" color="#A855F7" />
          </div>
          <GradientButton variant="outline" fullWidth onClick={handleScanAgain} className="mb-6">{t('palm.result.scanAgain')}</GradientButton>
          <Disclaimer />
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default PalmResultScreen;
