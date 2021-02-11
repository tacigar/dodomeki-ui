import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoadingSpinner } from './LoadingSpinner';
import styled from 'styled-components';

storiesOf('LoadingSpinner', module).add('LoadingSpinner', () => (
  <>
    <Row>
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
    </Row>
    <Row>
      <LoadingSpinner color="primary" />
      <LoadingSpinner color="secondary" />
      <LoadingSpinner color="success" />
      <LoadingSpinner color="warning" />
      <LoadingSpinner color="danger" />
    </Row>
  </>
));

const Row = styled.div`
  display: flex;
  align-items: center;
  & > span { margin-right: 10px };
  padding: 4px;
`;
