// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { StatWidget } from './components/StatWidget';
export type { StatWidgetProps } from './components/StatWidget';

// Theme
export { ThemeProvider, useTheme } from './theme/ThemeProvider';
export { themes, lightTheme, darkTheme, brandTheme } from './theme/themes';
export {
  generateColorPalette,
  createCustomTheme,
  createCustomDarkTheme,
  type CustomThemeColors,
} from './theme/themes';
export type {
  Theme,
  ThemeName,
  ThemeColors,
  ThemeTypography,
  ThemeSpacing,
  ThemeRadius,
  ThemeShadows,
} from './theme/themes';

// Your Custom Theme (single source of truth)
export {
  myTheme,
  myDarkTheme,
  myThemes,
  MY_BRAND_COLORS,
  MY_THEME_NAME,
} from './theme/myTheme';

// Theme Configuration
export {
  getThemeConfig,
  isValidTheme,
  DEFAULT_THEME,
  THEME_CYCLE_ORDER,
  allThemes,
  builtInThemes,
  customThemes,
  type AllThemeName,
  type BuiltInThemeName,
  type CustomThemeName,
} from './theme/config';

// Theme Utilities
export { ThemeInfo, logThemeConfig } from './theme/ThemeInfo';

// Styles
import './index.css';
