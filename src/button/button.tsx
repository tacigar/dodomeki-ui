import React, { ReactNode, MouseEvent, MouseEventHandler, FC } from 'react';
import styled from 'styled-components';

import { useTheme } from '../styles/use-theme';
import { Theme } from '../styles/theme';

export type ButtonSizeType = 'sm' | 'md' | 'lg';

export type ButtonVariantType = 'filled' | 'outlined' | 'empty';

export type ButtonColorType = 'default' | 'primary' | 'secondary' | 'warning' | 'danger' | 'ghost';

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
}>`
  opacity: 1;
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
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'sm':
        return theme.text.fontSize.xsmall;
      case 'md':
        return theme.text.fontSize.base;
      case 'lg':
        return theme.text.fontSize.medium;
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'sm':
        return `4px 7px`;
      case 'md':
        return `6px 9px`;
      case 'lg':
        return `8px 11px`;
    }
  }};
  border-radius: 3px;
  border: ${({ theme, variant, color }) => {
    switch (variant) {
      case 'filled':
        switch (color) {
          case 'primary':
            return `1px solid ${theme.palette.primary[8]}`;
          case 'secondary':
            return `1px solid ${theme.palette.secondary[8]}`;
        }
      case 'outlined':
        return `1px solid ${theme.palette.grey.light[8]}`;
    }
  }};
  cursor: pointer;
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
