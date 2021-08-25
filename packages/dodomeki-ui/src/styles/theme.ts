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
    metallicGray: {
      main: string;
      active: string;
      hover: string;
      selected: string;
      disabled: string;
    };
    border: string;
    text: {
      primary: string;
      link: string;
    };
  };
  text: {
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  };
  shadows: {
    metallicGrayInset: string;
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
        '#aeaeae',
      ],
      dark: [],
    },
    metallicGray: {
      main: 'linear-gradient(#fafafa, #e3e5e5)',
      active: '#e2e2e2',
      hover: 'linear-gradient(#f3f5f5, #d4d6d6)',
      selected: '#e8e9e9',
      disabled: '#e8e9e9',
    },
    border: '#d4d6d6',
    text: {
      primary: '#333333',
      link: '#0366d6',
    },
  },
  text: {
    fontSize: {
      xxs: '6px',
      xs: '8px',
      sm: '11px',
      md: '13px',
      lg: '15px',
      xl: '22px',
      xxl: '28px',
    },
  },
  shadows: {
    metallicGrayInset: '0px 0px 6px 4px #dbdbdb inset',
  },
};
