/**
 * 🎨 YOUR THEME CONFIGURATION
 *
 * This automatically uses your themes from myThemes.ts!
 *
 * To change your theme colors:
 * 1. Edit the colors in myThemes.ts
 * 2. That's it! Your theme will be used everywhere.
 */

// ============================================================================
// 🎨 IMPORT YOUR THEMES FROM myThemes.ts
// ============================================================================

import {
  myLightTheme,
  myDarkTheme as importedDarkTheme,
  myBrandColors,
} from './myThemes';

// ============================================================================
// 🎨 SET YOUR THEME NAME HERE
// ============================================================================

export const MY_THEME_NAME = 'my-brand';

// ============================================================================
// 🎨 USE YOUR THEMES DIRECTLY
// ============================================================================

// Use the themes from myThemes.ts directly
export const myTheme = myLightTheme;
export const myDarkTheme = importedDarkTheme;

// Export for external use - uses actual colors from myThemes.ts
export const MY_BRAND_COLORS = myBrandColors;

// ============================================================================
// 🎨 EXPORT EVERYTHING FOR THE LIBRARY
// ============================================================================

export const myThemes = {
  [MY_THEME_NAME]: myTheme,
  [`${MY_THEME_NAME}-dark`]: myDarkTheme,
};

// This is what gets used as the default theme
export const DEFAULT_THEME = MY_THEME_NAME;
