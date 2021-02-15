import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import {
  Button,
  ButtonColorType,
  ButtonVariantType,
  ButtonSizeType,
} from './Button';

storiesOf('Button', module).add('Button', () => (
  <Root>
    <Rows>
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
    </Rows>
    <Rows>
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
    </Rows>
    <Rows>
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
    </Rows>
    <Rows>
      {(['filled', 'outlined', 'empty'] as ButtonVariantType[]).map(
        (variant) => (
          <div key={variant}>
            <Button
              variant={variant}
              icon={<FontAwesomeIcon icon={faCoffee} />}
            >
              Coffee
            </Button>
          </div>
        ),
      )}
    </Rows>
  </Root>
));

const Root = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 12px;
  }
  & button {
    margin-right: 6px;
  }
`;

const Rows = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 6px;
  }
`;
