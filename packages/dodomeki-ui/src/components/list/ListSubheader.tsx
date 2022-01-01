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
import { VFC } from 'react';

export type ListSubheaderProps = {
  title: string;
};

export const ListSubheader: VFC<ListSubheaderProps> = ({ title }) => {
  return (
    <div
      css={(theme) =>
        css`
          padding: ${theme.spacing(0.5, 2)};
          font-weight: bold;
          font-size: ${theme.text.fontSize.sm};
          color: ${theme.palette.text.subdued};
        `
      }
    >
      {title}
    </div>
  );
};
