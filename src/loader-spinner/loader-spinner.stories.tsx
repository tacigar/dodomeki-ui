/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Fragment } from 'react';

import { LoaderSpinner } from './loader-spinner';

storiesOf('LoaderSpinner', module).add('LoaderSpinner', () => (
  <Fragment>
    <div
      css={{
        display: 'flex',
        marginBottom: 8,
        alignItems: 'center',
        '& > div': {
          marginRight: 10,
        },
      }}
    >
      <LoaderSpinner size="sm" />
      <LoaderSpinner size="md" />
      <LoaderSpinner size="lg" />
    </div>
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        '& > div': {
          marginRight: 10,
        },
      }}
    >
      <LoaderSpinner color="primary" />
      <LoaderSpinner color="secondary" />
      <LoaderSpinner color="success" />
      <LoaderSpinner color="warning" />
      <LoaderSpinner color="danger" />
    </div>
  </Fragment>
));
