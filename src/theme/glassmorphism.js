/**
 * Glassmorphism Theme Tokens
 * Centralized styles for the "Cosmic Glass" aesthetic.
 */

export const GLASS_EFFECTS = {
  // 🃏 Standard Card (Feature Cards, List Items)
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
  },

  // 🧛 Darker Card (Modals, Dropdowns)
  cardDark: {
    background: "rgba(15, 10, 30, 0.6)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
  },

  // ✨ Highlight/Active Card (Selected Items)
  cardActive: {
    background: "rgba(99, 102, 241, 0.15)", // Indigo tint
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(168, 85, 247, 0.4)", // Purple border
    boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)"
  },

  // 🧭 Navigation Bar / Bottom Sheet
  nav: {
    background: "rgba(15, 10, 30, 0.8)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)"
  },

  // 🔘 Glass Button
  button: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
  },

  // 📝 Input Field
  input: {
    background: "rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#ffffff"
  }
};

// Tailwind CSS class equivalents for easy usage in JSX className
export const GLASS_CLASSES = {
  card: "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg",
  cardDark: "bg-cosmic-bg/60 backdrop-blur-xl border border-white/5 shadow-2xl",
  cardActive: "bg-indigo-500/15 backdrop-blur-md border border-purple-500/40 shadow-[0_0_15px_rgba(99,102,241,0.2)]",
  nav: "bg-cosmic-bg/80 backdrop-blur-2xl border-t border-white/10",
  button: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all",
  input: "bg-black/20 border border-white/10 text-white placeholder-white/40 focus:border-indigo-500/50 focus:outline-none"
};

export default {
  effects: GLASS_EFFECTS,
  classes: GLASS_CLASSES
};
