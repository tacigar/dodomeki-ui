const primaryColorPalette = {
  '50': '#e9f3fc',
  '100': '#d2e7fa',
  '200': '#a5cff5',
  '300': '#78b8ef',
  '400': '#4ba0ea',
  '500': '#1e88e5',
  '600': '#1b7ace',
  '700': '#186db7',
  '800': '#155fa0',
  '900': '#125289',
} as const;

const secondaryColorPalette = {
  '50': '#fce9e8',
  '100': '#fad2d1',
  '200': '#f4a5a3',
  '300': '#ef7876',
  '400': '#e94b48',
  '500': '#e41e1a',
  '600': '#cd1b17',
  '700': '#b61815',
  '800': '#a01512',
  '900': '#891210',
};

const lightModePrimaryColors = {
  light: primaryColorPalette[300],
  main: primaryColorPalette[500],
  dark: primaryColorPalette[700],
} as const;

const lightModeSecondaryColors = {
  light: secondaryColorPalette[300],
  main: secondaryColorPalette[500],
  dark: secondaryColorPalette[700],
} as const;

const lightModeBackgroundColors = {
  primary: '#ffffff',
  secondary: '#f5f5f5',
  tertiary: '#ffffff',
} as const;

const darkModePrimaryColors = {
  light: primaryColorPalette[100],
  main: primaryColorPalette[300],
  dark: primaryColorPalette[500],
} as const;

const darkModeSecondaryColors = {
  light: secondaryColorPalette[100],
  main: secondaryColorPalette[300],
  dark: secondaryColorPalette[500],
} as const;

const darkModeBackgroundColors = {
  primary: '#121212',
  secondary: '#1E1E1E',
  tertiary: '#2A2A2A',
} as const;

const typography = {
  fontSize: '14px',
  h1: {
    fontSize: '2.462rem', // 32px
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '1.846rem', // 24px
    lineHeight: 1.33,
    fontWeight: 600,
    letterSpacing: '-0.015em',
  },
  h3: {
    fontSize: '1.538rem', // 20px
    lineHeight: 1.4,
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: '1.385rem', // 18px
    lineHeight: 1.44,
    fontWeight: 600,
    letterSpacing: '-0.008em',
  },
  h5: {
    fontSize: '1.231rem', // 16px
    lineHeight: 1.5,
    fontWeight: 600,
    letterSpacing: '-0.006em',
  },
  h6: {
    fontSize: '1rem', // 13px
    lineHeight: 1.43,
    fontWeight: 600,
    letterSpacing: '-0.003em',
  },
  body: {
    fontSize: '1rem', // 13px
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: 'normal',
  },
  small: {
    fontSize: '0.846rem', // 11px
    lineHeight: 1.33,
    fontWeight: 400,
    letterSpacing: 'normal',
  },
} as const;
