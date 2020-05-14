import React, { ReactNode, MouseEvent, MouseEventHandler, FC } from 'react';
import styled from 'styled-components';

import { useTheme } from '../styles/use-theme';
import { Theme } from '../styles/theme';

type SizeType = 'sm' | 'md' | 'lg';

type VariantType = 'filled' | 'outlined';

type ColorType = 'primary' | 'secondary' | 'default';

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
  color = 'default',
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
      onClick={handleClick}
    >
      {children}
    </MyButton>
  );
};

export const MyButton = styled.button<{
  theme: Theme;
  size: SizeType;
}>`
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'sm':
        return theme.text.fontSize.xsmall;
      case 'md':
        return theme.text.fontSize.small;
      case 'lg':
        return theme.text.fontSize.medium;
    }
  }}
`;
