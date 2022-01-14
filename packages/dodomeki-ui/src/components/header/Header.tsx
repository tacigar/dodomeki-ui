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
import { HeaderContextProvider } from './HeaderContext';

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  position?: 'fixed' | 'static';
  theme?: 'light' | 'dark';
};

export const Header: FC<HeaderProps> = ({
  children,
  position = 'fixed',
  theme: themeProp = 'dark',
  ...rest
}) => {
  const context = { theme: themeProp };

  return (
    <HeaderContextProvider value={context}>
      <div
        css={(theme) => css`
          position: relative;
          display: flex;
          justify-content: space-between;
          height: 48px;
          padding-left: ${theme.spacing(1)};
          padding-right: ${theme.spacing(1)};
          ${position === 'fixed'
            ? css`
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
              `
            : css`
                position: relative;
              `}
          background-color: ${themeProp === 'light'
            ? theme.palette.background.default
            : '#242a2f'};
        `}
        {...rest}
      >
        {children}
      </div>
    </HeaderContextProvider>
  );
};

Header.displayName = 'Header';
