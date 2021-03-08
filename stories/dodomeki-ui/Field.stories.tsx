import { storiesOf } from '@storybook/react';
import React from 'react';

import { Field } from '../../packages/dodomeki-ui/src/Field';
import { FormInput } from '../../packages/dodomeki-ui/src/FormInput';

storiesOf('Field', module).add('Field', () => (
  <Field label="This is a label" description="This is a helpful description!">
    <FormInput />
  </Field>
));
