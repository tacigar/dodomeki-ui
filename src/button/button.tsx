import React, { ReactNode, MouseEvent, MouseEventHandler, FC } from 'react';
import styled, { css } from 'styled-components';

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

const getSizeStyles = (props: ButtonProps & { theme: Theme }) => {
  switch (props.size) {
    case 'sm':
      return css`
        font-size: ${props.theme.text.fontSize.xsmall};
        padding: 4px 7px;
      `;
    case 'md':
      return css`
        font-size: ${props.theme.text.fontSize.base};
        padding: 6px 9px;
      `;
    case 'lg':
      return css`
        font-size: ${props.theme.text.fontSize.medium};
        padding: 8px 11px;
      `;
    default:
      return '';
  }
};

const ButtonBase = styled.div<ButtonProps & { theme: Theme }>`
  opacity: 1;
  width: ${(props) => props.fullWidth ? '100%' : ''};
  border-radius: 3px;
  cursor: pointer;
  ${(props) => getSizeStyles(props)};
`;

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

  return (
    <ButtonBase
      as={href ? 'a' : 'button'}
      size={size}
      href={href}
      onClick={handleClick}
      variant={variant}
      color={color}
      isLoading={isLoading}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      className={className}
      theme={theme}
    >
      {children}
    </ButtonBase>
  );
};
