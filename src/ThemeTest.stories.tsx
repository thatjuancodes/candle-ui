import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme, Button, Card } from './index';
import { myLightTheme, myDarkTheme } from './theme/myThemes';

const meta: Meta = {
  title: 'Theme/Theme Preview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Preview your custom theme colors and components. Use the theme switcher in the toolbar to test different themes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

function ThemePreview(): JSX.Element {
  const { theme, themeName } = useTheme();

  return (
    <div className="p-6 space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Theme Preview - {themeName}</h2>

        <div className="space-y-6">
          {/* Button Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="error">Error</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>

          {/* Color Swatches */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: theme.colors.primary[500] }}
                >
                  Primary
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.colors.primary[500]}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: theme.colors.secondary[500] }}
                >
                  Secondary
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.colors.secondary[500]}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: theme.colors.success[500] }}
                >
                  Success
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.colors.success[500]}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: theme.colors.warning[500] }}
                >
                  Warning
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.colors.warning[500]}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: theme.colors.error[500] }}
                >
                  Error
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.colors.error[500]}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: theme.colors.info[500] }}
                >
                  Info
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.colors.info[500]}
                </p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-black font-bold mb-2 border border-gray-300"
                  style={{ backgroundColor: '#F4F4F4' }}
                >
                  Light
                </div>
                <p className="text-sm text-muted-foreground">#F4F4F4</p>
              </div>
              <div className="text-center">
                <div
                  className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: '#2E2E2E' }}
                >
                  Dark
                </div>
                <p className="text-sm text-muted-foreground">#2E2E2E</p>
              </div>
            </div>
          </div>

          {/* Complete Color Shades */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Complete Color Shades (Auto-Generated)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              The UI library automatically generates all shades (50-950) from
              your base colors defined in{' '}
              <code className="bg-muted px-1 rounded">myThemes.ts</code>
            </p>

            {/* Primary Color Shades */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-primary-700">
                Primary Color Shades
              </h4>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center text-xs font-medium mb-1"
                        style={{
                          backgroundColor:
                            theme.colors.primary[
                              shade as keyof typeof theme.colors.primary
                            ],
                          color: shade <= 500 ? '#000' : '#fff',
                        }}
                      >
                        {shade}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {
                          theme.colors.primary[
                            shade as keyof typeof theme.colors.primary
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Secondary Color Shades */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-secondary-700">
                Secondary Color Shades
              </h4>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center text-xs font-medium mb-1"
                        style={{
                          backgroundColor:
                            theme.colors.secondary[
                              shade as keyof typeof theme.colors.secondary
                            ],
                          color: shade <= 500 ? '#000' : '#fff',
                        }}
                      >
                        {shade}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {
                          theme.colors.secondary[
                            shade as keyof typeof theme.colors.secondary
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Success Color Shades */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-success-700">
                Success Color Shades
              </h4>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center text-xs font-medium mb-1"
                        style={{
                          backgroundColor:
                            theme.colors.success[
                              shade as keyof typeof theme.colors.success
                            ],
                          color: shade <= 500 ? '#000' : '#fff',
                        }}
                      >
                        {shade}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {
                          theme.colors.success[
                            shade as keyof typeof theme.colors.success
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Warning Color Shades */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-warning-700">
                Warning Color Shades
              </h4>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center text-xs font-medium mb-1"
                        style={{
                          backgroundColor:
                            theme.colors.warning[
                              shade as keyof typeof theme.colors.warning
                            ],
                          color: shade <= 500 ? '#000' : '#fff',
                        }}
                      >
                        {shade}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {
                          theme.colors.warning[
                            shade as keyof typeof theme.colors.warning
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Error Color Shades */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-error-700">
                Error Color Shades
              </h4>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center text-xs font-medium mb-1"
                        style={{
                          backgroundColor:
                            theme.colors.error[
                              shade as keyof typeof theme.colors.error
                            ],
                          color: shade <= 500 ? '#000' : '#fff',
                        }}
                      >
                        {shade}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {
                          theme.colors.error[
                            shade as keyof typeof theme.colors.error
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Info Color Shades */}
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-info-700">
                Info Color Shades
              </h4>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                  (shade) => (
                    <div key={shade} className="text-center">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center text-xs font-medium mb-1"
                        style={{
                          backgroundColor:
                            theme.colors.info[
                              shade as keyof typeof theme.colors.info
                            ],
                          color: shade <= 500 ? '#000' : '#fff',
                        }}
                      >
                        {shade}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {
                          theme.colors.info[
                            shade as keyof typeof theme.colors.info
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Tailwind Usage Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Using Shades in Tailwind CSS
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              All these shades are available as Tailwind utility classes. Here
              are some examples:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="font-medium mb-3">Background Colors</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-primary-50 text-primary-900 rounded text-sm">
                    bg-primary-50
                  </div>
                  <div className="p-2 bg-primary-100 text-primary-900 rounded text-sm">
                    bg-primary-100
                  </div>
                  <div className="p-2 bg-primary-500 text-white rounded text-sm">
                    bg-primary-500
                  </div>
                  <div className="p-2 bg-primary-700 text-white rounded text-sm">
                    bg-primary-700
                  </div>
                  <div className="p-2 bg-primary-900 text-white rounded text-sm">
                    bg-primary-900
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-medium mb-3">Text Colors</h4>
                <div className="space-y-2">
                  <p className="text-primary-500 text-sm">text-primary-500</p>
                  <p className="text-success-600 text-sm">text-success-600</p>
                  <p className="text-warning-700 text-sm">text-warning-700</p>
                  <p className="text-error-800 text-sm">text-error-800</p>
                  <p className="text-secondary-600 text-sm">
                    text-secondary-600
                  </p>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-medium mb-3">Border Colors</h4>
                <div className="space-y-2">
                  <div className="p-2 border-2 border-primary-200 rounded text-sm">
                    border-primary-200
                  </div>
                  <div className="p-2 border-2 border-success-300 rounded text-sm">
                    border-success-300
                  </div>
                  <div className="p-2 border-2 border-warning-400 rounded text-sm">
                    border-warning-400
                  </div>
                  <div className="p-2 border-2 border-error-500 rounded text-sm">
                    border-error-500
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-medium mb-3">Hover States</h4>
                <div className="space-y-2">
                  <button className="px-3 py-1 bg-primary-500 hover:bg-primary-600 text-white rounded text-sm transition-colors">
                    hover:bg-primary-600
                  </button>
                  <button className="px-3 py-1 bg-success-500 hover:bg-success-600 text-white rounded text-sm transition-colors">
                    hover:bg-success-600
                  </button>
                  <button className="px-3 py-1 bg-warning-500 hover:bg-warning-600 text-white rounded text-sm transition-colors">
                    hover:bg-warning-600
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Component Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Component Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="font-medium mb-2">Card with Primary Button</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  This card uses your theme colors.
                </p>
                <Button variant="primary" size="sm">
                  Action
                </Button>
              </Card>

              <Card className="p-4">
                <h4 className="font-medium mb-2">Status Indicators</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.success[500] }}
                    ></div>
                    <span className="text-sm">Success</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.warning[500] }}
                    ></div>
                    <span className="text-sm">Warning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.error[500] }}
                    ></div>
                    <span className="text-sm">Error</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="my-brand">
      <ThemePreview />
    </ThemeProvider>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="my-brand-dark">
      <ThemePreview />
    </ThemeProvider>
  ),
};

// Direct theme comparison component
function DirectThemeComparison(): JSX.Element {
  const renderThemeColors = (
    theme: typeof myLightTheme,
    themeName: string,
    isDark: boolean = false
  ) => (
    <div
      className={`p-6 rounded-lg border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <h3
        className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        {themeName}
      </h3>

      {/* Color Swatches */}
      <div className="space-y-4">
        <h4
          className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
        >
          Color Palette
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: theme.colors.primary[500] }}
            >
              Primary
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme.colors.primary[500]}
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: theme.colors.secondary[500] }}
            >
              Secondary
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme.colors.secondary[500]}
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: theme.colors.success[500] }}
            >
              Success
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme.colors.success[500]}
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: theme.colors.warning[500] }}
            >
              Warning
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme.colors.warning[500]}
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: theme.colors.error[500] }}
            >
              Error
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme.colors.error[500]}
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: theme.colors.info[500] }}
            >
              Info
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {theme.colors.info[500]}
            </p>
          </div>
          <div className="text-center">
            <div
              className={`h-16 rounded-lg flex items-center justify-center font-bold mb-2 border text-black ${isDark ? 'border-gray-600' : 'border-gray-300'}`}
              style={{ backgroundColor: '#F4F4F4' }}
            >
              Light
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              #F4F4F4
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-16 rounded-lg flex items-center justify-center text-white font-bold mb-2"
              style={{ backgroundColor: '#2E2E2E' }}
            >
              Dark
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              #2E2E2E
            </p>
          </div>
        </div>
      </div>

      {/* Primary Color Shades Sample */}
      <div className="mt-6">
        <h4
          className={`font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
        >
          Primary Color Shades (Sample)
        </h4>
        <div className="flex space-x-1">
          {[100, 300, 500, 700, 900].map((shade) => (
            <div key={shade} className="text-center">
              <div
                className="w-12 h-12 rounded border flex items-center justify-center text-xs font-medium mb-1"
                style={{
                  backgroundColor:
                    theme.colors.primary[
                      shade as keyof typeof theme.colors.primary
                    ],
                  color: shade <= 500 ? '#000' : '#fff',
                  borderColor: isDark ? '#374151' : '#e5e7eb',
                }}
              >
                {shade}
              </div>
              <p
                className={`text-xs font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              >
                {
                  theme.colors.primary[
                    shade as keyof typeof theme.colors.primary
                  ]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Light/Dark Colors */}
      <div className="mt-6">
        <h4
          className={`font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
        >
          Light & Dark Colors
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div
              className="h-12 rounded border flex items-center justify-center font-medium mb-1 text-black"
              style={{
                backgroundColor: '#F4F4F4',
                borderColor: isDark ? '#374151' : '#e5e7eb',
              }}
            >
              Light
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              #F4F4F4
            </p>
          </div>
          <div className="text-center">
            <div
              className="h-12 rounded border flex items-center justify-center font-medium mb-1 text-white"
              style={{
                backgroundColor: '#2E2E2E',
                borderColor: isDark ? '#374151' : '#e5e7eb',
              }}
            >
              Dark
            </div>
            <p
              className={`text-xs font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              #2E2E2E
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Light vs Dark Theme Comparison
        </h2>
        <p className="text-gray-600 mb-6">
          Compare your Obsidian Blue theme colors in both light and dark modes.
          Notice how the dark theme uses different base colors and reversed
          palettes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Theme */}
        {renderThemeColors(myLightTheme, 'Light Theme (my-brand)', false)}

        {/* Dark Theme */}
        {renderThemeColors(myDarkTheme, 'Dark Theme (my-brand-dark)', true)}
      </div>

      {/* Color Comparison Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Color Value Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">
                  Color
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">
                  Light Theme
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">
                  Dark Theme
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  'primary',
                  'secondary',
                  'success',
                  'warning',
                  'error',
                  'info',
                ] as const
              ).map((colorName) => (
                <tr key={colorName} className="border-b border-gray-100">
                  <td className="px-4 py-2 font-medium capitalize">
                    {colorName}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-6 h-6 rounded border border-gray-200"
                        style={{
                          backgroundColor: myLightTheme.colors[colorName][500],
                        }}
                      />
                      <span className="font-mono text-sm">
                        {myLightTheme.colors[colorName][500]}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-6 h-6 rounded border border-gray-200"
                        style={{
                          backgroundColor: myDarkTheme.colors[colorName][500],
                        }}
                      />
                      <span className="font-mono text-sm">
                        {myDarkTheme.colors[colorName][500]}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2 font-medium">Background</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{
                        backgroundColor: myLightTheme.colors.background,
                      }}
                    />
                    <span className="font-mono text-sm">
                      {myLightTheme.colors.background}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: myDarkTheme.colors.background }}
                    />
                    <span className="font-mono text-sm">
                      {myDarkTheme.colors.background}
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2 font-medium">Foreground</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{
                        backgroundColor: myLightTheme.colors.foreground,
                      }}
                    />
                    <span className="font-mono text-sm">
                      {myLightTheme.colors.foreground}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: myDarkTheme.colors.foreground }}
                    />
                    <span className="font-mono text-sm">
                      {myDarkTheme.colors.foreground}
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2 font-medium">Light Neutral</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: '#F4F4F4' }}
                    />
                    <span className="font-mono text-sm">#F4F4F4</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: '#F4F4F4' }}
                    />
                    <span className="font-mono text-sm">#F4F4F4</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Dark Neutral</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: '#2E2E2E' }}
                    />
                    <span className="font-mono text-sm">#2E2E2E</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: '#2E2E2E' }}
                    />
                    <span className="font-mono text-sm">#2E2E2E</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const ThemeComparison: Story = {
  render: () => <DirectThemeComparison />,
};
