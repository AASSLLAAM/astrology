import React, { useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { formatDate, getMaxDate, getMinDate } from '../../utils/dateHelpers';
import GlassCard from '../common/GlassCard';

const DatePicker = ({ value, onChange, error }) => {
  const { t } = useLanguage();
  const inputRef = useRef(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      if (inputRef.current.showPicker) {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus();
      }
    }
  };

  const displayDate = value ? formatDate(value, 'long') : '';

  return (
    <div onClick={handleDivClick} className="cursor-pointer relative">
      <GlassCard 
        className={`flex items-center justify-between p-4 hover:bg-white/10 ${error ? 'border-red-500/50' : ''}`}
        hover
      >
        <span className={value ? 'text-white' : 'text-white/30'}>
          {displayDate || t('profile.dobPlaceholder')}
        </span>
        <span className="text-xl opacity-50">📅</span>
      </GlassCard>

      {/* Hidden Native Input */}
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        max={getMaxDate()}
        min={getMinDate()}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        aria-label="Date of Birth"
      />
    </div>
  );
};

export default DatePicker;
