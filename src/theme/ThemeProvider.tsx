import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from './themes';
import {
  allThemes,
  DEFAULT_THEME,
  THEME_CYCLE_ORDER,
  type AllThemeName,
} from './config';

interface ThemeContextType {
  theme: Theme;
  themeName: AllThemeName;
  setTheme: (themeName: AllThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: AllThemeName;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = 'candle-ui-theme',
}: ThemeProviderProps): JSX.Element {
  const [themeName, setThemeName] = useState<AllThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as AllThemeName;
      return stored && stored in allThemes ? stored : defaultTheme;
    }
    return defaultTheme;
  });

  const theme = allThemes[themeName];

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      'light',
      'dark',
      'my-brand',
      'my-brand-dark',
      'brand'
    );

    // Add current theme class
    root.classList.add(themeName);

    // Apply theme colors as CSS custom properties
    if (theme) {
      root.style.setProperty('--color-primary-500', theme.colors.primary[500]);
      root.style.setProperty('--color-primary-600', theme.colors.primary[600]);
      root.style.setProperty('--color-primary-700', theme.colors.primary[700]);
      root.style.setProperty('--color-primary-800', theme.colors.primary[800]);

      root.style.setProperty(
        '--color-secondary-500',
        theme.colors.secondary[500]
      );
      root.style.setProperty(
        '--color-secondary-600',
        theme.colors.secondary[600]
      );
      root.style.setProperty(
        '--color-secondary-700',
        theme.colors.secondary[700]
      );
      root.style.setProperty(
        '--color-secondary-800',
        theme.colors.secondary[800]
      );

      root.style.setProperty('--color-success-500', theme.colors.success[500]);
      root.style.setProperty('--color-success-600', theme.colors.success[600]);
      root.style.setProperty('--color-success-700', theme.colors.success[700]);
      root.style.setProperty('--color-success-800', theme.colors.success[800]);

      root.style.setProperty('--color-warning-500', theme.colors.warning[500]);
      root.style.setProperty('--color-warning-600', theme.colors.warning[600]);
      root.style.setProperty('--color-warning-700', theme.colors.warning[700]);
      root.style.setProperty('--color-warning-800', theme.colors.warning[800]);

      root.style.setProperty('--color-error-500', theme.colors.error[500]);
      root.style.setProperty('--color-error-600', theme.colors.error[600]);
      root.style.setProperty('--color-error-700', theme.colors.error[700]);
      root.style.setProperty('--color-error-800', theme.colors.error[800]);
    }

    // Store theme preference
    localStorage.setItem(storageKey, themeName);
  }, [themeName, storageKey, theme]);

  const setTheme = (newThemeName: AllThemeName) => {
    setThemeName(newThemeName);
  };

  const toggleTheme = () => {
    setThemeName((prev) => {
      const currentIndex = THEME_CYCLE_ORDER.indexOf(prev as any);
      const nextIndex = (currentIndex + 1) % THEME_CYCLE_ORDER.length;
      return THEME_CYCLE_ORDER[nextIndex] as AllThemeName;
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
