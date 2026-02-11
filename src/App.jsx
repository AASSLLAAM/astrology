import React from 'react';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

// Common UI Components
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingOverlay from './components/common/LoadingOverlay';
import Toast from './components/common/Toast';
import InstallPrompt from './components/common/InstallPrompt';
import NetworkStatus from './components/common/NetworkStatus';

// Screens
import SplashScreen from './screens/SplashScreen';
import LanguageSelectScreen from './screens/LanguageSelectScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
import HomeScreen from './screens/HomeScreen';
import PalmScanScreen from './screens/PalmScanScreen';
import PalmResultScreen from './screens/PalmResultScreen';
import AIPalmChatScreen from './screens/AIPalmChatScreen';
import TarotCategoryScreen from './screens/TarotCategoryScreen';
import TarotReadingScreen from './screens/TarotReadingScreen';
import DailyGuidanceScreen from './screens/DailyGuidanceScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import HoroscopeResultScreen from './screens/HoroscopeResultScreen';
import LoveReadingScreen from './screens/LoveReadingScreen';
import SettingsScreen from './screens/SettingsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';

/**
 * AppContent
 * Handles the rendering of specific screens based on the current navigation state.
 * Uses the custom History API navigation logic.
 */
const AppContent = () => {
  const { currentScreen } = useNavigation();

  // Screen Router Switch
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'language-select':
        return <LanguageSelectScreen />;
      case 'onboarding':
        return <OnboardingScreen />;
      case 'profile-setup':
        return <ProfileSetupScreen />;
      case 'home':
        return <HomeScreen />;
      case 'palm-scan':
        return <PalmScanScreen />;
      case 'palm-result':
        return <PalmResultScreen />;
      case 'ai-chat':
        return <AIPalmChatScreen />;
      case 'tarot-categories':
        return <TarotCategoryScreen />;
      case 'tarot-reading':
        return <TarotReadingScreen />;
      case 'daily-guidance':
        return <DailyGuidanceScreen />;
      case 'horoscope':
        return <HoroscopeScreen />;
      case 'horoscope-result':
        return <HoroscopeResultScreen />;
      case 'love-reading':
        return <LoveReadingScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'privacy':
        return <PrivacyPolicyScreen />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="app-container min-h-screen bg-cosmic-dark text-white relative overflow-hidden select-none touch-manipulation">
      {/* Main Screen Content */}
      <main className="w-full h-full absolute inset-0">
        {renderScreen()}
      </main>

      {/* Global Overlays */}
      <LoadingOverlay />
      <Toast />
      <InstallPrompt />
      <NetworkStatus />
    </div>
  );
};

/**
 * App
 * Root component that provides all Contexts to the application.
 */
const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <LanguageProvider>
          <UserProvider>
            <NavigationProvider>
              <AppContent />
            </NavigationProvider>
          </UserProvider>
        </LanguageProvider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
