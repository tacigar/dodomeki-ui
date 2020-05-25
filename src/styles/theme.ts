export interface Theme {
  palette: {
    primary: string[];
    secondary: string[];
    success: string[];
    danger: string[];
    warning: string[];
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
    };
  };
}

export const defaultTheme: Theme = {
  palette: {
    // Indigo
    primary: [
      '#e8eaf6',
      '#c5cae9',
      '#9fa8da',
      '#7986cb',
      '#5c6bc0',
      '#3f51b5',
      '#3949ab',
      '#303f9f',
      '#283593',
      '#1a237e',
    ],
    secondary: [
      '#fafafa',
      '#f5f5f5',
      '#eeeeee',
      '#e0e0e0',
      '#bdbdbd',
      '#9e9e9e',
      '#757575',
      '#616161',
      '#424242',
      '#212121',
    ],
    // Teal
    success: [
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
    // Amber
    warning: [
      '#fff8e1',
      '#ffecb3',
      '#ffe082',
      '#ffd54f',
      '#ffca28',
      '#ffc107',
      '#ffb300',
      '#ffa000',
      '#ff8f00',
      '#ff6f00',
    ],
    // Red
    danger: [
      '#ffebee',
      '#ffcdd2',
      '#ef9a9a',
      '#e57373',
      '#ef5350',
      '#f44336',
      '#e53935',
      '#d32f2f',
      '#c62828',
      '#b71c1c',
    ],
    white: '#fff',
    black: '#000',
    grey: {
      light: [
        '#fafafa',
        '#f5f5f5',
        '#eeeeee',
        '#e5e5e5',
        '#e0e0e0',
        '#d9d9d9',
        '#c5c5c5',
        '#b6b6b6',
        '#b0b0b0',
      ],
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
