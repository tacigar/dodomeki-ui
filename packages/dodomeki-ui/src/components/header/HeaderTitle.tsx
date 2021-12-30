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
import { FC, AnchorHTMLAttributes, ReactNode } from 'react';
import { useHeaderContext } from './HeaderContext';

export type HeaderTitleProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode;
  title?: string;
};

export const HeaderTitle: FC<HeaderTitleProps> = ({ icon, title, ...rest }) => {
  const { theme: themeValue } = useHeaderContext();
  return (
    <a
      css={css`
        display: flex;
        align-items: center;
      `}
      {...rest}
    >
      {icon}
      <span
        css={(theme) => css`
          color: ${themeValue === 'light'
            ? theme.palette.text.default
            : theme.palette.text.inverseDefault};
          margin-left: ${icon ? theme.spacing(1) : 0};
        `}
      >
        {title}
      </span>
    </a>
  );
};
