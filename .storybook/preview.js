import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import { ThemeProvider } from '../src/styles';

addParameters({
  backgrounds: [
    { name: 'default', value: '#fafafa', default: true },
    { name: 'paper', value: '#3b5998' },
  ],
});

addDecorator(Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));
