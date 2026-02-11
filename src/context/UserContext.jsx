import React, { createContext, useContext, useState, useEffect } from 'react';
import { getZodiacSign } from '../utils/zodiacData';

const UserContext = createContext();

const STORAGE_KEY = 'palm_reader_user';

export const UserProvider = ({ children }) => {
  // Initialize user state from local storage
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  const [hasOnboarded, setHasOnboarded] = useState(!!user);

  // Persist user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      setHasOnboarded(true);
    } else {
      // Don't remove if null, just keep state consistent
      // We might want to clear it explicitly via logout
    }
  }, [user]);

  /**
   * saveUserProfile
   * Saves or updates the user profile data.
   * Automatically calculates zodiac sign if DOB is provided.
   */
  const saveUserProfile = (profileData) => {
    const { name, dob, timeOfBirth, gender, handPreference } = profileData;
    
    // Calculate zodiac sign automatically
    let zodiacSign = null;
    if (dob) {
      const dateObj = new Date(dob);
      zodiacSign = getZodiacSign(dateObj.getDate(), dateObj.getMonth() + 1);
    }

    const newUser = {
      ...user, // Keep existing fields if updating partially
      name,
      dob,
      timeOfBirth,
      gender, // 'male', 'female', 'other'
      handPreference, // 'left' or 'right'
      zodiacSign,
      updatedAt: new Date().toISOString()
    };

    setUser(newUser);
    return newUser;
  };

  /**
   * clearUserProfile
   * Resets the user data (Reset App / Logout).
   */
  const clearUserProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setHasOnboarded(false);
  };

  /**
   * updatePreferences
   * Updates specific user preferences without touching core profile.
   */
  const updatePreferences = (prefs) => {
    if (!user) return;
    const updatedUser = { ...user, preferences: { ...user.preferences, ...prefs } };
    setUser(updatedUser);
  };

  const value = {
    user,
    hasOnboarded,
    saveUserProfile,
    clearUserProfile,
    updatePreferences,
    // Helper accessors
    userName: user?.name || '',
    zodiacSign: user?.zodiacSign || null
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * useUser
 * Hook to access user profile and methods.
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
