export const COLORS = {
  // 🌌 Main Backgrounds
  background: {
    dark: '#0f0a1e',      // Deepest midnight (Main BG)
    deep: '#1a1035',      // Slightly lighter (Cards)
    overlay: 'rgba(15, 10, 30, 0.95)', // Modal Backdrop
    glass: 'rgba(255, 255, 255, 0.05)', // Glassmorphism layer
  },

  // ✨ Accents & Glows
  accent: {
    primary: '#6366f1',   // Indigo (Buttons/Links)
    secondary: '#a855f7', // Purple (Accents)
    tertiary: '#d946ef',  // Fuchsia (Highlights)
    cyan: '#22d3ee',      // Neon Blue (Tech/AI Glow)
    gold: '#fbbf24',      // Tarot/Stars Gold
  },

  // 📝 Typography
  text: {
    main: '#ffffff',
    secondary: '#94a3b8', // Soft Gray (Slate 400)
    muted: 'rgba(255, 255, 255, 0.4)', // Disabled/Hints
    inverse: '#0f172a',   // Dark text on light buttons
  },

  // 🚦 Semantic States
  status: {
    success: '#10b981',   // Emerald
    error: '#ef4444',     // Red
    warning: '#f59e0b',   // Amber
    info: '#3b82f6',      // Blue
  },

  // 🌈 CSS Gradient Strings
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Main Button
    cosmic: 'linear-gradient(135deg, #0f0a1e 0%, #1a1035 50%, #2d1b4e 100%)', // App BG
    gold: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)', // Premium/Tarot
    mystic: 'linear-gradient(135deg, #c084fc 0%, #6366f1 100%)', // Headers
    love: 'linear-gradient(135deg, #f472b6 0%, #e879f9 100%)', // Love Reading
  }
};

export default COLORS;
