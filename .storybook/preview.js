import { addDecorator } from '@storybook/react';
import React from 'react';

import { ThemeProvider as OldThemeProvider } from '../packages/dodomeki-ui/src/ThemeProvider';
import { ThemeProvider } from '../packages/dodomeki-ui/src/theme/ThemeProvider';
import { defaultTheme } from '../packages/dodomeki-ui/src/theme/defaultTheme';

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
