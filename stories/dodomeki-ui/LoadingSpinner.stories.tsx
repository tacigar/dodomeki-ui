import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { LoadingSpinner } from '../../packages/dodomeki-ui/src/LoadingSpinner';

storiesOf('LoadingSpinner', module).add('LoadingSpinner', () => (
  <Row>
    <LoadingSpinner size="sm" />
    <LoadingSpinner size="md" />
    <LoadingSpinner size="lg" />
  </Row>
));

const Row = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-right: 10px;
  }
  padding: 4px;
`;
