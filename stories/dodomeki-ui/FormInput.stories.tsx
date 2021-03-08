import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { FormInput } from '../../packages/dodomeki-ui/src/FormInput';

storiesOf('FormInput', module).add('FormInput', () => (
  <Root>
    <div>
      <FormInput isLoading />
    </div>
    <div>
      <FormInput endIcon={<FontAwesomeIcon icon={faCoffee} size="sm" />} />
    </div>
    <div>
      <FormInput
        placeholder="Search"
        startIcon={<FontAwesomeIcon icon={faSearch} size="sm" />}
        endIcon={<FontAwesomeIcon icon={faCoffee} size="sm" />}
      />
    </div>
  </Root>
));

const Root = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 12px;
  }
`;
