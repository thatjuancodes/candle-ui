/**
 * Candle UI Theme Configuration
 *
 * This file defines the default theme and available themes for your library.
 * Modify these settings to control which theme your library uses primarily.
 */

import { lightTheme, darkTheme, brandTheme } from './themes';
import { myThemes, DEFAULT_THEME } from './myTheme';

// ============================================================================
// PRIMARY THEME CONFIGURATION
// ============================================================================

/**
 * The default theme that your library will use when no theme is specified.
 * This comes from your myTheme.ts file - edit that file to change it!
 */
export { DEFAULT_THEME };

/**
 * The order of themes when cycling through them (e.g., with toggleTheme).
 * The first theme in this array will be the default.
 */
export const THEME_CYCLE_ORDER = [
  DEFAULT_THEME,
  `${DEFAULT_THEME}-dark`,
  'light',
  'dark',
  'brand',
] as const;

// ============================================================================
// AVAILABLE THEMES
// ============================================================================

/**
 * Built-in themes that come with the library
 */
export const builtInThemes = {
  light: lightTheme,
  dark: darkTheme,
  brand: brandTheme,
};

/**
 * Your custom themes (from myTheme.ts)
 */
export const customThemes = myThemes;

/**
 * All available themes combined
 * This is what the ThemeProvider will use
 */
export const allThemes = {
  ...builtInThemes,
  ...customThemes,
};

// ============================================================================
// THEME CONFIGURATION TYPES
// ============================================================================

export type BuiltInThemeName = keyof typeof builtInThemes;
export type CustomThemeName = keyof typeof customThemes;
export type AllThemeName = keyof typeof allThemes;

// ============================================================================
// CONFIGURATION SUMMARY
// ============================================================================

/**
 * Get a summary of your current theme configuration
 */
export function getThemeConfig() {
  return {
    defaultTheme: DEFAULT_THEME,
    themeCycleOrder: THEME_CYCLE_ORDER,
    availableThemes: Object.keys(allThemes),
    builtInThemes: Object.keys(builtInThemes),
    customThemes: Object.keys(customThemes),
  };
}

/**
 * Check if a theme name is valid
 */
export function isValidTheme(themeName: string): themeName is AllThemeName {
  return themeName in allThemes;
}
