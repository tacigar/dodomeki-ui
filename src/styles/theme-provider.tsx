import React, { FC, ReactNode } from 'react';

import { Theme } from './theme';
import { ThemeContext } from './theme-context';

export interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme
}) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
