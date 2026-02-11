import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import GlassCard from '../common/GlassCard';

const LanguagePicker = () => {
  const { language, changeLanguage, supportedLanguages, t } = useLanguage();

  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {supportedLanguages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <GlassCard
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            variant={isActive ? 'active' : 'default'}
            className="p-3 flex items-center justify-center cursor-pointer text-center h-16"
          >
            <div>
              <div className={`font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {lang.native}
              </div>
              <div className="text-[10px] text-gray-500 uppercase">
                {lang.name}
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
};

export default LanguagePicker;
