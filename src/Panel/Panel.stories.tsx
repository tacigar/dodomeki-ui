import { storiesOf } from '@storybook/react';
import React from 'react';

import { Panel } from './Panel';

storiesOf('Panel', module).add('Panel', () => (
  <Panel>Hello, World!</Panel>
));
