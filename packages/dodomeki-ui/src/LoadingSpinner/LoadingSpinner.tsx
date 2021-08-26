import { Theme } from '@dodomeki-ui/theme';
import styled, { css, keyframes } from 'styled-components';

export type LoadingSpinnerSizeType = 'sm' | 'md' | 'lg';

export interface LoadingSpinnerProps {
  size?: LoadingSpinnerSizeType;
}

const sizeStyles = (props: LoadingSpinnerProps & { theme: Theme }) => {
  let size = '';
  let borderWidth = '';
  switch (props.size) {
    case 'sm':
      size = '9px';
      borderWidth = '1px';
      break;
    case 'md':
      size = '10px';
      borderWidth = '2px';
      break;
    default:
      size = '11px';
      borderWidth = '2px';
      break;
  }

  return css`
    width: ${size};
    height: ${size};
    border-width: ${borderWidth};
  `;
};

const anim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.span<LoadingSpinnerProps>`
  border-radius: 50%;
  position: relative;
  position: relative;
  display: inline-block;

  ${(props) => {
    const backColor = props.theme.palette.grey.light[5];
    const frontColor = props.theme.palette.grey.light[9];
    return css`
      border-top: solid ${backColor};
      border-right: solid ${backColor};
      border-bottom: solid ${backColor};
      border-left: solid ${frontColor};
    `;
  }}

  ${(props) => sizeStyles(props)}

  transform: translateZ(0);
  animation: ${anim} 1.1s infinite linear;
`;
