import { storiesOf } from '@storybook/react';
import React from 'react';

import { LineChart } from './LineChart';

storiesOf('LineChart', module).add('LineChart', () => (
  <LineChart
    points={[
      { x: 10, y: 32 },
      { x: 20, y: 38 },
      { x: 30, y: 34 },
      { x: 40, y: 40 },
      { x: 50, y: 44 },
      { x: 60, y: 42 },
      { x: 70, y: 50 },
      { x: 80, y: 53 },
      { x: 90, y: 50 },
      { x: 100, y: 60 },
      { x: 110, y: 54 },
      { x: 120, y: 56 },
      { x: 130, y: 50 },
      { x: 140, y: 48 },
      { x: 150, y: 53 },
      { x: 160, y: 62 },
      { x: 170, y: 68 },
      { x: 180, y: 64 },
      { x: 190, y: 70 },
      { x: 200, y: 72 },
      { x: 210, y: 85 },
      { x: 220, y: 82 },
      { x: 230, y: 78 },
    ]}
  />
));
