type ColorsType = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  light: string;
  main: string;
  dark: string;
};

type TypographyType = {
  fontWeight: number | string;
  fontSize: string;
  lineHeight: number;
};

export interface Theme {
  palette: {
    primary: ColorsType;
    secondary: ColorsType;
    success: ColorsType;
    warning: ColorsType;
    danger: ColorsType;
    divider: string;
    background: {
      default: string;
    };
    text: {
      default: string;
      subdued: string;
      primary: string;
      inverseDefault: string;
    };
  };
  zIndex: {
    header: number;
  };
  spacing: (...args: number[]) => string;
  text: {
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
    h1: TypographyType;
    h2: TypographyType;
    h3: TypographyType;
    h4: TypographyType;
    h5: TypographyType;
    h6: TypographyType;
  };
}
