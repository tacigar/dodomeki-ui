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

import {
  DodomekiUiIcon,
  Header,
  HeaderTitle,
  List,
  ListItem,
  ListSubheader,
  Tag,
} from '@dodomeki-ui/core';
import { css } from '@emotion/react';
import { FC } from 'react';

export const Layout: FC = ({ children }) => (
  <div>
    <Header theme="dark">
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <HeaderTitle icon={<DodomekiUiIcon />} title="Dodomeki UI" />
        <Tag
          color="success"
          css={(theme) => css`
            margin-left: ${theme.spacing(1)};
          `}
        >
          v0.0.18
        </Tag>
      </div>
    </Header>
    <div
      css={css`
        margin-top: 48px;
        display: flex;
      `}
    >
      <nav
        css={(theme) => css`
          width: 240px;
          height: calc(100vh - 48px);
          background-color: #fafafa;
          box-shadow: 0 0 8px gray;
          & > :not(:last-child) {
            margin-bottom: ${theme.spacing(1.5)};
          }
        `}
      >
        <List subheader={<ListSubheader title="Data Display" />}>
          <ListItem>List</ListItem>
          <ListItem>Table</ListItem>
          <ListItem>Tag</ListItem>
          <ListItem>Tooltip</ListItem>
        </List>
        <List subheader={<ListSubheader title="Feedback" />}>
          <ListItem>Alert</ListItem>
          <ListItem>Dialog</ListItem>
          <ListItem>Snackbar</ListItem>
        </List>
      </nav>
      <div
        css={(theme) =>
          css`
            width: calc(100vw - 240px);
            padding: ${theme.spacing(3)};
          `
        }
      >
        {children}
      </div>
    </div>
  </div>
);
