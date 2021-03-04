import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Tag } from '../../packages/dodomeki-ui/src/Tag';

storiesOf('Tag', module).add('Tag', () => (
  <div>
    <Row>
      <Tag variant="outlined" color="primary">
        Primary
      </Tag>
      <Tag variant="outlined" color="secondary">
        Secondary
      </Tag>
      <Tag variant="outlined" color="success">
        Success
      </Tag>
      <Tag variant="outlined" color="warning">
        Warning
      </Tag>
      <Tag variant="outlined" color="danger">
        Danger
      </Tag>
    </Row>
    <Row>
      <Tag variant="filled" color="primary">
        Primary
      </Tag>
      <Tag variant="filled" color="secondary">
        Secondary
      </Tag>
      <Tag variant="filled" color="success">
        Success
      </Tag>
      <Tag variant="filled" color="warning">
        Warning
      </Tag>
      <Tag variant="filled" color="danger">
        Danger
      </Tag>
    </Row>
    <Row>
      <Tag
        variant="outlined"
        color="primary"
        icon={<FontAwesomeIcon icon={faCoffee} />}
      >
        Coffee
      </Tag>
      <Tag
        variant="filled"
        color="primary"
        icon={<FontAwesomeIcon icon={faCoffee} />}
      >
        Coffee
      </Tag>
    </Row>
  </div>
));

const Row = styled.div`
  & > span:not(:last-child) {
    margin-right: 8px;
  }
`;
