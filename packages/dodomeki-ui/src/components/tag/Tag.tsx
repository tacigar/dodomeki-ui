/*
 * Copyright 2021 Tacigar
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
import { FC, HTMLAttributes } from 'react';

export type TagColorType = 'success' | 'warning' | 'danger';

export type TagProps = HTMLAttributes<HTMLDivElement> & {
  color?: TagColorType;
};

export const Tag: FC<TagProps> = ({ children, color = 'success' }) => {
  return (
    <span
      css={(theme) => css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: 4px 10px;
        color: ${theme.palette.text.inverseDefault};
        background-color: ${theme.palette[color].main};
        font-size: ${theme.text.fontSize.sm};
      `}
    >
      {children}
    </span>
  );
};
