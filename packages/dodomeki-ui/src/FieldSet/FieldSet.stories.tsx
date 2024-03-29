import { storiesOf } from '@storybook/react';
import React from 'react';

import { Field } from '../Field';
import { FieldSet } from './FieldSet';
import { FormInput } from '../FormInput';

storiesOf('FieldSet', module).add('FieldSet', () => (
  <FieldSet legend="This is a legend">
    <Field label="This is a label" description="This is a helpful description">
      <FormInput />
    </Field>
  </FieldSet>
));
