import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'buttons/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Simple: Story = {
  args: {
    children: 'Primary',
  },
};
