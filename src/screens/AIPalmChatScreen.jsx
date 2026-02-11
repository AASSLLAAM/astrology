import React, { useState, useEffect, useRef } from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import ChatContainer from '../components/chat/ChatContainer';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import TypingIndicator from '../components/chat/TypingIndicator';
import WelcomeMessage from '../components/chat/WelcomeMessage';
import { useLanguage } from '../hooks/useLanguage';
import { useUser } from '../context/UserContext';
import { generateAIResponse } from '../services/aiService';
import { getAIChatPrompt } from '../utils/systemPrompts';

const AIPalmChatScreen = () => {
  const { t, language } = useLanguage();
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  // Initialize with system prompt (hidden from UI)
  const systemPromptRef = useRef(getAIChatPrompt(language, user));

  const handleSend = async (text) => {
    // Add user message immediately
    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Prepare history for API (include system prompt + recent messages)
      const apiHistory = [
        { role: 'system', content: systemPromptRef.current },
        ...messages.slice(-10), // Keep context manageable
        userMessage
      ];

      // Call AI Service (using generic generator but passing history manually to support chat flow)
      // Note: aiService's generateAIResponse usually handles system prompt internally, 
      // but for chat we override/augment it via history.
      const aiResponseText = await generateAIResponse(text, language, apiHistory);

      if (aiResponseText) {
        setMessages(prev => [...prev, { role: 'assistant', content: aiResponseText }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: t('chat.error') }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: t('chat.error') }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        
        <Header title={t('chat.title')} showBack={true} />

        <ChatContainer>
          {messages.length === 0 && (
            <WelcomeMessage onSuggestionClick={handleSend} />
          )}
          
          {messages.map((msg, index) => (
            <ChatBubble 
              key={index} 
              message={msg.content} 
              isUser={msg.role === 'user'} 
            />
          ))}
          
          {isTyping && (
            <div className="w-fit">
              <TypingIndicator />
            </div>
          )}
        </ChatContainer>

        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </AnimatedTransition>
  );
};

export default AIPalmChatScreen;
