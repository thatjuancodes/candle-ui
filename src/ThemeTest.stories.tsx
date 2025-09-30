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
