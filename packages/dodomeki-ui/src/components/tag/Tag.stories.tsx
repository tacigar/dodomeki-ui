import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Display/Tag',
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: { children: 'primary', color: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'secondary', color: 'secondary' },
};

export const Success: Story = {
  args: { children: 'success', color: 'success' },
};

export const Warning: Story = {
  args: { children: 'warning', color: 'warning' },
};

export const Danger: Story = {
  args: { children: 'danger', color: 'danger' },
};
