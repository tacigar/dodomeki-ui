import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { LoadingSpinner } from '../../packages/dodomeki-ui/src/LoadingSpinner';

storiesOf('LoadingSpinner', module).add('LoadingSpinner', () => (
  <>
    <Row>
      <LoadingSpinner size="xxs" />
      <LoadingSpinner size="xs" />
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
      <LoadingSpinner size="xl" />
      <LoadingSpinner size="xxl" />
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
  & > span {
    margin-right: 10px;
  }
  padding: 4px;
`;
