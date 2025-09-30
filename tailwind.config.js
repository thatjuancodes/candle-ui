/** @type {import('tailwindcss').Config} */
import { myBrandColors } from './src/theme/colors.js';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Your custom colors - automatically applied from myTheme.ts
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: 'var(--color-primary-500, #0B13DA)', // Your primary color
          600: 'var(--color-primary-600, #ca8a04)',
          700: 'var(--color-primary-700, #a16207)',
          800: 'var(--color-primary-800, #854d0e)',
          900: '#713f12',
          950: '#422006',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: 'var(--color-secondary-500, #90A4AE)', // Your secondary color
          600: 'var(--color-secondary-600, #3c4043)',
          700: 'var(--color-secondary-700, #2d2e30)',
          800: 'var(--color-secondary-800, #1f1f1f)',
          900: '#171717',
          950: '#0f0f0f',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: 'var(--color-success-500, #4CAF50)', // Your success color
          600: 'var(--color-success-600, #16a34a)',
          700: 'var(--color-success-700, #15803d)',
          800: 'var(--color-success-800, #166534)',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: 'var(--color-warning-500, #FB8C00)', // Your warning color
          600: 'var(--color-warning-600, #d97706)',
          700: 'var(--color-warning-700, #b45309)',
          800: 'var(--color-warning-800, #92400e)',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: 'var(--color-error-500, #E53935)', // Your error color
          600: 'var(--color-error-600, #dc2626)',
          700: 'var(--color-error-700, #b91c1c)',
          800: 'var(--color-error-800, #991b1b)',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Semantic colors for component library
        background: '#ffffff',
        foreground: '#0f172a',
        muted: '#f1f5f9',
        mutedForeground: '#64748b',
        border: '#e2e8f0',
        input: '#ffffff',
        ring: 'var(--color-primary-500, #0B13DA)', // Uses your primary color
      },
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
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};