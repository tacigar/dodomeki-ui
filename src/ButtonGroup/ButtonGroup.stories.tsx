import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import {
  ButtonGroup,
  ButtonGroupSizeType,
  ButtonGroupColorType,
} from './ButtonGroup';

storiesOf('ButtonGroup', module).add('ButtonGroup', () => (
  <Root>
    <Rows>
      {(['sm', 'md', 'lg'] as ButtonGroupSizeType[]).map((size) => (
        <Row>
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
        </Row>
      ))}
    </Rows>
    <Rows>
      {([
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ] as ButtonGroupColorType[]).map((color) => (
        <Row>
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
        </Row>
      ))}
    </Rows>
  </Root>
));

const Root = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Rows = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const Row = styled.div`
  display: flex;
  & > div:not(:last-child) {
    margin-right: 6px;
  }
`;
