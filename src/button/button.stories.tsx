import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './button';

storiesOf('Button', module)
  .add('Button', () => (
    <div>
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
      <div>
        <Button size="sm" variant="filled">
          Button
        </Button>
        <Button size="md" variant="filled">
          Button
        </Button>
        <Button size="lg" variant="filled">
          Button
        </Button>
      </div>
      <div>
        <Button size="sm" variant="filled" color="secondary">
          Button
        </Button>
        <Button size="md" variant="filled" color="secondary">
          Button
        </Button>
        <Button size="lg" variant="filled" color="secondary">
          Button
        </Button>
      </div>
      <div>
        <Button size="sm" variant="filled" color="secondary" href="#">
          Button
        </Button>
        <Button size="md" variant="filled" color="secondary">
          Button
        </Button>
        <Button size="lg" variant="filled" color="secondary">
          Button
        </Button>
      </div>
    </div>
  ));
