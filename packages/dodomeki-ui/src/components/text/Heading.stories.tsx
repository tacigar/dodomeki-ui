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

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Display/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Headings: ComponentStory<typeof Heading> = (args) => (
  <div>
    <Heading variant="h1">H1. Dodomeki UI</Heading>
    <Heading variant="h2">H2. Dodomeki UI</Heading>
    <Heading variant="h3">H3. Dodomeki UI</Heading>
    <Heading variant="h4">H4. Dodomeki UI</Heading>
    <Heading variant="h5">H5. Dodomeki UI</Heading>
    <Heading variant="h6">H6. Dodomeki UI</Heading>
  </div>
);
