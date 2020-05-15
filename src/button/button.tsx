import React, { ReactNode, MouseEvent, MouseEventHandler, FC } from 'react';
import styled from 'styled-components';

import { useTheme } from '../styles/use-theme';
import { Theme } from '../styles/theme';

type SizeType = 'sm' | 'md' | 'lg';

type VariantType = 'filled' | 'outlined';

type ColorType = 'primary' | 'secondary';

interface ButtonProps {
  size?: SizeType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children?: ReactNode;
  variant?: VariantType;
  color?: ColorType;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  size = 'md',
  href,
  onClick,
  children,
  variant = 'outlined',
  color = 'primary',
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
      <a onClick={handleClick}>{children}</a>
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
  size: SizeType;
  variant: VariantType;
  color: ColorType;
}>`
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
        return `1px solid ${theme.palette.grey.light[9]}`;
    }
  }};
  cursor: pointer;
`;
