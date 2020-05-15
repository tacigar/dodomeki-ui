export interface Theme {
  palette: {
    primary: string[];
    secondary: string[];
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
    primary: [ // Teal color
      '#e0f2f1',
      '#b2dfdb',
      '#80cbc4',
      '#4db6ac',
      '#26a69a',
      '#009688',
      '#00897b',
      '#00796b',
      '#00695c',
      '#004d40',
    ],
    secondary: [ // Deep Orange
      '#fbe9e7',
      '#ffccbc',
      '#ffab91',
      '#ff8a65',
      '#ff7043',
      '#ff5722',
      '#f4511e',
      '#e64a19',
      '#d84315',
      '#bf360c',
    ],
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
