/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Fragment } from 'react';

import { LoadingSpinner } from './LoadingSpinner';

storiesOf('LoadingSpinner', module).add('LoadingSpinner', () => (
  <Fragment>
    <div
      css={{
        display: 'flex',
        marginBottom: 8,
        alignItems: 'center',
        '& > span': {
          marginRight: 10,
        },
      }}
    >
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
    </div>
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        '& > span': {
          marginRight: 10,
        },
      }}
    >
      <LoadingSpinner color="primary" />
      <LoadingSpinner color="secondary" />
      <LoadingSpinner color="success" />
      <LoadingSpinner color="warning" />
      <LoadingSpinner color="danger" />
    </div>
  </Fragment>
));
