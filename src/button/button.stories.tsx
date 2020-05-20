import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './button';

storiesOf('Button', module)
  .add('Button', () => (
    <div>
      <div>
        <Button size="sm" variant="empty" href="#">
          Button
        </Button>
        <Button size="sm" variant="empty">
          Button
        </Button>
        <Button size="md" variant="empty">
          Button
        </Button>
        <Button size="lg" variant="empty">
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
        <Button size="sm" variant="filled" color="primary">
          Button
        </Button>
        <Button size="md" variant="filled" color="primary">
          Button
        </Button>
        <Button size="lg" variant="filled" color="primary">
          Button
        </Button>
      </div>
      <div>
        <Button variant="filled" color="primary">
          Primary
        </Button>
        <Button variant="filled" color="secondary">
          Secondary
        </Button>
        <Button variant="filled" color="warning">
          Warning
        </Button>
        <Button variant="filled" color="danger">
          Danger
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="danger">
          Danger
        </Button>
      </div>
    </div>
  ));
