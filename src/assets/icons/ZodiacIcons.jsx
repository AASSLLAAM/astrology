import React from 'react';

const BaseIcon = ({ d, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d={d} />
  </svg>
);

export const AriesIcon = (props) => <BaseIcon d="M12 2a5 5 0 0 1 5 5v3a2 2 0 0 0 2 2h1v2h-1a4 4 0 0 1-4-4V7a3 3 0 0 0-6 0v3a4 4 0 0 1-4 4H4v-2h1a2 2 0 0 0 2-2V7a5 5 0 0 1 5-5z" {...props} />;
export const TaurusIcon = (props) => <BaseIcon d="M12 4a5 5 0 0 0-5 5v2a5 5 0 1 0 10 0V9a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3z" {...props} />;
// ... Additional SVG paths for other signs would go here
// For brevity in this response, utilizing the emoji system defined in utils/zodiacData.js is prioritized
// but these exports allow for specific icon usage if needed.

const ZodiacIcons = {
  Aries: AriesIcon,
  Taurus: TaurusIcon,
  // ...
};

export default ZodiacIcons;
