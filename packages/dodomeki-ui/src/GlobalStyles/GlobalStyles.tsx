import { Theme } from '@dodomeki-ui/theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body: {
    background-color: ${(props) => props.theme.palette.grey.light[0]};
    font-family: Tahoma, Verdana, Segoe, sans-serif;
  }
`;
