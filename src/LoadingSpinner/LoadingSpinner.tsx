import styled, { css, keyframes } from 'styled-components';

import { Theme } from '../styles';

export type LoadingSpinnerSizeType =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

export type LoadingSpinnerColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface LoadingSpinnerProps {
  size?: LoadingSpinnerSizeType;
  color?: LoadingSpinnerColorType;
}

const sizeStyles = (props: LoadingSpinnerProps & { theme: Theme }) => {
  const fontSize = props.theme.text.fontSize[props.size || 'md'];

  let borderWidth;
  switch (props.size) {
    case 'xxs':
    case 'xs':
    case 'sm':
      borderWidth = '1px';
      break;
    case 'md':
    case 'lg':
      borderWidth = '2px';
      break;
    default:
      borderWidth = '3px';
      break;
  }

  return css`
    width: ${fontSize};
    height: ${fontSize};
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
    const greyColor = props.theme.palette.grey.light[6];
    const mainColor = props.theme.palette[props.color || 'primary'][7];
    return css`
      border-top: solid ${greyColor};
      border-right: solid ${greyColor};
      border-bottom: solid ${greyColor};
      border-left: solid ${mainColor};
    `;
  }}

  ${(props) => sizeStyles(props)}

  transform: translateZ(0);
  animation: ${anim} 1.1s infinite linear;
`;
