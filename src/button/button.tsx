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
        padding: 6px 9px;
      `;
    case 'md':
      return css`
        font-size: ${props.theme.text.fontSize.base};
        padding: 8px 11px;
      `;
    case 'lg':
      return css`
        font-size: ${props.theme.text.fontSize.medium};
        padding: 11px 15px;
      `;
    default:
      return '';
  }
};

const getBorderStyles = (props: ButtonProps & { theme: Theme }) => {
  if (props.variant === 'empty') {
    return '';
  }
  let borderColor;
  let hoverBorderColor;
  switch (props.color) {
    case 'primary':
      borderColor = props.theme.palette.primary[5];
      hoverBorderColor = props.theme.palette.primary[7];
  }
  return css`
    border: 1px solid ${borderColor};
    &:hover {
      border: 1px solid ${hoverBorderColor};
    }
  `;
}

const getColorStyles = (props: ButtonProps & { theme: Theme }) => {
  if (props.variant === 'empty') {
    return css`
      border: none;
      color: ${props.theme.palette.black};
      &:hover {
        background-color: ${props.theme.palette.grey.light[2]};
      }
    `;
  }

  const borderStyles = getBorderStyles(props);
  return css`
    ${borderStyles}
  `;
};

const ButtonBase = styled.div<ButtonProps & { theme: Theme }>`
  opacity: 1;
  width: ${(props) => props.fullWidth ? '100%' : ''};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  text-decoration: none;
  ${(props) => getSizeStyles(props)};
  ${(props) => getColorStyles(props)};
  &:focus {
    outline: none;
  }
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
