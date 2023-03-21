import { addDecorator } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../packages/dodomeki-ui/src/theme/ThemeProvider';
import { defaultTheme } from '../packages/dodomeki-ui-theme/src/defaultTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
));
