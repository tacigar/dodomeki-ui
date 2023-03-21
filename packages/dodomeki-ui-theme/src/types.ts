type Typography = {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
  letterSpacing: string;
};

export type Theme = {
  palette: {
    mode: 'light' | 'dark';
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
  typography: {
    h1: Typography;
    h2: Typography;
    h3: Typography;
    h4: Typography;
    h5: Typography;
    h6: Typography;
    body: Typography;
    small: Typography;
  };
};
