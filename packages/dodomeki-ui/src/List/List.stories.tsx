import React from 'react';
import { storiesOf } from '@storybook/react';

import { List } from './List';
import { Box } from '../Box';
import { ListItem } from '../ListItem';

storiesOf('List', module).add('List', () => (
  <>
    <Box marginBottom={3}>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </Box>
    <List dense>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  </>
));
