import { useEffect } from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import { ThemeName } from '../src/theme/themes';

export const withTheme: DecoratorFn = (Story, context) => {
  const theme = context.globals.theme as ThemeName || 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'brand');
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider defaultTheme={theme}>
      <div className="min-h-screen bg-background text-foreground p-4">
        <Story />
      </div>
    </ThemeProvider>
  );
};
