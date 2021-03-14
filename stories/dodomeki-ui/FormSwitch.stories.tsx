import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FormSwitch } from '../../packages/dodomeki-ui/src/FormSwitch';

storiesOf('FormSwitch', module).add('FormSwitch', () => {
  const [checked, setChecked] = useState(false);
  return <FormSwitch checked={checked} onChange={setChecked} />;
});
