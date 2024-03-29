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

import { css, Theme } from '@emotion/react';
import { FC, ReactNode } from 'react';
import { CommonButtonProps, makeCommonButtonStyles } from './common';

export type ButtonProps = CommonButtonProps & {
  icon?: ReactNode;
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

  const commonStyles = makeCommonButtonStyles({
    disabled,
    size,
    variant,
    color,
  });

  const styles = (theme: Theme) => css`
    ${variant !== 'filled'
      ? css`
          &:hover {
            text-decoration: underline;
          }
        `
      : null}
    ${size === 'sm'
      ? css`
          padding: ${theme.spacing(0.5, 1.0)};
        `
      : size === 'md'
      ? css`
          padding: ${theme.spacing(0.75, 1.5)};
        `
      : css`
          padding: ${theme.spacing(1.0, 1.75)};
        `}
  `;

  if (props.href != null) {
    return (
      <a css={[commonStyles, styles]} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button css={[commonStyles, styles]} {...props}>
      {content}
    </button>
  );
};
