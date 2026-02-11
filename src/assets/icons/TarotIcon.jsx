import React from 'react';

const TarotIcon = ({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 12v-4" />
    <path d="M12 12v4" />
    <path d="M12 12h-4" />
    <path d="M12 12h4" />
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
);

export default TarotIcon;
