import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();
  const version = import.meta.env.VITE_APP_VERSION || '1.0.0';

  return (
    <div className="mt-8 text-center">
      <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-4 border border-indigo-500/30">
        <span className="text-3xl">🔮</span>
      </div>
      
      <h3 className="text-white font-bold text-lg mb-1">
        AI Palm Reader
      </h3>
      
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
        {t('settings.version')} {version}
      </p>

      <p className="text-gray-500 text-xs px-8">
        Crafted with cosmic energy and AI.
        <br />
        © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default AboutSection;
