/**
 * Converts a hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    : null;
}

/**
 * Converts RGB values to hex color
 */
function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Converts RGB to HSL
 */
function rgbToHsl(
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

/**
 * Converts HSL to RGB
 */
function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Generates a color shade by adjusting lightness
 */
function generateShade(hex: string, lightness: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const newRgb = hslToRgb(hsl.h, hsl.s, lightness);
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

/**
 * Generates a complete color palette from a base color
 */
export function generateColorPalette(baseColor: string): {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
} {
  return {
    50: generateShade(baseColor, 95),
    100: generateShade(baseColor, 90),
    200: generateShade(baseColor, 80),
    300: generateShade(baseColor, 70),
    400: generateShade(baseColor, 60),
    500: baseColor, // Base color
    600: generateShade(baseColor, 40),
    700: generateShade(baseColor, 30),
    800: generateShade(baseColor, 20),
    900: generateShade(baseColor, 10),
    950: generateShade(baseColor, 5),
  };
}

/**
 * Color configuration for custom themes
 */
export interface CustomThemeColors {
  primary: string;
  secondary: string;
  success?: string;
  warning?: string;
  error?: string;
  info?: string;
  light?: string;
  dark?: string;
}

/**
 * Creates a custom theme with auto-generated color palettes
 */
export function createCustomTheme(
  colors: CustomThemeColors,
  themeName: string = 'custom'
): Theme {
  const colorConfig: CustomThemeColors = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success || '#22c55e',
    warning: colors.warning || '#f59e0b',
    error: colors.error || '#ef4444',
    info: colors.info || '#3b82f6',
    light: colors.light || '#F4F4F4',
    dark: colors.dark || '#2E2E2E',
  };

  const primaryPalette = generateColorPalette(colorConfig.primary);
  const secondaryPalette = generateColorPalette(colorConfig.secondary);
  const successPalette = generateColorPalette(colorConfig.success!);
  const warningPalette = generateColorPalette(colorConfig.warning!);
  const errorPalette = generateColorPalette(colorConfig.error!);
  const infoPalette = generateColorPalette(colorConfig.info!);

  return {
    name: themeName,
    colors: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      success: successPalette,
      warning: warningPalette,
      error: errorPalette,
      info: infoPalette,
      background: colorConfig.light!, // Use light color for light theme background
      foreground: colorConfig.dark!, // Use dark color for light theme foreground
      muted: '#f1f5f9',
      mutedForeground: '#64748b',
      border: '#e2e8f0',
      input: '#ffffff',
      ring: colorConfig.primary,
    },
    typography: {
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
    },
    radius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      full: '9999px',
    },
    shadows: {
      soft: `0 2px 15px -3px ${colorConfig.primary}20, 0 10px 20px -2px ${colorConfig.primary}10`,
      medium: `0 4px 25px -5px ${colorConfig.primary}30, 0 10px 10px -5px ${colorConfig.primary}15`,
      hard: `0 10px 40px -10px ${colorConfig.primary}40, 0 2px 8px -2px ${colorConfig.primary}20`,
    },
  };
}

/**
 * Creates a dark theme variant with auto-generated color palettes
 */
export function createCustomDarkTheme(
  colors: CustomThemeColors,
  themeName: string = 'custom-dark'
): Theme {
  const colorConfig: CustomThemeColors = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success || '#22c55e',
    warning: colors.warning || '#f59e0b',
    error: colors.error || '#ef4444',
    info: colors.info || '#3b82f6',
    light: colors.light || '#F4F4F4',
    dark: colors.dark || '#2E2E2E',
  };

  const primaryPalette = generateColorPalette(colorConfig.primary);
  const secondaryPalette = generateColorPalette(colorConfig.secondary);
  const successPalette = generateColorPalette(colorConfig.success!);
  const warningPalette = generateColorPalette(colorConfig.warning!);
  const errorPalette = generateColorPalette(colorConfig.error!);
  const infoPalette = generateColorPalette(colorConfig.info!);

  // For dark themes, we reverse the palette (darker shades become lighter)
  const reversedPrimary = {
    50: primaryPalette[950],
    100: primaryPalette[900],
    200: primaryPalette[800],
    300: primaryPalette[700],
    400: primaryPalette[600],
    500: primaryPalette[500],
    600: primaryPalette[400],
    700: primaryPalette[300],
    800: primaryPalette[200],
    900: primaryPalette[100],
    950: primaryPalette[50],
  };

  const reversedSecondary = {
    50: secondaryPalette[950],
    100: secondaryPalette[900],
    200: secondaryPalette[800],
    300: secondaryPalette[700],
    400: secondaryPalette[600],
    500: secondaryPalette[500],
    600: secondaryPalette[400],
    700: secondaryPalette[300],
    800: secondaryPalette[200],
    900: secondaryPalette[100],
    950: secondaryPalette[50],
  };

  const reversedSuccess = {
    50: successPalette[950],
    100: successPalette[900],
    200: successPalette[800],
    300: successPalette[700],
    400: successPalette[600],
    500: successPalette[500],
    600: successPalette[400],
    700: successPalette[300],
    800: successPalette[200],
    900: successPalette[100],
    950: successPalette[50],
  };

  const reversedWarning = {
    50: warningPalette[950],
    100: warningPalette[900],
    200: warningPalette[800],
    300: warningPalette[700],
    400: warningPalette[600],
    500: warningPalette[500],
    600: warningPalette[400],
    700: warningPalette[300],
    800: warningPalette[200],
    900: warningPalette[100],
    950: warningPalette[50],
  };

  const reversedError = {
    50: errorPalette[950],
    100: errorPalette[900],
    200: errorPalette[800],
    300: errorPalette[700],
    400: errorPalette[600],
    500: errorPalette[500],
    600: errorPalette[400],
    700: errorPalette[300],
    800: errorPalette[200],
    900: errorPalette[100],
    950: errorPalette[50],
  };

  const reversedInfo = {
    50: infoPalette[950],
    100: infoPalette[900],
    200: infoPalette[800],
    300: infoPalette[700],
    400: infoPalette[600],
    500: infoPalette[500],
    600: infoPalette[400],
    700: infoPalette[300],
    800: infoPalette[200],
    900: infoPalette[100],
    950: infoPalette[50],
  };

  return {
    name: themeName,
    colors: {
      primary: reversedPrimary,
      secondary: reversedSecondary,
      success: reversedSuccess,
      warning: reversedWarning,
      error: reversedError,
      info: reversedInfo,
      background: colorConfig.dark!, // Use dark color for dark theme background
      foreground: colorConfig.light!, // Use light color for dark theme foreground
      muted: '#1e293b',
      mutedForeground: '#94a3b8',
      border: '#334155',
      input: '#1e293b',
      ring: colorConfig.primary,
    },
    typography: {
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
    },
    radius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      full: '9999px',
    },
    shadows: {
      soft: `0 2px 15px -3px ${colorConfig.primary}30, 0 10px 20px -2px ${colorConfig.primary}20`,
      medium: `0 4px 25px -5px ${colorConfig.primary}40, 0 10px 10px -5px ${colorConfig.primary}30`,
      hard: `0 10px 40px -10px ${colorConfig.primary}50, 0 2px 8px -2px ${colorConfig.primary}40`,
    },
  };
}

// Import the Theme type
import type { Theme } from './themes';
