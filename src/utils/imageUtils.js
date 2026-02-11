/**
 * Image Utils
 * Image processing utilities for compression, resizing, and palm scan preprocessing.
 */

import { LIMITS } from './constants';

/**
 * compressImage
 * Compresses and resizes an image to meet size and dimension limits.
 * 
 * @param {File|Blob} file - Image file to compress
 * @param {Object} options - Compression options
 * @param {number} options.maxWidth - Maximum width in pixels
 * @param {number} options.maxHeight - Maximum height in pixels
 * @param {number} options.quality - JPEG quality (0.1 to 1.0)
 * @param {string} options.format - Output format ('jpeg', 'png', 'webp')
 * @returns {Promise<string>} - Base64 data URL
 */
export const compressImage = async (file, options = {}) => {
  const {
    maxWidth = LIMITS.MAX_IMAGE_WIDTH,
    maxHeight = LIMITS.MAX_IMAGE_HEIGHT,
    quality = 0.8,
    format = 'jpeg'
  } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        try {
          // Calculate new dimensions maintaining aspect ratio
          let { width, height } = calculateDimensions(
            img.width,
            img.height,
            maxWidth,
            maxHeight
          );

          // Create canvas for compression
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          
          // Enable image smoothing for better quality
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          // Draw image on canvas
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to desired format
          const mimeType = `image/${format}`;
          const dataUrl = canvas.toDataURL(mimeType, quality);

          resolve(dataUrl);
        } catch (error) {
          reject(new Error('Failed to compress image: ' + error.message));
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image for compression'));
      };

      img.src = event.target.result;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read image file'));
    };

    reader.readAsDataURL(file);
  });
};

/**
 * calculateDimensions
 * Calculates new dimensions while maintaining aspect ratio.
 * 
 * @param {number} originalWidth
 * @param {number} originalHeight
 * @param {number} maxWidth
 * @param {number} maxHeight
 * @returns {{ width: number, height: number }}
 */
export const calculateDimensions = (originalWidth, originalHeight, maxWidth, maxHeight) => {
  let width = originalWidth;
  let height = originalHeight;

  // Only resize if image exceeds limits
  if (width > maxWidth || height > maxHeight) {
    const ratio = Math.min(maxWidth / width, maxHeight / height);
    width = Math.round(width * ratio);
    height = Math.round(height * ratio);
  }

  return { width, height };
};

/**
 * fileToBase64
 * Converts a File or Blob to a base64 data URL.
 * 
 * @param {File|Blob} file
 * @returns {Promise<string>}
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

/**
 * base64ToBlob
 * Converts a base64 data URL to a Blob.
 * 
 * @param {string} dataUrl - Base64 data URL
 * @returns {Blob}
 */
export const base64ToBlob = (dataUrl) => {
  const parts = dataUrl.split(',');
  const mimeMatch = parts[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : 'image/jpeg';
  const bstr = atob(parts[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
};

/**
 * getImageDimensions
 * Gets the natural dimensions of an image from its source.
 * 
 * @param {string} src - Image source (URL or data URL)
 * @returns {Promise<{ width: number, height: number }>}
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = src;
  });
};

/**
 * getImageSize
 * Calculates the approximate size of a base64 image in bytes.
 * 
 * @param {string} dataUrl - Base64 data URL
 * @returns {{ bytes: number, kb: number, mb: number }}
 */
export const getImageSize = (dataUrl) => {
  if (!dataUrl) return { bytes: 0, kb: 0, mb: 0 };
  
  const base64Length = dataUrl.length - (dataUrl.indexOf(',') + 1);
  const bytes = Math.round((base64Length * 3) / 4);
  
  return {
    bytes,
    kb: Math.round(bytes / 1024 * 100) / 100,
    mb: Math.round(bytes / (1024 * 1024) * 100) / 100
  };
};

/**
 * validateImage
 * Validates an image file for type and size.
 * 
 * @param {File} file - Image file to validate
 * @param {Object} options - Validation options
 * @returns {{ valid: boolean, error: string|null }}
 */
export const validateImage = (file, options = {}) => {
  const {
    maxSizeMB = LIMITS.MAX_IMAGE_SIZE_MB,
    allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  } = options;

  if (!file) {
    return { valid: false, error: 'No file provided' };
  }

  // Check file type
  if (!allowedTypes.includes(file.type)) {
    const formats = allowedTypes.map(t => t.split('/')[1].toUpperCase()).join(', ');
    return { valid: false, error: `Invalid format. Please use ${formats}` };
  }

  // Check file size
  const sizeMB = file.size / (1024 * 1024);
  if (sizeMB > maxSizeMB) {
    return { valid: false, error: `Image too large (${sizeMB.toFixed(1)}MB). Maximum is ${maxSizeMB}MB` };
  }

  return { valid: true, error: null };
};

/**
 * cropToSquare
 * Crops an image to a square from the center.
 * 
 * @param {string} dataUrl - Base64 image data URL
 * @returns {Promise<string>} - Cropped base64 data URL
 */
export const cropToSquare = (dataUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      try {
        const size = Math.min(img.width, img.height);
        const x = (img.width - size) / 2;
        const y = (img.height - size) / 2;

        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, x, y, size, size, 0, 0, size, size);

        resolve(canvas.toDataURL('image/jpeg', 0.9));
      } catch (error) {
        reject(new Error('Failed to crop image'));
      }
    };

    img.onerror = () => reject(new Error('Failed to load image for cropping'));
    img.src = dataUrl;
  });
};

