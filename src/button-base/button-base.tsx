import React from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '../styles/theme';

export type ButtonBaseSizeType = 'sm' | 'md' | 'lg';

export type ButtonBaseVariantType = 'filled' | 'outlined' | 'empty';

export type ButtonBaseColorType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger';

export interface ButtonBaseProps {
  size?: ButtonBaseSizeType;
  variant?: ButtonBaseVariantType;
  color?: ButtonBaseColorType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
}

const sizeStyles = (props: ButtonBaseProps & { theme: Theme }) => {
  switch (props.size) {
    case 'sm':
      return css`
        font-size: ${props.theme.text.fontSize.small};
        padding: 8px 11px;
      `;
    case 'md':
      return css`
        font-size: ${props.theme.text.fontSize.medium};
        padding: 10px 13px;
      `;
    case 'lg':
      return css`
        font-size: ${props.theme.text.fontSize.large};
        padding: 14px 18px;
      `;
    default:
      return '';
  }
};

const colorStyles = (props: ButtonBaseProps & { theme: Theme }) => {
  if (!props.color) return '';

  const mainColor = props.theme.palette[props.color][5];
  const darkColor = props.theme.palette[props.color][7];

  switch (props.variant) {
    case 'filled':
      return css`
        color: ${props.theme.palette.white};
        border-color: ${darkColor};
        background-color: ${mainColor};
        box-shadow: 0 2px 2px -1px rgba(54, 97, 126, 0.3);
        &:hover {
          box-shadow: 0 4px 8px 0 rgba(54, 97, 126, 0.3);
          background-color: ${darkColor};
        }
      `;
    case 'outlined':
      return css`
        color: ${props.theme.palette.black};
        border-color: ${darkColor};
        box-shadow: 0 2px 2px -1px rgba(54, 97, 126, 0.3);
        &:hover {
          box-shadow: 0 4px 8px 0 rgba(54, 97, 126, 0.3);
          background-color: ${props.theme.palette.grey.light[0]};
        }
      `;
    case 'empty':
      return css`
        color: ${mainColor};
        border-color: transparent;
      `;
    default:
      return '';
  }
};

export const ButtonBase = styled.button.attrs<ButtonBaseProps>((props) => ({
  children: props.children,
  size: props.size || 'md',
  variant: props.variant || 'outlined',
  color: props.color || 'primary',
}))<ButtonBaseProps>`
  width: ${(props) => (props.isFullWidth ? '100%' : '')};
  min-width: 40px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.25s ease-out;
  text-decoration: 'none';
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.variant === 'empty'
      ? ''
      : `
        &:hover { transform: translateY(-1px) }
        &:active { transform: translateY(1px) }
      `}

  ${(props) => sizeStyles(props)}
  ${(props) => colorStyles(props)}
`;
