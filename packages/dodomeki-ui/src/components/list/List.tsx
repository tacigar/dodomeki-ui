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
import React, { FC, HTMLAttributes, ReactNode } from 'react';

type ListPropsInternal = HTMLAttributes<HTMLDivElement> & {
  subheader?: ReactNode;
  _depth?: number;
};

export type ListProps = Omit<ListPropsInternal, '_depth'>;

export const List: FC<ListPropsInternal> = ({
  children: childrenProp,
  subheader,
  _depth = 0,
  ...rest
}) => {
  const children = React.Children.map(childrenProp, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        _depth: _depth + 1,
      });
    }
    return null;
  });

  if (_depth === 0) {
    return (
      <div
        css={(theme) => css`
          color: ${theme.palette.text.default};
          padding-left: ${theme.spacing(1)};
          padding-right: ${theme.spacing(1)};
        `}
        {...rest}
      >
        {subheader}
        {children}
      </div>
    );
  }

  if (subheader && process.env.NODE_ENV !== 'production') {
    console.warn('The subheader prop can only be used in the root List.');
  }

  return (
    <div
      css={(theme) => css`
        margin-left: ${theme.spacing(2)};
        padding-left: ${theme.spacing(1)};
        border-left: 1px solid #dadada;
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

List.displayName = 'List';
