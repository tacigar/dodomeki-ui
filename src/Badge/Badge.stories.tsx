import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge } from './Badge';
import styled from 'styled-components';

storiesOf('Badge', module).add('Badge', () => (
  <div>
    <Row>
      <Badge variant="outlined" color="primary">
        Primary
      </Badge>
      <Badge variant="outlined" color="secondary">
        Secondary
      </Badge>
      <Badge variant="outlined" color="success">
        Success
      </Badge>
      <Badge variant="outlined" color="warning">
        Warning
      </Badge>
      <Badge variant="outlined" color="danger">
        Danger
      </Badge>
    </Row>
    <Row>
      <Badge variant="filled" color="primary">
        Primary
      </Badge>
      <Badge variant="filled" color="secondary">
        Secondary
      </Badge>
      <Badge variant="filled" color="success">
        Success
      </Badge>
      <Badge variant="filled" color="warning">
        Warning
      </Badge>
      <Badge variant="filled" color="danger">
        Danger
      </Badge>
    </Row>
  </div>
));

const Row = styled.div`
  & > div:not(:last-child) { margin-right: 4px };
`;
