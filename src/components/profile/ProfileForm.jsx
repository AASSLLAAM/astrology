import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useUser } from '../../context/UserContext';
import { validateProfile } from '../../utils/validators';
import GlassCard from '../common/GlassCard';
import GradientButton from '../common/GradientButton';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import GenderSelector from './GenderSelector';

const ProfileForm = ({ onComplete }) => {
  const { t, language } = useLanguage();
  const { saveUserProfile, user } = useUser();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    dob: user?.dob || '',
    timeOfBirth: user?.timeOfBirth || '',
    gender: user?.gender || ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const validation = validateProfile(formData, language);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Save Logic (simulate slight delay for UX)
    setTimeout(() => {
      saveUserProfile(formData);
      setIsSubmitting(false);
      if (onComplete) onComplete();
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      
      {/* Name Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 ml-1">
          {t('profile.name')}
        </label>
        <GlassCard className={`p-0 overflow-hidden ${errors.name ? 'border-red-500/50' : ''}`}>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder={t('profile.namePlaceholder')}
            className="w-full bg-transparent border-none p-4 text-white placeholder-white/30 focus:ring-0 focus:outline-none"
          />
        </GlassCard>
        {errors.name && (
          <p className="text-xs text-red-400 ml-1">{errors.name}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 ml-1">
          {t('profile.dob')}
        </label>
        <DatePicker
          value={formData.dob}
          onChange={(date) => handleChange('dob', date)}
          error={errors.dob}
        />
        {errors.dob && (
          <p className="text-xs text-red-400 ml-1">{errors.dob}</p>
        )}
      </div>

      {/* Time of Birth */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 ml-1">
          {t('profile.timeOfBirth')}
        </label>
        <TimePicker
          value={formData.timeOfBirth}
          onChange={(time) => handleChange('timeOfBirth', time)}
        />
      </div>

      {/* Gender */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 ml-1">
          {t('profile.gender')}
        </label>
        <GenderSelector
          value={formData.gender}
          onChange={(gender) => handleChange('gender', gender)}
          error={errors.gender}
        />
        {errors.gender && (
          <p className="text-xs text-red-400 ml-1">{errors.gender}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <GradientButton
          fullWidth
          isLoading={isSubmitting}
          onClick={handleSubmit}
        >
          {t('profile.save')}
        </GradientButton>
      </div>
    </form>
  );
};

export default ProfileForm;
