import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown'; // Assuming markdown support for AI responses

const ChatBubble = ({ message, isUser = false }) => {
  const styles = {
    user: 'bg-indigo-600 text-white rounded-br-none ml-auto',
    ai: 'bg-white/10 text-gray-200 rounded-bl-none backdrop-blur-sm border border-white/5 mr-auto'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={clsx(
        'max-w-[85%] px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed',
        isUser ? styles.user : styles.ai
      )}
    >
      {isUser ? (
        <p>{message}</p>
      ) : (
        <div className="prose prose-invert prose-sm max-w-none">
          {/* Simple Markdown rendering for structured AI responses */}
          <p className="whitespace-pre-wrap">{message}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ChatBubble;
