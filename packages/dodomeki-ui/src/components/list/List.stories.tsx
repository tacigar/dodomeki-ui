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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

export default {
  title: 'Display/List',
  component: List,
} as ComponentMeta<typeof List>;

export const SimpleList: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
    <List>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
    <ListItem>Item 6</ListItem>
    <ListItem>Item 7</ListItem>
    <List>
      <ListItem>Item 8</ListItem>
      <ListItem>Item 9</ListItem>
      <List>
        <ListItem>Item 10</ListItem>
        <ListItem>Item 11</ListItem>
        <List>
          <ListItem icon={<FontAwesomeIcon icon={faCoffee} size="sm" />}>
            Item 12
          </ListItem>
          <ListItem icon={<FontAwesomeIcon icon={faCoffee} size="sm" />}>
            Item 13
          </ListItem>
        </List>
      </List>
    </List>
  </List>
);
