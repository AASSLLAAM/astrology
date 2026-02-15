import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import TarotDeck from '../components/tarot/TarotDeck';
import TarotReveal from '../components/tarot/TarotReveal';
import TarotExplanation from '../components/tarot/TarotExplanation';
import GradientButton from '../components/common/GradientButton';
import LoadingOverlay from '../components/common/LoadingOverlay';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigation } from '../hooks/useNavigation';
import { useAppContext } from '../context/AppContext';
import { getRandomCards } from '../utils/tarotData'; // Fixed path
import { generateTarotReading } from '../services/aiService';
import { RateService } from '../services/rateService';

const TarotReadingScreen = () => {
  const { t, language } = useLanguage();
  const { getParam } = useNavigation();
  const { showLoading, hideLoading } = useAppContext();
  const category = getParam('category', 'general');
  const [step, setStep] = useState('draw');
  const [drawnCards, setDrawnCards] = useState([]);
  const [revealedIndices, setRevealedIndices] = useState([]);
  const [aiInterpretation, setAiInterpretation] = useState('');

  const handleDraw = () => {
    const cards = getRandomCards(3).map(card => ({ ...card, isReversed: Math.random() > 0.8 }));
    setDrawnCards(cards);
    setStep('reveal');
  };

  const handleRevealCard = async (index) => {
    if (revealedIndices.includes(index)) return;
    const newRevealed = [...revealedIndices, index];
    setRevealedIndices(newRevealed);
    if (newRevealed.length === drawnCards.length) {
      await fetchInterpretation(drawnCards);
    }
  };

  const fetchInterpretation = async (cards) => {
    showLoading(t('chat.thinking'));
    try {
      const reading = await generateTarotReading(cards, category, language);
      setAiInterpretation(reading);
      hideLoading();
      setStep('reading');
      RateService.logEvent();
    } catch (error) {
      hideLoading();
      setStep('reading');
    }
  };

  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        <Header title={t(`tarot.categories.${category}`) || t('tarot.title')} showBack={true} />
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 mt-14 pb-safe-bottom">
          <AnimatePresence mode="wait">
            {step === 'draw' && (
              <motion.div key="draw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full">
                <h2 className="text-white text-lg font-bold mb-4">{t('tarot.shuffling')}</h2>
                <TarotDeck onDraw={handleDraw} />
              </motion.div>
            )}
            {step === 'reveal' && (
              <motion.div key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-white text-center mb-4">{t('tarot.yourCards')}</h3>
                <TarotReveal cards={drawnCards} revealedIndices={revealedIndices} onRevealCard={handleRevealCard} />
                <p className="text-center text-sm text-gray-400 mt-4 animate-pulse">{revealedIndices.length < 3 ? t('tarot.tapToReveal') : t('chat.thinking')}</p>
              </motion.div>
            )}
            {step === 'reading' && (
              <motion.div key="reading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <TarotReveal cards={drawnCards} revealedIndices={[0, 1, 2]} onRevealCard={() => {}} />
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">{t('tarot.reading')}</h3>
                  {drawnCards.map((card, i) => (<TarotExplanation key={i} card={card} category={category} />))}
                  {aiInterpretation && (<div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-6"><h4 className="font-bold text-indigo-300 mb-3">✨ Cosmic Synthesis</h4><p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{aiInterpretation}</p></div>)}
                  <div className="pt-6"><GradientButton fullWidth onClick={() => setStep('draw')}>{t('tarot.drawAgain')}</GradientButton></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default TarotReadingScreen;
