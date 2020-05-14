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
  text: {
    fontSize: {
      tiny: string;
      xsmall: string;
      small: string;
      base: string;
      medium: string;
      large: string;
      xlarge: string;
      x2large: string;
      x3large: string;
      x4large: string;
    }
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
  text: {
    fontSize: {
      tiny: '0.45rem',
      xsmall: '0.525rem',
      small: '0.625rem',
      base: '0.75rem',
      medium: '0.825rem',
      large: '1rem',
      xlarge: '1.15rem',
      x2large: '1.275rem',
      x3large: '1.425rem',
      x4large: '1.6rem',
    },
  },
};
