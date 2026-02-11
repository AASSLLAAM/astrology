import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import IconButton from '../common/IconButton';

const ChatInput = ({ onSend, disabled }) => {
  const { t } = useLanguage();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 p-4 bg-[#0f0a1e]/90 backdrop-blur-xl border-t border-white/10 z-50 flex items-center gap-2 safe-bottom-padding"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t('chat.placeholder')}
        disabled={disabled}
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 transition-colors"
      />
      
      <button
        type="submit"
        disabled={!text.trim() || disabled}
        className={`
          w-10 h-10 rounded-full flex items-center justify-center text-white transition-all
          ${!text.trim() || disabled 
            ? 'bg-white/5 text-gray-500' 
            : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
          }
        `}
      >
        ➤
      </button>
    </form>
  );
};

export default ChatInput;
