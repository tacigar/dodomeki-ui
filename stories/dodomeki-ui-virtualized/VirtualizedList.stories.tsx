import React from 'react';
import { storiesOf } from '@storybook/react';

import { VirtualizedList } from '../../packages/dodomeki-ui-virtualized/src/VirtualizedList/VirtualizedList';

storiesOf('VirtualizedList', module).add('VirtualizedList', () => {
  const items: string[] = [];
  for (let i = 0; i < 10000; i += 1) {
    items.push(`Item ${i + 1}`);
  }

  const renderItem = (item: string, style: React.CSSProperties) => (
    <li style={style}>{item}</li>
  );

  return (
    <VirtualizedList
      height={300}
      items={items}
      itemHeight={25}
      renderItem={renderItem}
      width="auto"
    />
  );
});
