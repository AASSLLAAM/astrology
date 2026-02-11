import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ChatContainer = ({ children }) => {
  const scrollRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4 pb-20 scroll-smooth"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ChatContainer;
