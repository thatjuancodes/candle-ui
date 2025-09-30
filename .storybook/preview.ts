import type { Preview } from '@storybook/react';
import '../src/index.css';
import { withTheme } from './decorators';
import { MY_THEME_NAME } from '../src/theme/myTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: MY_THEME_NAME,
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: MY_THEME_NAME, title: 'My Brand', icon: 'paintbrush' },
          { value: `${MY_THEME_NAME}-dark`, title: 'My Brand Dark', icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'brand', title: 'Brand', icon: 'star' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
