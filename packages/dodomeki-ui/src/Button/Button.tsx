import React from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '../styles';
import { LoadingSpinner } from '../LoadingSpinner';

export type ButtonSizeType = 'sm' | 'md' | 'lg';

export type ButtonVariantType = 'filled' | 'outlined' | 'empty';

export type ButtonColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

interface ButtonCommonProps {
  color?: ButtonColorType;
  disabled?: boolean;
  href?: string | never;
  icon?: React.ReactNode;
  isFullWidth?: boolean;
  isLoading?: boolean;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
}

export type ButtonProps = ButtonCommonProps &
  (
    | React.HTMLAttributes<HTMLButtonElement>
    | React.HTMLAttributes<HTMLAnchorElement>
  );

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  disabled = false,
  href,
  icon,
  isFullWidth = false,
  isLoading = false,
  size = 'md',
  variant = 'outlined',
  ...rest
}) => {
  const isDisabled = isLoading ? true : disabled;

  const component = href ? 'a' : 'button';

  return (
    <ButtonBox
      as={component}
      size={size}
      variant={variant}
      color={color}
      disabled={isDisabled}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      href={href}
      {...rest}
    >
      <ButtonContent>
        {isLoading && <Spinner size={size} color={color} />}
        {icon}
        <Text icon={icon}>{children}</Text>
      </ButtonContent>
    </ButtonBox>
  );
};

const sizeStyles = (props: ButtonCommonProps & { theme: Theme }) => {
  switch (props.size) {
    case 'sm':
      return css`
        font-size: ${props.theme.text.fontSize.sm};
        padding: 5px 10px;
      `;
    case 'md':
      return css`
        font-size: ${props.theme.text.fontSize.md};
        padding: 7px 12px;
      `;
    case 'lg':
      return css`
        font-size: ${props.theme.text.fontSize.lg};
        padding: 9px 14px;
      `;
    default:
      return '';
  }
};

const colorStyles = (props: ButtonCommonProps & { theme: Theme }) => {
  if (!props.color) {
    return '';
  }

  if (props.disabled) {
    switch (props.variant) {
      case 'filled':
        return css`
          color: ${props.theme.palette.grey.light[8]};
          border-color: ${props.theme.palette.grey.light[7]};
          background-color: ${props.theme.palette.grey.light[5]};
        `;
      case 'outlined':
        return css`
          color: ${props.theme.palette.grey.light[6]};
          border-color: ${props.theme.palette.grey.light[7]};
          background-color: initial;
        `;
      case 'empty':
        return css`
          color: ${props.theme.palette.grey.light[6]};
          border-color: transparent;
          background-color: initial;
        `;
      default:
        return '';
    }
  }

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
        background-color: initial;
        box-shadow: 0 2px 2px -1px rgba(54, 97, 126, 0.3);
        &:hover {
          box-shadow: 0 4px 8px 0 rgba(54, 97, 126, 0.3);
          background-color: ${props.theme.palette.grey.light[1]};
        }
        &:active {
          background-color: ${props.theme.palette.grey.light[2]};
        }
      `;
    case 'empty':
      return css`
        color: ${mainColor};
        border-color: transparent;
        background-color: initial;
        &:hover {
          color: ${darkColor};
          text-decoration: underline;
        }
      `;
    default:
      return '';
  }
};

export const ButtonBox = styled.div<ButtonCommonProps>`
  display: inline-block;
  width: ${(props) => (props.isFullWidth ? '100%' : '')};
  min-width: 40px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.15s ease-out;
  text-decoration: 'none';
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: middle;
  font: 400 13.3333px Arial;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.variant === 'empty' || props.disabled
      ? ''
      : `
        &:hover { transform: translateY(-1px) }
        &:active { transform: translateY(1px) }
      `}

  ${(props) => sizeStyles(props)}
  ${(props) => colorStyles(props)}
  ${(props) => (props.href && props.disabled ? 'pointer-events: none' : '')};
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
`;

const Spinner = styled(LoadingSpinner)`
  margin-right: ${(props) => {
    switch (props.size || 'md') {
      case 'sm':
        return '6px';
      case 'md':
        return '8px';
      case 'lg':
        return '10px';
      default:
        return '';
    }
  }};
`;

const Text = styled.span<{ icon?: React.ReactNode }>`
  margin-left: ${({ icon }) => (icon ? '7px' : '0px')};
`;
