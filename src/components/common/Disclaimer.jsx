import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Disclaimer = ({ variant = 'full' }) => {
  const { t } = useLanguage();

  if (variant === 'short') {
    return (
      <p className="text-xs text-white/40 text-center mt-4 px-4">
        {t('disclaimer.short')}
      </p>
    );
  }

  return (
    <div className="mt-8 mb-4 px-6 text-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">
        Disclaimer
      </p>
      <p className="text-xs text-white/50 leading-relaxed">
        {t('disclaimer.text')}
      </p>
    </div>
  );
};

export default Disclaimer;
