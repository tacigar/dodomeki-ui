import React, { ReactNode, MouseEvent, MouseEventHandler, FC } from 'react';
import styled, { css } from 'styled-components';

import { useTheme } from '../styles/use-theme';
import { Theme } from '../styles/theme';

export type ButtonSizeType = 'sm' | 'md' | 'lg';

export type ButtonVariantType = 'filled' | 'outlined' | 'empty';

export type ButtonColorType = 'default' | 'primary' | 'secondary' | 'warning' | 'danger' | 'ghost';

const getSizeStyles = (size: ButtonSizeType, theme: Theme) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${theme.text.fontSize.xsmall};
        padding: 4px 7px;
      `;
    case 'md':
      return css`
        font-size: ${theme.text.fontSize.base};
        padding: 6px 9px;
      `;
    case 'lg':
      return css`
        font-size: ${theme.text.fontSize.medium};
        padding: 8px 11px;
      `;
  }
};

interface ButtonProps {
  size?: ButtonSizeType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children?: ReactNode;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  size = 'md',
  href,
  onClick,
  children,
  variant = 'outlined',
  color = 'default',
  isLoading,
  disabled,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const theme = useTheme();

  if (href) {
    return (
      <a href={href} onClick={handleClick}>{children}</a>
    );
  }

  return (
    <MyButton
      theme={theme}
      size={size}
      variant={variant}
      color={color}
      onClick={handleClick}
      fullWidth={fullWidth}
    >
      {children}
    </MyButton>
  );
};

export const MyButton = styled.button<{
  theme: Theme;
  size: ButtonSizeType;
  variant: ButtonVariantType;
  color: ButtonColorType;
  fullWidth: boolean;
}>`
  opacity: 1;
  width: ${(props) => props.fullWidth ? '100%' : ''};
  border-radius: 3px;
  cursor: pointer;
  ${(props) => getSizeStyles(props.size, props.theme)};

  color: ${({ theme, variant }) => variant === 'filled' ? theme.palette.white : undefined};
  background-color: ${({ theme, variant, color }) => {
    switch (variant) {
      case 'filled':
        switch (color) {
          case 'primary':
            return theme.palette.primary[5];
          case 'secondary':
            return theme.palette.secondary[5];
        }
      case 'outlined':
        return 'transparent';
    }
  }};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: ${({ theme, variant, color }) => {
      switch (variant) {
        case 'filled':
          switch (color) {
            case 'primary':
              return theme.palette.primary[7];
            case 'secondary':
              return theme.palette.secondary[7];
          }
        case 'outlined':
          return undefined;
      }
    }};
  }
  &:focus {
    outline: none;
  }
`;
