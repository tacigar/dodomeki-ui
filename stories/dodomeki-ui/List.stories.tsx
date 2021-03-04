import React from 'react';
import { storiesOf } from '@storybook/react';

import { List } from '../../packages/dodomeki-ui/src/List';
import { Box } from '../../packages/dodomeki-ui/src/Box';
import { ListItem } from '../../packages/dodomeki-ui/src/ListItem';

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
