import React from 'react';

const TarotBack = ({ className, ...props }) => (
  <svg viewBox="0 0 100 150" fill="none" className={className} {...props}>
    <defs>
      <pattern id="starPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100" height="150" fill="transparent" />
    <rect x="5" y="5" width="90" height="140" stroke="currentColor" strokeWidth="1" rx="5" />
    <rect x="10" y="10" width="80" height="130" fill="url(#starPattern)" opacity="0.3" />
    <circle cx="50" cy="75" r="20" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="75" r="5" fill="currentColor" />
    <path d="M50 55 L50 95" stroke="currentColor" strokeWidth="1" />
    <path d="M30 75 L70 75" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default TarotBack;
