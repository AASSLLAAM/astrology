/**
 * useNavigation Hook
 * Clean wrapper for NavigationContext with additional helpers.
 */

import { useNavigation as useNavigationContext } from '../context/NavigationContext';

export const useNavigation = () => {
  const navigation = useNavigationContext();

  /**
   * navigateToHome
   * Quick helper to go to home screen and reset history.
   */
  const navigateToHome = () => {
    navigation.resetNavigation('home');
  };

  /**
   * navigateWithData
   * Navigate to a screen with associated data.
   */
  const navigateWithData = (screen, data) => {
    navigation.navigate(screen, { data });
  };

  /**
   * canGoBack
   * Check if there's history to go back to.
   */
  const canGoBack = () => {
    return navigation.historyStack.length > 1;
  };

  /**
   * isCurrentScreen
   * Check if we're on a specific screen.
   */
  const isCurrentScreen = (screenName) => {
    return navigation.currentScreen === screenName;
  };

  /**
   * getParam
   * Safely get a parameter from screenParams.
   */
  const getParam = (key, defaultValue = null) => {
    return navigation.screenParams?.[key] ?? defaultValue;
  };

  return {
    ...navigation,
    navigateToHome,
    navigateWithData,
    canGoBack,
    isCurrentScreen,
    getParam
  };
};

export default useNavigation;
