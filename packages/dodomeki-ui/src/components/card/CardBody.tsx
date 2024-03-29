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
import { FC, HTMLAttributes } from 'react';

export type CardBodyProps = HTMLAttributes<HTMLDivElement> & {};

export const CardBody: FC<CardBodyProps> = ({ children, ...rest }) => (
  <div
    css={(theme) => css`
      flex: 1 1;
      padding: ${theme.spacing(2)};
    `}
  >
    {children}
  </div>
);

CardBody.displayName = 'CardBody';
