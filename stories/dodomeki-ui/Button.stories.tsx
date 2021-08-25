import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonProps } from '../../packages/dodomeki-ui/src/Button';

storiesOf('Button', module).add('Button', () => {
  return (
    <Root>
      {renderButton('Default', {})}
      {renderButton('Disabled', { disabled: true })}
      {renderButton('Large', { size: 'lg' })}
      {renderButton('With Icon', { icon: <FontAwesomeIcon icon={faHome} /> })}
      {renderButton('With Icon (Large)', {
        icon: <FontAwesomeIcon icon={faHome} />,
        size: 'lg',
      })}
      {renderButton('Loading', { isLoading: true })}
      {renderButton('Loading (Large)', { isLoading: true, size: 'lg' })}
      {renderButton('Empty', { variant: 'empty' })}
      {renderButton('Empty (Disabled)', { variant: 'empty', disabled: true })}
      {renderButton('Empty (Large)', { variant: 'empty', size: 'lg' })}
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
