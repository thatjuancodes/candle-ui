import type { Meta, StoryObj } from '@storybook/react';
import {
  generateColorPalette,
  createCustomTheme,
  createCustomDarkTheme,
} from './colorUtils';

const meta: Meta = {
  title: 'Theme/Color Palette Generator',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Utility functions for automatically generating color palettes from base colors.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Color palette display component
const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div className="flex items-center space-x-3 p-2">
    <div
      className="w-12 h-12 rounded border border-gray-200"
      style={{ backgroundColor: color }}
    />
    <div>
      <div className="font-mono text-sm font-medium">{name}</div>
      <div className="font-mono text-xs text-gray-500">{color}</div>
    </div>
  </div>
);

export const GeneratePalette: Story = {
  render: () => {
    const baseColor = '#3b82f6'; // Blue
    const palette = generateColorPalette(baseColor);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Generated Color Palette
          </h3>
          <p className="text-gray-600 mb-4">
            Base color: <span className="font-mono">{baseColor}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.entries(palette).map(([shade, color]) => (
            <ColorSwatch key={shade} color={color} name={`${shade}`} />
          ))}
        </div>
      </div>
    );
  },
};

export const MultipleColors: Story = {
  render: () => {
    const colors = [
      { name: 'Blue', color: '#3b82f6' },
      { name: 'Purple', color: '#8b5cf6' },
      { name: 'Pink', color: '#ec4899' },
      { name: 'Green', color: '#10b981' },
      { name: 'Orange', color: '#f59e0b' },
    ];

    return (
      <div className="space-y-8">
        <h3 className="text-lg font-semibold">Multiple Color Palettes</h3>

        {colors.map(({ name, color }) => {
          const palette = generateColorPalette(color);
          return (
            <div key={name} className="space-y-4">
              <h4 className="text-md font-medium text-gray-800">{name}</h4>
              <div className="flex space-x-1">
                {Object.entries(palette).map(([shade, colorValue]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-16 h-16 rounded border border-gray-200"
                      style={{ backgroundColor: colorValue }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

export const CustomTheme: Story = {
  render: () => {
    const customTheme = createCustomTheme(
      {
        primary: '#8b5cf6',
        secondary: '#10b981',
      },
      'purple-green'
    );

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Custom Theme Generated</h3>
          <p className="text-gray-600 mb-4">
            Primary: <span className="font-mono">#8b5cf6</span> | Secondary:{' '}
            <span className="font-mono">#10b981</span>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Primary Colors</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.primary).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-12 h-12 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Secondary Colors</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.secondary).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-12 h-12 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const FullColorControl: Story = {
  render: () => {
    const customTheme = createCustomTheme(
      {
        primary: '#8b5cf6', // Purple
        secondary: '#10b981', // Green
        success: '#22c55e', // Green
        warning: '#f59e0b', // Orange
        error: '#ef4444', // Red
      },
      'full-control'
    );

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Full Color Control</h3>
          <p className="text-gray-600 mb-4">
            Define all your brand colors and get complete palettes for each!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium">Primary (Purple)</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.primary).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-10 h-10 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Secondary (Green)</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.secondary).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-10 h-10 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Success (Green)</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.success).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-10 h-10 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Warning (Orange)</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.warning).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-10 h-10 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Error (Red)</h4>
            <div className="flex space-x-1">
              {Object.entries(customTheme.colors.error).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-10 h-10 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1">{shade}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const DarkTheme: Story = {
  render: () => {
    const darkTheme = createCustomDarkTheme(
      {
        primary: '#8b5cf6', // Purple
        secondary: '#10b981', // Green
        success: '#22c55e', // Green
        warning: '#f59e0b', // Orange
        error: '#ef4444', // Red
      },
      'dark-theme'
    );

    return (
      <div className="space-y-6 bg-gray-900 p-6 rounded-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">
            Dark Theme Generated
          </h3>
          <p className="text-gray-400 mb-4">
            Same colors, automatically optimized for dark mode!
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-white">
              Primary Colors (Dark Mode)
            </h4>
            <div className="flex space-x-1">
              {Object.entries(darkTheme.colors.primary).map(
                ([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-12 h-12 rounded border border-gray-600"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-xs font-mono mt-1 text-gray-300">
                      {shade}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const UsageExample: Story = {
  render: () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">1. Generate a color palette</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`import { generateColorPalette } from 'candle-ui';

const palette = generateColorPalette('#3b82f6');
// Returns: { 50: '#eff6ff', 100: '#dbeafe', ..., 950: '#172554' }`}
            </pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">2. Create a custom theme</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`import { createCustomTheme } from 'candle-ui';

// Define your brand colors
const myTheme = createCustomTheme({
  primary: '#8b5cf6',    // Your main brand color
  secondary: '#10b981',  // Your secondary brand color
  success: '#22c55e',    // Success state color (optional)
  warning: '#f59e0b',    // Warning state color (optional)
  error: '#ef4444',      // Error state color (optional)
}, 'my-brand');
// All colors get auto-generated palettes!`}
            </pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">3. Use with ThemeProvider</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`import { ThemeProvider, createCustomTheme } from 'candle-ui';

const customTheme = createCustomTheme({
  primary: '#your-primary',
  secondary: '#your-secondary',
  success: '#your-success',
  warning: '#your-warning',
  error: '#your-error',
});

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* Your app */}
    </ThemeProvider>
  );
}`}
            </pre>
          </div>

          <div>
            <h4 className="font-medium mb-2">4. Create dark theme variant</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`import { createCustomDarkTheme } from 'candle-ui';

const darkTheme = createCustomDarkTheme({
  primary: '#8b5cf6',
  secondary: '#10b981',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
}, 'my-dark-brand');
// Automatically reverses palettes for dark mode!`}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};
