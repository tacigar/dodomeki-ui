import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VirtualizedList } from './VirtualizedList';

const meta: Meta<typeof VirtualizedList> = {
  title: 'VirtualizedList',
  component: VirtualizedList,
};
export default meta;

type Story = StoryObj<typeof VirtualizedList>;

export const Default: Story = {
  render: () => {
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
  },
};
