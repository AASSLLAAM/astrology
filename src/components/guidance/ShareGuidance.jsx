import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { ShareService } from '../../services/shareService';
import GradientButton from '../common/GradientButton';
import { useToast } from '../../hooks/useToast';

/**
 * ShareGuidance
 * Button to share daily guidance result.
 */
const ShareGuidance = ({ guidance }) => {
  const { t } = useLanguage();
  const { showSuccess } = useToast();
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (!guidance) return;
    
    setIsSharing(true);
    
    // Construct meaningful share text
    const text = `✨ My Cosmic Energy Today\n\nEnergy: ${guidance.energy?.label}\nFocus: ${guidance.focus?.label}\nLucky Element: ${guidance.lucky?.element?.name}\n\nDiscover your daily guidance with AI Palm Reader!`;

    const result = await ShareService.share({
      title: 'My Daily Cosmic Guidance',
      text: text,
      url: window.location.origin
    });

    if (result === 'copied') {
      showSuccess('Copied to clipboard!');
    }
    
    setIsSharing(false);
  };

  return (
    <div className="mt-6 px-4">
      <GradientButton
        variant="secondary"
        icon="📤"
        fullWidth
        onClick={handleShare}
        disabled={isSharing}
      >
        {t('daily.share')}
      </GradientButton>
    </div>
  );
};

export default ShareGuidance;
