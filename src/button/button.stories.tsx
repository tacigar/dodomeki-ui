import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './button';

storiesOf('Button', module)
  .add('Button', () => (
    <div>
      <Button size="sm">
        Button
      </Button>
      <Button size="md">
        Button
      </Button>
      <Button size="lg">
        Button
      </Button>
    </div>
  ));
