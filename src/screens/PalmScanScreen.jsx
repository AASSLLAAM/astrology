 import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import HandSelector from '../components/palm/HandSelector';
import ScanGuide from '../components/palm/ScanGuide';
import PalmScanner from '../components/palm/PalmScanner';
import LoadingOverlay from '../components/common/LoadingOverlay';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { useAppContext } from '../context/AppContext';
import { useToast } from '../hooks/useToast';
import { analyzePalmImage } from '../services/visionService';
import { generatePalmReading } from '../services/aiService';
import { buildPalmSummary } from '../utils/palmLineDescriptions'; // Fixed path
import { HANDS, SCREENS } from '../utils/constants'; // Fixed path

const PalmScanScreen = () => {
  const { t, language } = useLanguage();
  const { navigate } = useNavigation();
  const { showLoading, hideLoading } = useAppContext();
  const { showError } = useToast();

  const [step, setStep] = useState(1); // 1: Select, 2: Scan
  const [selectedHand, setSelectedHand] = useState(null);

  const handleHandSelect = (handId) => {
    setSelectedHand(handId);
    setTimeout(() => setStep(2), 300);
  };

  const handleScanComplete = async (base64Image) => {
    if (!base64Image) return;

    try {
      showLoading(t('palm.scanning'));
      const visionResult = await analyzePalmImage(base64Image);
      const structuredData = buildPalmSummary(visionResult);
      const interpretation = await generatePalmReading(structuredData, language);

      const finalResult = {
        image: base64Image,
        hand: selectedHand,
        timestamp: new Date().toISOString(),
        lines: structuredData,
        analysis: interpretation
      };

      hideLoading();
      navigate(SCREENS.PALM_RESULT, { result: finalResult });

    } catch (error) {
      hideLoading();
      showError(t('errors.image'));
      console.error('Palm Scan Error:', error);
    }
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        <Header title={t('palm.title')} showBack={true} />
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 mt-14 pb-safe-bottom">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-white text-center mb-4">{t('palm.selectHand')}</h2>
                <HandSelector selectedHand={selectedHand} onSelect={handleHandSelect} />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ScanGuide />
                <PalmScanner onScanComplete={handleScanComplete} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default PalmScanScreen;
