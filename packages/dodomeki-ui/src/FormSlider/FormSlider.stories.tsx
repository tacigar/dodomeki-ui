import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FormSlider } from './FormSlider';

storiesOf('FormSlider', module).add('FormSlider', () => {
  const [value, setValue] = useState(28);
  return <FormSlider value={value} onChange={setValue} step={4} />;
});
