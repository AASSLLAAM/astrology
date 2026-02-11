import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import GlassCard from '../common/GlassCard';

/**
 * ScanGuide
 * Visual instructions for capturing a good palm image.
 */
const ScanGuide = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: '💡', text: t('palm.guideSteps.step1') },
    { icon: '🖐️', text: t('palm.guideSteps.step2') },
    { icon: '🔎', text: t('palm.guideSteps.step3') },
  ];

  return (
    <GlassCard className="mb-6">
      <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-80">
        {t('palm.scanGuide')}
      </h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-sm">
              {step.icon}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed pt-1">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ScanGuide;
