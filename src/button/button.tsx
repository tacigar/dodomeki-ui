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

const getCommonStyles = (props: ButtonProps & { theme: Theme }) => {
  const width = props.fullWidth ? '100%' : '';
  const sizeStyles = getSizeStyles(props);

  return css`
    opacity: 1;
    width: ${width};
    border-radius: 3px;
    cursor: pointer;
    ${sizeStyles};
  `;
};

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
      <AnchorButton
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
      </AnchorButton>
    );
  }

  return (
    <BaseButton
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
    </BaseButton>
  );
};

export const BaseButton = styled.button<ButtonProps & { theme: Theme }>`
  ${(props) => getCommonStyles(props)};
`

export const AnchorButton = styled.a<ButtonProps & { theme: Theme }>`
  ${(props) => getCommonStyles(props)};
`

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
