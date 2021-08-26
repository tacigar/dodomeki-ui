import 'styled-components';
import { Theme } from '@dodomeki-ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
