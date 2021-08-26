import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { theme } from '@dodomeki-ui/theme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
);

export { useTheme } from 'styled-components';
