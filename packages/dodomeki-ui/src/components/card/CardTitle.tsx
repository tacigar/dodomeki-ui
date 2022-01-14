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
import { HTMLAttributes, ReactNode, VFC } from 'react';

export type CardTitleProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  subtitle?: ReactNode;
};

export const CardTitle: VFC<CardTitleProps> = ({
  title,
  subtitle,
  ...rest
}) => (
  <div
    css={(theme) =>
      css`
        margin-bottom: ${theme.spacing(1)};
      `
    }
    {...rest}
  >
    <div
      css={(theme) => css`
        color: ${theme.palette.text.default};
        font-size: ${theme.text.fontSize.lg};
        font-weight: bold;
      `}
    >
      {title}
    </div>
    {subtitle && (
      <div
        css={(theme) => css`
          color: ${theme.palette.text.subdued};
          font-size: ${theme.text.fontSize.sm};
          margin-top: ${theme.spacing(0.25)};
        `}
      >
        {subtitle}
      </div>
    )}
  </div>
);

CardTitle.displayName = 'CardTitle';
