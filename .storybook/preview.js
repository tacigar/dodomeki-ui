import { addDecorator } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../packages/dodomeki-ui/src/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));
