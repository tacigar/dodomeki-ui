import { addDecorator } from '@storybook/react';
import React from 'react';

import { ThemeProvider as OldThemeProvider } from '../packages/dodomeki-ui/src/ThemeProvider';
import { defaultTheme, ThemeProvider } from '../packages/dodomeki-ui/src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((Story) => (
  <ThemeProvider theme={defaultTheme}>
    <OldThemeProvider>
      <Story />
    </OldThemeProvider>
  </ThemeProvider>
));
