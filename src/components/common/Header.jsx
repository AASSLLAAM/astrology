import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import IconButton from './IconButton';

const Header = ({ 
  title, 
  subtitle, 
  showBack = true, 
  rightAction, 
  transparent = false 
}) => {
  const { goBack } = useNavigation();

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-40 
      px-4 pt-safe-top pb-3
      flex items-center justify-between
      transition-all duration-300
      ${transparent ? 'bg-transparent' : 'bg-[#0f0a1e]/80 backdrop-blur-md border-b border-white/5'}
    `}>
      {/* Left: Back Button */}
      <div className="w-10">
        {showBack && (
          <IconButton 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            }
            onClick={goBack}
            variant="ghost"
          />
        )}
      </div>

      {/* Center: Title */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-bold text-white tracking-wide truncate">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-white/60 truncate">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right: Action or Spacer */}
      <div className="w-10 flex justify-end">
        {rightAction || <div />}
      </div>
    </header>
  );
};

export default Header;
