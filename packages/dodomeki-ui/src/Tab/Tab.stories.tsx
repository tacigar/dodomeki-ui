import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '../Tabs';
import { Tab } from './Tab';

storiesOf('Tab', module).add('Tab', () => {
  const [tab, setTab] = useState('tab1');
  return (
    <Tabs value={tab} onChange={setTab}>
      <Tab value="tab1">Tab1</Tab>
      <Tab value="tab2">Tab2</Tab>
      <Tab value="tab3">Tab3</Tab>
    </Tabs>
  );
});
