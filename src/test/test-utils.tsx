import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../theme/ThemeProvider';
import { ThemeName } from '../theme/themes';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: ThemeName;
}

const AllTheProviders = ({
  children,
  theme = 'light',
}: {
  children: React.ReactNode;
  theme?: ThemeName;
}) => {
  return <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  { theme = 'light', ...options }: CustomRenderOptions = {}
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders theme={theme}>{children}</AllTheProviders>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
