import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonGroup } from './button-group';
import { Button } from '../button';
import { Box } from '../box';

storiesOf('ButtonGroup', module).add('ButtonGroup', () => (
  <Box display="flex">
    <ButtonGroup color="primary" variant="outlined">
      <Button>Item1</Button>
      <Button>Item2</Button>
      <Button>Item3</Button>
    </ButtonGroup>
    <ButtonGroup color="primary" variant="filled">
      <Button>Item1</Button>
      <Button>Item2</Button>
      <Button>Item3</Button>
    </ButtonGroup>
  </Box>
));
