/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import { Button } from './button';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 4px;
`

storiesOf('Button', module)
  .add('Button', () => (
    <div>
      <div css={{
        display: 'flex',
        marginBottom: 12,
      }}>
        <Button size="sm" variant="empty" href="#">
          Button
        </Button>
        <Button size="sm" variant="empty">
          Button
        </Button>
        <Button size="md" variant="empty">
          Button
        </Button>
        <Button size="lg" variant="empty">
          Button
        </Button>
      </div>
      <div css={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <ButtonWrapper>
          <Button size="sm" variant="filled" color="primary">
            SmallButton
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button size="md" variant="filled" color="primary">
            MediumButton
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button size="lg" variant="filled" color="primary">
            LargeButton
          </Button>
        </ButtonWrapper>
      </div>
      <div css={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <ButtonWrapper>
          <Button variant="filled" color="primary">
            Primary
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="filled" color="secondary">
            Secondary
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="filled" color="warning">
            Warning
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="filled" color="danger">
            Danger
          </Button>
        </ButtonWrapper>
      </div>

      <div css={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <ButtonWrapper>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="outlined" color="danger">
            Danger
          </Button>
        </ButtonWrapper>

      </div>
      <div>
        <ButtonWrapper>
          <Button variant="outlined" color="danger" css={{
            width: 50,
          }}>
            Too Long String
          </Button>
        </ButtonWrapper>
      </div>
    </div>
  ));
