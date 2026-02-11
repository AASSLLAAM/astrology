import React from 'react';
import Modal from './Modal';
import GradientButton from './GradientButton';
import { useLanguage } from '../../hooks/useLanguage';

const ExitModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useLanguage();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('exit.title')}
      footer={
        <>
          <GradientButton 
            variant="ghost" 
            onClick={onClose}
          >
            {t('exit.stay')}
          </GradientButton>
          <GradientButton 
            variant="danger" 
            onClick={onConfirm}
          >
            {t('exit.leave')}
          </GradientButton>
        </>
      }
    >
      <div className="text-center py-4">
        <div className="text-4xl mb-4">👋</div>
        <p className="text-gray-300">
          {t('exit.message')}
        </p>
      </div>
    </Modal>
  );
};

export default ExitModal;
