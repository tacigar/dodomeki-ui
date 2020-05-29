import { createGlobalStyle } from 'styled-components';

import { Theme } from '../styles';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body: {
    background-color: ${(props) => props.theme.palette.grey.light[0]};
    font-family: Tahoma, Verdana, Segoe, sans-serif;
  }
`;
