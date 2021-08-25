import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Button, ButtonProps } from '../../packages/dodomeki-ui/src/Button';

storiesOf('Button', module).add('Button', () => {
  return (
    <Root>
      <div>{renderButton('Default', {})}</div>
      <div>{renderButton('Disabled', { disabled: true })}</div>
    </Root>
  );
});

const renderButton = (title: string, props: ButtonProps) => {
  return (
    <div>
      <div>{title}</div>
      <Button {...props}>Button</Button>
    </div>
  );
};

const Root = styled.div`
  & > * {
    margin-bottom: 12px;
  }
`;
