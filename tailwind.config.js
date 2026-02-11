/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 🎨 Custom Colors
      colors: {
        'cosmic': {
          'dark': '#0f0a1e',
          'deep': '#1a1035',
          'purple': '#2d1b4e',
          'light': '#3d2b5e'
        },
        'accent': {
          'indigo': '#6366f1',
          'purple': '#a855f7',
          'fuchsia': '#d946ef',
          'cyan': '#22d3ee',
          'gold': '#fbbf24'
        },
        'mystic': {
          'blue': '#818cf8',
          'violet': '#c084fc',
          'rose': '#f472b6',
          'emerald': '#6ee7b7',
          'amber': '#fcd34d'
        }
      },

      // 📐 Border Radius (Large & Round)
      borderRadius: {
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        '4xl': '2rem',      // 32px
        'cosmic': '2rem'    // Default card radius
      },

      // 🌫️ Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'cosmic': '16px'
      },

      // 🔤 Font Family
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },

      // 📏 Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'safe-top': 'env(safe-area-inset-top, 20px)',
        'safe-bottom': 'env(safe-area-inset-bottom, 20px)'
      },

      // 🔲 Box Shadow
      boxShadow: {
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.5)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(99, 102, 241, 0.2)',
        'cosmic': '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 8px rgba(99, 102, 241, 0.1)'
      },

      // 🎭 Animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'scan': 'scan 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 0.6s ease-out'
      },

      // 🔑 Keyframes
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(168, 85, 247, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0)' }
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        bounceSoft: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        }
      },

      // 📱 Screen Sizes
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px'
      },

      // 🖼️ Background Image
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0f0a1e 0%, #1a1035 50%, #2d1b4e 100%)',
        'primary-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
        'love-gradient': 'linear-gradient(135deg, #f472b6 0%, #e879f9 100%)',
        'mystic-gradient': 'linear-gradient(135deg, #c084fc 0%, #6366f1 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)'
      },

      // 🔲 Min Height
      minHeight: {
        'screen-safe': 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom))'
      }
    }
  },
  plugins: []
};
