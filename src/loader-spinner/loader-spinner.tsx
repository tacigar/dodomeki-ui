import styled, { css, keyframes } from 'styled-components';

export type LoaderSpinnerSizeType = 'sm' | 'md' | 'lg';

export type LoaderSpinnerColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface LoaderSpinnerProps {
  size?: LoaderSpinnerSizeType;
  color?: LoaderSpinnerColorType;
}

const sizeStyles = (props: LoaderSpinnerProps) => {
  switch (props.size || 'md') {
    case 'sm':
      return css`
        font-size: 2px;
        width: 12px;
        height: 12px;
      `;
    case 'md':
      return css`
        font-size: 4px;
        width: 16px;
        height: 16px;
      `;
    case 'lg':
      return css`
        font-size: 6px;
        width: 20px;
        height: 20px;
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

export const LoaderSpinner = styled.div<LoaderSpinnerProps>`
  border-radius: 50%;
  ${(props) => sizeStyles(props)}
  position: relative;
  position: relative;
  text-indent: -9999em;

  ${(props) => {
    const greyColor = props.theme.palette.grey.light[5];
    const mainColor = props.theme.palette[props.color || 'primary'][7];
    return css`
      border-top: 1.1em solid ${greyColor};
      border-right: 1.1em solid ${greyColor};
      border-bottom: 1.1em solid ${greyColor};
      border-left: 1.1em solid ${mainColor};
    `;
  }}

  transform: translateZ(0);
  animation: ${anim} 1.1s infinite linear;
`;
