import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';

const SettingsItem = ({ icon, label, onClick, action }) => {
  return (
    <GlassCard
      className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 active:bg-white/10 mb-3"
      onClick={onClick}
      hover={!!onClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
          {icon}
        </div>
        <span className="text-white font-medium">{label}</span>
      </div>
      
      <div className="text-gray-400">
        {action || (onClick ? '›' : '')}
      </div>
    </GlassCard>
  );
};

export default SettingsItem;
