import { storiesOf } from '@storybook/react';
import React from 'react';

import { Field } from '../../packages/dodomeki-ui/src/Field';
import { FieldSet } from '../../packages/dodomeki-ui/src/FieldSet';
import { FormInput } from '../../packages/dodomeki-ui/src/FormInput';

storiesOf('FieldSet', module).add('FieldSet', () => (
  <FieldSet legend="This is a legend">
    <Field label="This is a label" description="This is a helpful description">
      <FormInput />
    </Field>
  </FieldSet>
));
