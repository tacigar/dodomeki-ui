/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Badge } from './Badge';

storiesOf('Badge', module).add('Badge', () => (
  <div>
    <div css={{ '& > div': { marginRight: 3 } }}>
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
    </div>
    <div css={{ '& > div': { marginRight: 3 } }}>
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
    </div>
  </div>
));
