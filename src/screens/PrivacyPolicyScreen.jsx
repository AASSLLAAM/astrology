import React from 'react';
import AnimatedTransition from '../components/common/AnimatedTransition';
import CosmicBackground from '../components/common/CosmicBackground';
import Header from '../components/common/Header';
import GlassCard from '../components/common/GlassCard';

const PrivacyPolicyScreen = () => {
  return (
    <AnimatedTransition>
      <div className="relative w-full h-full flex flex-col">
        <CosmicBackground />
        <Header title="Privacy Policy" showBack={true} />

        <div className="p-6 mt-14 flex-1 overflow-y-auto custom-scrollbar">
          <GlassCard>
            <div className="prose prose-invert prose-sm max-w-none">
              <h3>Privacy Policy</h3>
              <p>Last updated: {new Date().getFullYear()}</p>
              
              <h4>1. Introduction</h4>
              <p>
                AI Palm Reader respects your privacy. We do not store your palm images on any external servers permanently. Images are processed purely for the purpose of generating your reading and are discarded immediately after analysis.
              </p>

              <h4>2. Data Collection</h4>
              <p>
                We collect minimal data to improve your experience, such as your chosen language, zodiac sign, and app preferences. This data is stored locally on your device.
              </p>

              <h4>3. AI Services</h4>
              <p>
                We use third-party AI services (OpenRouter) to generate interpretations. Text prompts are sent securely, but no personal identifiable information (PII) is shared beyond what is necessary for the reading (e.g., first name, zodiac).
              </p>

              <h4>4. Contact</h4>
              <p>
                For questions, please contact us at support@aipalmreader.app
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default PrivacyPolicyScreen;
