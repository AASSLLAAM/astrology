import React from 'react';
import GlassCard from './GlassCard';

const FeatureCard = ({ title, icon, gradient, onClick, delay = 0 }) => {
  return (
    <GlassCard
      className="flex flex-col items-center justify-center text-center h-32 relative group overflow-hidden"
      hover
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1 }}
    >
      {/* Background Gradient Blob */}
      <div className={`
        absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20
        bg-gradient-to-br ${gradient}
        group-hover:opacity-40 transition-opacity duration-500
      `} />

      <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-sm font-semibold text-white/90 leading-tight">
        {title}
      </h3>
    </GlassCard>
  );
};

export default FeatureCard;
