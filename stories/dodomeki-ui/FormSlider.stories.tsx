import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FormSlider } from '../../packages/dodomeki-ui/src/FormSlider';

storiesOf('FormSlider', module).add('FormSlider', () => {
  const [value, setValue] = useState(30);
  const handleValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(parseInt(event.target.value, 10));
    },
    [],
  );
  return <FormSlider value={value} onChange={handleValueChange} />;
});
