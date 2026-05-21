import type { Preview } from '@storybook/react';
import { defaultTheme } from '../packages/dodomeki-ui-theme/src/defaultTheme';
import { ThemeProvider } from '../packages/dodomeki-ui/src/theme/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
