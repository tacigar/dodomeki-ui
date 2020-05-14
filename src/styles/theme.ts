export interface Theme {
  palette: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
    white: string;
    black: string;
    grey: {
      light: string[];
      dark: string[];
    };
  };
}

export const defaultTheme: Theme = {
  palette: {
    primary: [],
    secondary: [],
    tertiary: [],
    white: '#fff',
    black: '#000',
    grey: {
      light: [],
      dark: [],
    },
  },
};
