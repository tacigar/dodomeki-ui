/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import { Panel } from './panel';

storiesOf('Panel', module).add('Panel', () => (
  <div css={{ padding: 3 }}>
    <Panel>Hello, World!</Panel>
  </div>
));
