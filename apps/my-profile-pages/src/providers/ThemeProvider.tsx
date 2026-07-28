import React, { createContext, useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { themes } from '../utils/color-theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeProviderProps {
  children: React.ReactNode;
}

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { setColorScheme } = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load preference on mount
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('@theme_preference');
        if (savedTheme === 'light' || savedTheme === 'dark') {
          setCurrentTheme(savedTheme);
          setColorScheme(savedTheme);
        }
      } catch (error) {
        console.error('Failed to load theme preference', error);
      }
    };
    loadTheme();
  }, []);

  console.log('ThemeProvider - currentTheme:', currentTheme);

  const toggleTheme = async () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    setColorScheme(newTheme);
    try {
      await AsyncStorage.setItem('@theme_preference', newTheme);
    } catch (error) {
      console.error('Failed to save theme preference', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <View
        style={themes[currentTheme]}
        className={`flex-1 ${currentTheme === 'dark' ? 'dark' : ''}`}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
