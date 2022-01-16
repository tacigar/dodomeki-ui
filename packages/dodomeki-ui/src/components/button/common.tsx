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
  MouseEventHandler,
} from 'react';
import { Theme } from '../../theme';

type _CommonButtonProps = {
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

export type CommonButtonProps = (
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: never;
      onClick: MouseEventHandler;
    })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      onClick?: never;
    })
) &
  _CommonButtonProps;

export const makeCommonButtonStyles = (props: Required<_CommonButtonProps>) => (
  theme: Theme,
) => {
  const { disabled, size, variant, color } = props;

  return css`
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
        `
      : size === 'md'
      ? css`
          font-size: ${theme.text.fontSize.md};
        `
      : css`
          font-size: ${theme.text.fontSize.lg};
        `}
  `;
};
