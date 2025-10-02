import { createCustomTheme, createCustomDarkTheme } from './colorUtils';

// Define your brand colors - Obsidian Blue Theme
export const myBrandColors = {
  primary: '#3366CC', // Obsidian Blue (lighter) - represents prestige, clarity, and trust
  secondary: '#4A5568', // Graphite Blue - used for structure, text emphasis, subdued elements
  success: '#399B4A', // Success green
  warning: '#F4C542', // Warning yellow
  error: '#E84D3D', // Error red
  info: '#3A8DFF', // Info blue
  // Neutral colors
  light: '#F4F4F4', // Light neutral color
  dark: '#2E2E2E', // Dark neutral color
};

export const myBrandColorsDark = {
  primary: '#5588DD', // Lighter Obsidian Blue for dark theme contrast
  secondary: '#6B7280', // Lighter Graphite Blue for dark theme
  success: '#4CAF50', // Brighter success green for dark theme
  warning: '#FFD54F', // Brighter warning yellow for dark theme
  error: '#FF6B6B', // Brighter error red for dark theme
  info: '#64B5F6', // Brighter info blue for dark theme
  // Neutral colors (same values, but used differently in dark theme)
  light: '#F4F4F4', // Light neutral color
  dark: '#2E2E2E', // Dark neutral color
};

// Create your light theme
export const myLightTheme = createCustomTheme(myBrandColors, 'my-brand');
// Create your dark themeI
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
