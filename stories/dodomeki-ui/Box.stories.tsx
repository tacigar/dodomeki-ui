import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../../packages/dodomeki-ui/src/Box';

storiesOf('Box', module).add('Box', () => (
  <Box display="flex" justifyContent="space-between">
    <Box>Hello</Box>
    <Box>World</Box>
  </Box>
));
