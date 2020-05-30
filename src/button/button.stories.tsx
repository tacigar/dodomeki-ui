/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Fragment } from 'react';

import { Panel } from '../panel';
import {
  Button,
  ButtonColorType,
  ButtonVariantType,
  ButtonSizeType,
} from './button';

storiesOf('Button', module).add('Button', () => (
  <div
    css={{
      '& > div': { padding: 12 },
      '& > div:not(:last-child)': { marginBottom: 12 },
      '& button': { marginRight: 4 },
    }}
  >
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {(['filled', 'outlined', 'empty'] as ButtonVariantType[]).map(
        (variant) => (
          <div key={variant}>
            {([
              { size: 'sm', text: 'Small' },
              { size: 'md', text: 'Medium' },
              { size: 'lg', text: 'Large' },
            ] as { size: ButtonSizeType; text: string }[]).map((size) => (
              <Button variant={variant} size={size.size} key={size.size}>
                {size.text}
              </Button>
            ))}
          </div>
        ),
      )}
    </Panel>
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {(['filled', 'outlined', 'empty'] as ButtonVariantType[]).map(
        (variant) => (
          <div key={variant}>
            {([
              { color: 'primary', text: 'Primary' },
              { color: 'secondary', text: 'Secondary' },
              { color: 'success', text: 'Success' },
              { color: 'warning', text: 'Success' },
              { color: 'danger', text: 'Danger' },
            ] as { color: ButtonColorType; text: string }[]).map((color) => (
              <Button variant={variant} color={color.color} key={color.color}>
                {color.text}
              </Button>
            ))}
            <Button variant={variant} disabled>
              Disabled
            </Button>
          </div>
        ),
      )}
    </Panel>
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {(['filled', 'outlined', 'empty'] as ButtonVariantType[]).map(
        (variant) => (
          <div key={variant}>
            {([
              { size: 'sm', text: 'Small' },
              { size: 'md', text: 'Medium' },
              { size: 'lg', text: 'Large' },
            ] as { size: ButtonSizeType; text: string }[]).map((size) => (
              <Fragment>
                <Button variant={variant} size={size.size} key={size.size}>
                  {size.text}
                </Button>
                <Button
                  variant={variant}
                  size={size.size}
                  key={size.size}
                  isLoading
                >
                  {size.text}
                </Button>
              </Fragment>
            ))}
          </div>
        ),
      )}
    </Panel>
  </div>
));
