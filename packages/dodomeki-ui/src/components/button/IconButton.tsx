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
import { FC } from 'react';
import { Theme } from '../../theme';
import { CommonButtonProps, makeCommonButtonStyles } from './common';

export type IconButtonProps = CommonButtonProps & {};

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    children,
    disabled = false,
    size = 'md',
    variant = 'filled',
    color = 'primary',
  } = props;

  const commonStyles = makeCommonButtonStyles({
    disabled,
    size,
    variant,
    color,
  });

  const styles = (theme: Theme) => css`
    ${size === 'sm'
      ? css`
          padding: ${theme.spacing(0.5)};
        `
      : size === 'md'
      ? css`
          padding: ${theme.spacing(0.75)};
        `
      : css`
          padding: ${theme.spacing(1.0)};
        `}
  `;

  if (props.href != null) {
    return (
      <a css={[commonStyles, styles]} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button css={[commonStyles, styles]} {...props}>
      {children}
    </button>
  );
};
