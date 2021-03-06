import { storiesOf } from '@storybook/react';
import React from 'react';

import { BarChart } from '../../packages/dodomeki-ui-charts/src/BarChart';

storiesOf('BarChart', module).add('BarChart', () => (
  <BarChart
    data={[
      { category: 'Apple', value: 450 },
      { category: 'Banana', value: 320 },
      { category: 'Grape', value: 180 },
      { category: 'Orange', value: 370 },
    ]}
  />
));
