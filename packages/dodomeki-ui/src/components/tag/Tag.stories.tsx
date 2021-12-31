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

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Display/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Success = Template.bind({});
Success.args = {
  children: 'success',
  color: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'warning',
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'danger',
  color: 'danger',
};
