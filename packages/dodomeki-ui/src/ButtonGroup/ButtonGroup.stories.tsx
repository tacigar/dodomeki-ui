import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Button } from '../Button';
import { ButtonGroup } from './ButtonGroup';

storiesOf('ButtonGroup', module).add('ButtonGroup', () => {
  return (
    <Root>
      <ButtonGroup>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    </Root>
  );
});

const Root = styled.div`
  & > * {
    margin-bottom: 12px;
  }
`;
