import { addDecorator } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../packages/dodomeki-ui/src/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));
