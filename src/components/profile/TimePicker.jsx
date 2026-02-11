import React, { useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import GlassCard from '../common/GlassCard';

const TimePicker = ({ value, onChange }) => {
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

  // Convert 24h to 12h format for display
  const formatTime = (time) => {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const h = parseInt(hours, 10);
    const suffix = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${suffix}`;
  };

  return (
    <div onClick={handleDivClick} className="cursor-pointer relative">
      <GlassCard 
        className="flex items-center justify-between p-4 hover:bg-white/10"
        hover
      >
        <span className={value ? 'text-white' : 'text-white/30'}>
          {value ? formatTime(value) : t('profile.timePlaceholder')}
        </span>
        <span className="text-xl opacity-50">⏰</span>
      </GlassCard>

      <input
        ref={inputRef}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        aria-label="Time of Birth"
      />
    </div>
  );
};

export default TimePicker;
