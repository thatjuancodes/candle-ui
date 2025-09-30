import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme, Button, Card } from './index';

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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
