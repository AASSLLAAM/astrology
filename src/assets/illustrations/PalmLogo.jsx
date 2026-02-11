import React from 'react';

const PalmLogo = ({ className, ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.5" />
    <path 
      d="M50 20 C45 20, 40 30, 35 40 C30 50, 25 55, 30 70 C35 85, 45 90, 50 90 C55 90, 65 85, 70 70 C75 55, 70 50, 65 40 C60 30, 55 20, 50 20 Z" 
      fill="url(#logoGradient)" 
      opacity="0.8"
    />
    <path d="M40 50 Q50 60 60 50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M42 65 Q50 70 58 65" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M50 35 L50 45" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export default PalmLogo;
