import React from 'react';
import { motion } from 'framer-motion';

const OnboardingSlide = ({ slide }) => {
  if (!slide) return null;

  return (
    <div className="w-full h-full flex flex-col items-center px-6 pt-10 text-center">
      {/* Illustration Area */}
      <motion.div 
        className="relative w-64 h-64 mb-8 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-[60px] opacity-30"
          style={{ background: `linear-gradient(${slide.gradient.direction}, ${slide.gradient.colors[0]}, ${slide.gradient.colors[1]})` }} 
        />
        
        {/* Main Icon */}
        <div className="text-9xl relative z-10 drop-shadow-2xl">
          {slide.icon}
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.h2 
        className="text-3xl font-bold text-white mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {slide.title}
      </motion.h2>

      <motion.p 
        className="text-gray-300 leading-relaxed mb-8 max-w-xs mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {slide.description}
      </motion.p>

      {/* Feature List */}
      <div className="grid gap-3 w-full max-w-xs">
        {slide.features.map((feature, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3 text-left"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
          >
            <span className="text-xl">{feature.icon}</span>
            <span className="text-sm text-gray-200 font-medium">
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingSlide;
