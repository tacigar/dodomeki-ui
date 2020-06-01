/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import {
  ButtonGroup,
  ButtonGroupSizeType,
  ButtonGroupColorType,
} from './button-group';
import { Button } from '../button';
import { Panel } from '../panel';

storiesOf('ButtonGroup', module).add('ButtonGroup', () => (
  <div
    css={{
      '& > div': { padding: 12 },
      '& > div:not(:last-child)': { marginBottom: 12 },
    }}
  >
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {(['sm', 'md', 'lg'] as ButtonGroupSizeType[]).map((size) => (
        <div
          css={{
            display: 'flex',
            '& > div:not(:last-child)': { marginRight: 6 },
          }}
        >
          <ButtonGroup color="primary" variant="outlined" size={size}>
            <Button>Item1</Button>
            <Button>Item2</Button>
            <Button>Item3</Button>
          </ButtonGroup>
          <ButtonGroup color="primary" variant="filled" size={size}>
            <Button>Item1</Button>
            <Button>Item2</Button>
            <Button>Item3</Button>
          </ButtonGroup>
        </div>
      ))}
    </Panel>
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {([
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ] as ButtonGroupColorType[]).map((color) => (
        <div
          css={{
            display: 'flex',
            '& > div:not(:last-child)': { marginRight: 6 },
          }}
        >
          <ButtonGroup color={color} variant="outlined">
            <Button>Item1</Button>
            <Button>Item2</Button>
            <Button>Item3</Button>
          </ButtonGroup>
          <ButtonGroup color={color} variant="filled">
            <Button>Item1</Button>
            <Button>Item2</Button>
            <Button>Item3</Button>
          </ButtonGroup>
        </div>
      ))}
    </Panel>
  </div>
));
