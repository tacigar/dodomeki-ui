/*
 * Copyright 2022 Tacigar
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import { css } from '@emotion/react';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { Theme } from '../../theme';

export type ButtonProps = (
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: never;
      onClick: MouseEventHandler;
    })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      onClick?: never;
    })
) & {
  icon?: ReactNode;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'empty';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'default';
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    icon,
    disabled = false,
    size = 'md',
    variant = 'filled',
    color = 'primary',
  } = props;

  const content = (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      {icon}
      <span
        css={(theme) =>
          css`
            margin-left: ${icon ? theme.spacing(0.5) : 0};
          `
        }
      >
        {children}
      </span>
    </div>
  );

  const rootStyles = (theme: Theme) => css`
    display: inline-block;
    border: none;
    border-radius: 3px;
    transition: all 0.5s ease;
    text-decoration: none;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:hover,
    &:active,
    &:focus {
      color: inherit;
    }

    ${variant === 'filled'
      ? css`
          color: ${theme.palette.text.inverseDefault};
          background-color: ${theme.palette[color].main};
          &:active {
            background-color: ${theme.palette[color].dark};
          }
          &:hover,
          &:focus {
            background-color: ${theme.palette[color].light};
          }
          &:hover,
          &:active,
          &:focus {
            color: ${theme.palette.text.inverseDefault};
          }
        `
      : css`
          color: ${theme.palette[color].main};
          background-color: inherit;
          &:hover {
            text-decoration: underline;
          }
          &:active,
          &:focus {
            background-color: ${theme.palette[color][0]};
          }
          &:hover,
          &:active,
          &:focus {
            color: ${theme.palette[color].main};
          }
        `}

    ${size === 'sm'
      ? css`
          font-size: ${theme.text.fontSize.sm};
          padding: ${theme.spacing(0.35, 1.0)};
        `
      : size === 'md'
      ? css`
          font-size: ${theme.text.fontSize.md};
          padding: ${theme.spacing(0.5, 1.5)};
        `
      : css`
          font-size: ${theme.text.fontSize.lg};
          padding: ${theme.spacing(0.75, 1.75)};
        `}
  `;

  if (props.href != null) {
    return (
      <a css={rootStyles} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button css={rootStyles} {...props}>
      {content}
    </button>
  );
};
