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
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { Theme } from '../../theme';

export type ListItemProps = (
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: never;
      onClick: MouseEventHandler;
    })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      onClick?: never;
    })
  | (HTMLAttributes<HTMLDivElement> & {
      href?: never;
      onClick?: never;
    })
) & {
  icon?: ReactNode;
  selected?: boolean;
};

export const ListItem: FC<ListItemProps> = (props) => {
  const rootStyles = (theme: Theme) => css`
    padding: ${theme.spacing(0.75, 2)};
    display: block;
    cursor: pointer;
    color: ${props.selected ? theme.palette.text.primary : 'inherit'};
    text-decoration: ${props.selected ? 'underline' : 'none'};
    font-size: ${theme.text.fontSize.sm};
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      text-decoration: underline;
    }
    &:hover,
    &:active,
    &:focus {
      color: inherit;
    }
  `;

  const children = [
    props.icon,
    <span
      css={(theme) => css`
        margin-left: ${props.icon ? theme.spacing(1) : 0};
      `}
    >
      {props.children}
    </span>,
  ];

  if (props.href != null) {
    return (
      <a css={rootStyles} {...props}>
        {children}
      </a>
    );
  }
  if (props.onClick != null) {
    return (
      <button css={rootStyles} {...props}>
        {children}
      </button>
    );
  }
  return (
    <div css={rootStyles} {...props}>
      {children}
    </div>
  );
};

ListItem.displayName = 'ListItem';
