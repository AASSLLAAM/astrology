/**
 * Typography System
 * Defines standard text styles, weights, and sizes.
 */

export const FONT_FAMILY = {
  main: "'Inter', system-ui, -apple-system, sans-serif",
  heading: "'Inter', system-ui, -apple-system, sans-serif" // Can be swapped for a display font later
};

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

export const FONT_SIZES = {
  xs: '0.75rem',    // 12px - Captions, Labels
  sm: '0.875rem',   // 14px - Body small, Secondary text
  base: '1rem',     // 16px - Body main
  lg: '1.125rem',   // 18px - Subtitles, Buttons
  xl: '1.25rem',    // 20px - Section Headers
  '2xl': '1.5rem',  // 24px - Page Titles
  '3xl': '1.875rem',// 30px - Major Headers
  '4xl': '2.25rem'  // 36px - Splash/Hero Titles
};

export const LINE_HEIGHTS = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75
};

// Ready-to-use Tailwind class sets (mapped for documentation/consistency)
export const TEXT_STYLES = {
  h1: "text-3xl font-bold tracking-tight text-white",
  h2: "text-2xl font-bold tracking-tight text-white",
  h3: "text-xl font-semibold text-white",
  subtitle: "text-lg text-gray-300 leading-normal",
  body: "text-base text-gray-200 leading-relaxed",
  caption: "text-xs text-gray-400 uppercase tracking-wider font-medium",
  button: "text-base font-semibold tracking-wide"
};

export default {
  FONT_FAMILY,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  TEXT_STYLES
};
