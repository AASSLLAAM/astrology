import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { GENDERS } from '../../utils/constants';

const GenderSelector = ({ value, onChange, error }) => {
  const { t } = useLanguage();

  const options = [
    { id: GENDERS.MALE, label: t('profile.male'), icon: '👨' },
    { id: GENDERS.FEMALE, label: t('profile.female'), icon: '👩' },
    { id: GENDERS.OTHER, label: t('profile.other'), icon: '👤' }
  ];

  return (
    <div className={`
      flex gap-3 bg-white/5 p-1 rounded-2xl border 
      ${error ? 'border-red-500/50' : 'border-white/5'}
    `}>
      {options.map((option) => {
        const isSelected = value === option.id;
        
        return (
          <button
            key={option.id}
            type="button" // Prevent form submission
            onClick={() => onChange(option.id)}
            className="flex-1 relative py-3 rounded-xl transition-colors outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            {isSelected && (
              <motion.div
                layoutId="gender-select"
                className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-xl">{option.icon}</span>
              <span className={`text-[10px] font-medium uppercase tracking-wide ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                {option.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default GenderSelector;
