import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { defaultTheme } from './theme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <SCThemeProvider theme={defaultTheme}>{children}</SCThemeProvider>
);
