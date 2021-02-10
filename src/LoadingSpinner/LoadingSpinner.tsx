import styled, { css, keyframes } from 'styled-components';

export type LoadingSpinnerSizeType = 'sm' | 'md' | 'lg';

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

const sizeStyles = (props: LoadingSpinnerProps) => {
  switch (props.size || 'md') {
    case 'sm':
      return css`
        width: 8px;
        height: 8px;
        border-width: 1px;
      `;
    case 'md':
      return css`
        width: 12px;
        height: 12px;
        border-width: 1px;
      `;
    case 'lg':
      return css`
        width: 14px;
        height: 14px;
        border-width: 2px;
      `;
    default:
      return '';
  }
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
