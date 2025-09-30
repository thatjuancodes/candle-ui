import { ThemeProvider, useTheme, Button, Card } from './index';

function ThemeTestComponent(): JSX.Element {
  const { theme, themeName } = useTheme();

  return (
    <div className="p-6 space-y-4">
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Theme Test - {themeName}</h2>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>

          <div className="grid grid-cols-5 gap-2">
            <div
              className="h-16 rounded flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.primary[500] }}
            >
              Primary
            </div>
            <div
              className="h-16 rounded flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.secondary[500] }}
            >
              Secondary
            </div>
            <div
              className="h-16 rounded flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.success[500] }}
            >
              Success
            </div>
            <div
              className="h-16 rounded flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.warning[500] }}
            >
              Warning
            </div>
            <div
              className="h-16 rounded flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.error[500] }}
            >
              Error
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Primary Color: {theme.colors.primary[500]}</p>
            <p>Secondary Color: {theme.colors.secondary[500]}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function ThemeTest(): JSX.Element {
  return (
    <ThemeProvider>
      <ThemeTestComponent />
    </ThemeProvider>
  );
}
