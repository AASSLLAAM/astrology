import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useImageUpload } from '../../hooks/useImageUpload';
import { useWakeLock } from '../../hooks/useWakeLock';
import { useLanguage } from '../../hooks/useLanguage';
import GradientButton from '../common/GradientButton';
import LoadingSpinner from '../common/LoadingSpinner';
import IconButton from '../common/IconButton';

/**
 * PalmScanner
 * Handles image capture and simulates the scanning process.
 * 
 * @param {Function} onScanComplete - Returns the analyzed data
 */
const PalmScanner = ({ onScanComplete }) => {
  const { t } = useLanguage();
  const { requestWakeLock, releaseWakeLock } = useWakeLock();
  
  const {
    image,
    preview,
    isProcessing,
    error,
    openCamera,
    openGallery,
    clearImage,
    FileInput
  } = useImageUpload({
    maxSizeMB: 5,
    maxWidth: 1024
  });

  const [isScanning, setIsScanning] = useState(false);

  // Keep screen on while component is active
  useEffect(() => {
    requestWakeLock();
    return () => releaseWakeLock();
  }, []);

  // Handle image selection -> start simulated scan
  useEffect(() => {
    if (image && !isScanning) {
      startScanProcess();
    }
  }, [image]);

  const startScanProcess = async () => {
    setIsScanning(true);

    // Simulate scanning animation time (3s)
    // In a real app, you would call the API here in parallel
    // but for UX, we show the cool animation first.
    setTimeout(() => {
      onScanComplete(image); // Pass base64 image up to parent
    }, 3500);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[400px]">
      <FileInput />

      {/* Camera/Preview Area */}
      <div className="relative w-full aspect-[3/4] max-w-sm bg-black/40 rounded-3xl overflow-hidden border-2 border-dashed border-white/20 mb-6 group">
        
        {/* State: Empty (No Image) */}
        {!preview && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
            <div className="w-20 h-20 rounded-full border-2 border-white/10 flex items-center justify-center mb-4">
              <span className="text-4xl">📸</span>
            </div>
            <p className="text-sm">Tap buttons below</p>
          </div>
        )}

        {/* State: Preview (Image Selected) */}
        {preview && (
          <>
            <img 
              src={preview} 
              alt="Palm Preview" 
              className="w-full h-full object-cover"
            />
            
            {/* Clear Button (only if not scanning) */}
            {!isScanning && (
              <div className="absolute top-4 right-4">
                <IconButton 
                  icon="✕" 
                  onClick={clearImage}
                  variant="ghost"
                  className="bg-black/50 backdrop-blur-md"
                />
              </div>
            )}
          </>
        )}

        {/* Scanner Overlay Animation */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Scan Line */}
              <motion.div
                className="absolute left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-overlay" />

              {/* Analysis Text */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-cyan-500/30">
                  <LoadingSpinner size="sm" color="indigo" />
                  <span className="text-xs font-mono text-cyan-300 tracking-wider">
                    ANALYZING LINES...
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      {!isScanning && (
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <GradientButton
            variant="secondary"
            icon="🖼️"
            onClick={openGallery}
            disabled={isProcessing}
          >
            {t('palm.uploadImage')}
          </GradientButton>

          <GradientButton
            variant="primary"
            icon="📷"
            onClick={openCamera}
            disabled={isProcessing}
          >
            {t('palm.takePhoto')}
          </GradientButton>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-4 text-sm text-red-400 bg-red-900/20 px-4 py-2 rounded-lg">
          {error}
        </p>
      )}
    </div>
  );
};

export default PalmScanner;
