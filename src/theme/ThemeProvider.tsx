import { createContext, useContext, useEffect, useState } from 'react';
import { Theme, ThemeName, themes } from './themes';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'candle-ui-theme',
}: ThemeProviderProps): JSX.Element {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeName;
      return stored && stored in themes ? stored : defaultTheme;
    }
    return defaultTheme;
  });

  const theme = themes[themeName];

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove('light', 'dark');

    // Add current theme class
    root.classList.add(themeName);

    // Store theme preference
    localStorage.setItem(storageKey, themeName);
  }, [themeName, storageKey]);

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName);
  };

  const toggleTheme = () => {
    setThemeName((prev) => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'brand';
        case 'brand':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  const value: ThemeContextType = {
    theme,
    themeName,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