/**
 * rotateImage
 * Rotates an image by the specified degrees.
 * 
 * @param {string} dataUrl - Base64 image data URL
 * @param {number} degrees - Rotation degrees (90, 180, 270)
 * @returns {Promise<string>}
 */
export const rotateImage = (dataUrl, degrees) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Swap dimensions for 90/270 degree rotation
        if (degrees === 90 || degrees === 270) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }

        // Rotate around center
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((degrees * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);

        resolve(canvas.toDataURL('image/jpeg', 0.9));
      } catch (error) {
        reject(new Error('Failed to rotate image'));
      }
    };

    img.onerror = () => reject(new Error('Failed to load image for rotation'));
    img.src = dataUrl;
  });
};

/**
 * enhanceForPalmReading
 * Applies image enhancements optimized for palm line detection.
 * Increases contrast and sharpness for better AI analysis.
 * 
 * @param {string} dataUrl - Base64 image data URL
 * @param {Object} options - Enhancement options
 * @returns {Promise<string>}
 */
export const enhanceForPalmReading = (dataUrl, options = {}) => {
  const {
    contrast = 1.2,      // Increase contrast slightly
    brightness = 1.0,    // Keep brightness normal
    saturation = 0.8     // Slightly reduce saturation for clearer lines
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');

        // Apply CSS filters equivalent
        ctx.filter = `contrast(${contrast}) brightness(${brightness}) saturate(${saturation})`;
        ctx.drawImage(img, 0, 0);

        resolve(canvas.toDataURL('image/jpeg', 0.9));
      } catch (error) {
        // If filter fails, return original
        resolve(dataUrl);
      }
    };

    img.onerror = () => reject(new Error('Failed to enhance image'));
    img.src = dataUrl;
  });
};

/**
 * addPalmGuideOverlay
 * Adds a guide overlay to help users position their palm correctly.
 * Used for preview, not for final processing.
 * 
 * @param {string} dataUrl - Base64 image data URL
 * @returns {Promise<string>}
 */
export const addPalmGuideOverlay = (dataUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        
        // Draw original image
        ctx.drawImage(img, 0, 0);

        // Draw guide overlay
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.35;

        // Semi-transparent overlay outside the guide area
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Clear circle for palm area
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Reset composite operation
        ctx.globalCompositeOperation = 'source-over';

        // Draw guide circle border
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw center cross
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        
        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(centerX - radius * 0.5, centerY);
        ctx.lineTo(centerX + radius * 0.5, centerY);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - radius * 0.5);
        ctx.lineTo(centerX, centerY + radius * 0.5);
        ctx.stroke();

        resolve(canvas.toDataURL('image/png'));
      } catch (error) {
        reject(new Error('Failed to add guide overlay'));
      }
    };

    img.onerror = () => reject(new Error('Failed to load image for overlay'));
    img.src = dataUrl;
  });
};

/**
 * processForUpload
 * Complete processing pipeline for palm images before upload.
 * 
 * @param {File|Blob} file - Original image file
 * @param {Object} options - Processing options
 * @returns {Promise<{ original: string, processed: string, size: Object }>}
 */
export const processForUpload = async (file, options = {}) => {
  const {
    maxWidth = LIMITS.MAX_IMAGE_WIDTH,
    maxHeight = LIMITS.MAX_IMAGE_HEIGHT,
    quality = 0.85,
    enhance = true
  } = options;

  // Step 1: Compress and resize
  let processed = await compressImage(file, {
    maxWidth,
    maxHeight,
    quality,
    format: 'jpeg'
  });

  // Step 2: Enhance for palm reading (optional)
  if (enhance) {
    processed = await enhanceForPalmReading(processed);
  }

  // Get final size
  const size = getImageSize(processed);

  return {
    original: await fileToBase64(file),
    processed,
    size
  };
};

/**
 * createThumbnail
 * Creates a small thumbnail of an image for history/preview.
 * 
 * @param {string} dataUrl - Base64 image data URL
 * @param {number} size - Thumbnail size in pixels
 * @returns {Promise<string>}
 */
export const createThumbnail = (dataUrl, size = 100) => {
  return compressImage(base64ToBlob(dataUrl), {
    maxWidth: size,
    maxHeight: size,
    quality: 0.7,
    format: 'jpeg'
  });
};

/**
 * downloadImage
 * Triggers a download of an image.
 * 
 * @param {string} dataUrl - Base64 image data URL
 * @param {string} filename - Download filename
 */
export const downloadImage = (dataUrl, filename = 'palm-reading.jpg') => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * canvasSupportsFilters
 * Checks if the browser supports canvas filters.
 * 
 * @returns {boolean}
 */
export const canvasSupportsFilters = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  return typeof ctx.filter !== 'undefined';
};

export default {
  compressImage,
  calculateDimensions,
  fileToBase64,
  base64ToBlob,
  getImageDimensions,
  getImageSize,
  validateImage,
  cropToSquare,
  rotateImage,
  enhanceForPalmReading,
  addPalmGuideOverlay,
  processForUpload,
  createThumbnail,
  downloadImage,
  canvasSupportsFilters
};
