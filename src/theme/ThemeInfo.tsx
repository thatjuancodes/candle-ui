import { useTheme } from './ThemeProvider';
import { getThemeConfig } from './config';

/**
 * A component that displays your current theme configuration
 * Useful for debugging and understanding which theme is active
 */
export function ThemeInfo(): JSX.Element {
  const { theme, themeName } = useTheme();
  const config = getThemeConfig();

  return (
    <div className="p-4 bg-muted rounded-lg border">
      <h3 className="text-lg font-semibold mb-3">
        Current Theme Configuration
      </h3>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium">Active Theme:</span>{' '}
          <span className="font-mono bg-background px-2 py-1 rounded">
            {themeName}
          </span>
        </div>

        <div>
          <span className="font-medium">Theme Name:</span>{' '}
          <span className="font-mono bg-background px-2 py-1 rounded">
            {theme.name}
          </span>
        </div>

        <div>
          <span className="font-medium">Default Theme:</span>{' '}
          <span className="font-mono bg-background px-2 py-1 rounded">
            {config.defaultTheme}
          </span>
        </div>

        <div>
          <span className="font-medium">Available Themes:</span>{' '}
          <span className="font-mono bg-background px-2 py-1 rounded">
            {config.availableThemes.join(', ')}
          </span>
        </div>

        <div>
          <span className="font-medium">Theme Cycle:</span>{' '}
          <span className="font-mono bg-background px-2 py-1 rounded">
            {config.themeCycleOrder.join(' → ')}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * A simple function to log your theme configuration to console
 */
export function logThemeConfig(): void {
  const config = getThemeConfig();
  console.group('🎨 Candle UI Theme Configuration');
  console.log('Default Theme:', config.defaultTheme);
  console.log('Available Themes:', config.availableThemes);
  console.log('Theme Cycle Order:', config.themeCycleOrder);
  console.log('Built-in Themes:', config.builtInThemes);
  console.log('Custom Themes:', config.customThemes);
  console.groupEnd();
}
