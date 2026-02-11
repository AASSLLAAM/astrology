import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useLanguage } from '../../hooks/useLanguage';

const NetworkStatus = () => {
  const { isOnline, wasOffline } = useOnlineStatus();
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {/* Offline Banner */}
      {!isOnline && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[100] bg-red-600/90 text-white text-xs font-bold text-center py-1 safe-top-padding"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
        >
          {t('network.offline')}
        </motion.div>
      )}

      {/* Back Online Toast */}
      {isOnline && wasOffline && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[100] bg-green-600/90 text-white text-xs font-bold text-center py-1 safe-top-padding"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ delay: 0.5 }} // Stay for a bit then leave
        >
          {t('network.online')}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NetworkStatus;
