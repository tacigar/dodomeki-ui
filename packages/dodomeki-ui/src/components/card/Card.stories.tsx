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
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardText } from './CardText';
import { CardTitle } from './CardTitle';

export default {
  title: 'Display/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const SimpleCard: ComponentStory<typeof Card> = (args) => (
  <Card
    css={css`
      max-width: 300px;
    `}
  >
    <CardBody>
      <CardTitle title="Card Title" subtitle="Card Subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CardText>
    </CardBody>
  </Card>
);
