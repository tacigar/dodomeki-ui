/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import { Button } from '../button';
import { Panel } from '../panel';
import {
  ButtonBaseColorType,
  ButtonBaseVariantType,
  ButtonBaseSizeType,
} from './button-base';

storiesOf('Button', module).add('Button', () => (
  <div
    css={{
      '& > div': { padding: 12 },
      '& > div:not(:last-child)': { marginBottom: 12 },
      '& button': { marginRight: 4 },
    }}
  >
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {(['filled', 'outlined', 'empty'] as ButtonBaseVariantType[]).map(
        (variant) => (
          <div key={variant}>
            {([
              { size: 'sm', text: 'Small' },
              { size: 'md', text: 'Medium' },
              { size: 'lg', text: 'Large' },
            ] as { size: ButtonBaseSizeType; text: string }[]).map((size) => (
              <Button variant={variant} size={size.size} key={size.size}>
                {size.text}
              </Button>
            ))}
          </div>
        ),
      )}
    </Panel>
    <Panel css={{ '& > div:not(:last-child)': { marginBottom: 6 } }}>
      {(['filled', 'outlined', 'empty'] as ButtonBaseVariantType[]).map(
        (variant) => (
          <div key={variant}>
            {([
              { color: 'primary', text: 'Primary' },
              { color: 'secondary', text: 'Secondary' },
              { color: 'success', text: 'Success' },
              { color: 'warning', text: 'Success' },
              { color: 'danger', text: 'Danger' },
            ] as { color: ButtonBaseColorType; text: string }[]).map(
              (color) => (
                <Button variant={variant} color={color.color} key={color.color}>
                  {color.text}
                </Button>
              ),
            )}
            <Button variant={variant} isDisabled>
              Disabled
            </Button>
          </div>
        ),
      )}
    </Panel>
  </div>
));
