import React from 'react';
import { addDecorator } from '@storybook/react';

import { ThemeProvider } from '../src/styles/theme-provider';
import { defaultTheme } from '../src/styles/theme';

addDecorator(Story => <ThemeProvider theme={defaultTheme}><Story /></ThemeProvider>)
