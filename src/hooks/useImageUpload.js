import { useState, useCallback, useRef } from 'react';
import { compressImage, validateImage } from '../utils/imageUtils';

/**
 * useImageUpload Hook
 * Handles image selection (camera/gallery), validation, compression, and Base64 encoding.
 */
export const useImageUpload = (options = {}) => {
  const {
    maxSizeMB = 5,                    // Max file size in MB
    acceptedFormats = ['image/jpeg', 'image/png', 'image/webp'],
    compressQuality = 0.7,            // 0.1 to 1.0
    maxWidth = 1024,                  // Max pixel width after compression
    maxHeight = 1024                  // Max pixel height after compression
  } = options;

  const [image, setImage] = useState(null);           // Base64 string
  const [imageFile, setImageFile] = useState(null);    // Raw File object
  const [preview, setPreview] = useState(null);        // Preview URL (blob)
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const fileInputRef = useRef(null);

  /**
   * processFile
   * Validates, compresses, and converts an image file to Base64.
   */
  const processFile = useCallback(async (file) => {
    setError(null);
    setIsProcessing(true);

    try {
      // Step 1: Validate file type
      if (!acceptedFormats.includes(file.type)) {
        throw new Error(`Invalid format. Please use ${acceptedFormats.map(f => f.split('/')[1].toUpperCase()).join(', ')}`);
      }

      // Step 2: Validate file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > maxSizeMB) {
        throw new Error(`Image too large (${fileSizeMB.toFixed(1)}MB). Max size is ${maxSizeMB}MB.`);
      }

      // Step 3: Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setImageFile(file);

      // Step 4: Compress image
      const compressedBase64 = await compressAndConvert(file);
      setImage(compressedBase64);
      setIsProcessing(false);

      return compressedBase64;

    } catch (err) {
      setError(err.message);
      setIsProcessing(false);
      return null;
    }
  }, [acceptedFormats, maxSizeMB]);

  /**
   * compressAndConvert
   * Resizes and converts image to Base64.
   */
  const compressAndConvert = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
          try {
            // Calculate new dimensions
            let width = img.width;
            let height = img.height;

            if (width > maxWidth || height > maxHeight) {
              const ratio = Math.min(maxWidth / width, maxHeight / height);
              width = Math.round(width * ratio);
              height = Math.round(height * ratio);
            }

            // Draw on canvas
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Convert to Base64
            const base64 = canvas.toDataURL('image/jpeg', compressQuality);
            resolve(base64);

          } catch (err) {
            reject(new Error('Failed to process image. Please try another photo.'));
          }
        };

        img.onerror = () => {
          reject(new Error('Could not load image. Please try another photo.'));
        };

        img.src = event.target.result;
      };

      reader.onerror = () => {
        reject(new Error('Could not read file. Please try again.'));
      };

      reader.readAsDataURL(file);
    });
  }, [compressQuality, maxWidth, maxHeight]);

  /**
   * openCamera
   * Opens the device camera for a photo capture.
   */
  const openCamera = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('capture', 'environment');
      fileInputRef.current.setAttribute('accept', 'image/*');
      fileInputRef.current.click();
    }
  }, []);

  /**
   * openGallery
   * Opens the device gallery/file picker.
   */
  const openGallery = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute('capture');
      fileInputRef.current.setAttribute('accept', acceptedFormats.join(','));
      fileInputRef.current.click();
    }
  }, [acceptedFormats]);

  /**
   * handleFileChange
   * Event handler for the hidden file input.
   */
  const handleFileChange = useCallback(async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      await processFile(file);
    }
    // Reset input value so the same file can be re-selected
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [processFile]);

  /**
   * clearImage
   * Resets all image states.
   */
  const clearImage = useCallback(() => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setImage(null);
    setImageFile(null);
    setPreview(null);
    setError(null);
    setIsProcessing(false);
  }, [preview]);

  /**
   * FileInput
   * Hidden input element to attach to the DOM.
   * Must be rendered somewhere in the component tree.
   */
  const FileInput = useCallback(() => (
    <input
      ref={fileInputRef}
      type="file"
      accept={acceptedFormats.join(',')}
      onChange={handleFileChange}
      className="hidden"
      aria-hidden="true"
      tabIndex={-1}
    />
  ), [acceptedFormats, handleFileChange]);

  return {
    // State
    image,           // Base64 encoded image (send to API)
    imageFile,       // Raw File object
    preview,         // Blob URL for preview display
    isProcessing,    // Loading state during compression
    error,           // Error message if any

    // Actions
    openCamera,
    openGallery,
    processFile,
    clearImage,

    // Component
    FileInput,       // Render this hidden input in your component

    // Ref
    fileInputRef
  };
};

export default useImageUpload;
