import { createCustomTheme, createCustomDarkTheme } from './colorUtils';

// Define your brand colors
export const myBrandColors = {
  primary: '#EF4444', // Vivid Red - main brand color
  secondary: '#64748B', // Slate Gray - balances the intensity of red
  success: '#22C55E', // Green - success states
  warning: '#F59E0B', // Orange - warning states
  error: '#DC2626', // Deep Red - error states
};

const myBrandColorsDark = {
  primary: '#29B6F6', // Light Blue (brighter for contrast)
  secondary: '#B0BEC5', // Light Cool Gray
  success: '#66BB6A', // Medium Green
  warning: '#FFA726', // Bright Amber
  error: '#EF5350', // Bright Red
};

// Create your light theme
export const myLightTheme = createCustomTheme(myBrandColors, 'my-brand');
// Create your dark theme
export const myDarkTheme = createCustomDarkTheme(
  myBrandColorsDark,
  'my-brand-dark'
);
// Create sample theme here
export const mintBrandTheme = createCustomDarkTheme(
  myBrandColors,
  'mint-brand'
);

// You can also create additional theme variants
export const myAccentTheme = createCustomTheme(
  {
    primary: '#ec4899', // Pink
    secondary: '#06b6d4', // Cyan
    success: '#10b981', // Green
    warning: '#f59e0b', // Orange
    error: '#ef4444', // Red
  },
  'my-accent'
);

// Export all your themes
export const myThemes = {
  light: myLightTheme,
  dark: myDarkTheme,
  accent: myAccentTheme,
};
