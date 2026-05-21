import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Display/Heading',
  component: Heading,
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Headings: Story = {
  render: () => (
    <div>
      <Heading variant="h1">H1. Dodomeki UI</Heading>
      <Heading variant="h2">H2. Dodomeki UI</Heading>
      <Heading variant="h3">H3. Dodomeki UI</Heading>
      <Heading variant="h4">H4. Dodomeki UI</Heading>
      <Heading variant="h5">H5. Dodomeki UI</Heading>
      <Heading variant="h6">H6. Dodomeki UI</Heading>
    </div>
  ),
};
