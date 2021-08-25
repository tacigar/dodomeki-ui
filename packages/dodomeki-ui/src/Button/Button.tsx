import React from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '../styles';
import { LoadingSpinner } from '../LoadingSpinner';

export type ButtonSizeType = 'md' | 'lg';

export type ButtonVariantType = 'filled' | 'empty';

interface ButtonCommonProps {
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
  disabled = false,
  href,
  icon,
  isFullWidth = false,
  isLoading = false,
  size = 'md',
  variant = 'filled',
  ...rest
}) => {
  const isDisabled = isLoading ? true : disabled;

  const component = href ? 'a' : 'button';

  return (
    <ButtonRoot
      as={component}
      size={size}
      variant={variant}
      disabled={isDisabled}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      href={href}
      {...rest}
    >
      <ButtonContent>
        {isLoading && <Spinner size={size} />}
        {icon}
        <Text icon={icon}>{children}</Text>
      </ButtonContent>
    </ButtonRoot>
  );
};

const sizeStyles = (props: ButtonCommonProps & { theme: Theme }) => {
  switch (props.size) {
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
  if (props.disabled) {
    switch (props.variant) {
      case 'filled':
        return css`
          color: ${props.theme.palette.grey.light[8]};
          border-color: ${props.theme.palette.grey.light[7]};
          background: ${props.theme.palette.metallicGray.disabled};
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

  switch (props.variant) {
    case 'filled':
      return css`
        border-color: ${props.theme.palette.border};
        background: ${props.theme.palette.metallicGray.main};
        &:hover {
          background: ${props.theme.palette.metallicGray.hover};
        }
        &:active {
          background: ${props.theme.palette.metallicGray.active};
          box-shadow: ${props.theme.shadows.metallicGrayInset};
        }
      `;
    case 'empty':
      return css`
        border-color: transparent;
        background-color: initial;
        &:hover {
          text-decoration: underline;
        }
      `;
    default:
      return '';
  }
};

export const ButtonRoot = styled.div<ButtonCommonProps>`
  display: inline-block;
  width: ${(props) => (props.isFullWidth ? '100%' : '')};
  min-width: 40px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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
