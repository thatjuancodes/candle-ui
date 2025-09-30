import { useEffect } from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import { AllThemeName } from '../src/theme/config';
import { MY_THEME_NAME } from '../src/theme/myTheme';

export const withTheme: DecoratorFn = (Story, context) => {
  const theme = context.globals.theme as AllThemeName || MY_THEME_NAME;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'brand', MY_THEME_NAME, `${MY_THEME_NAME}-dark`);
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
