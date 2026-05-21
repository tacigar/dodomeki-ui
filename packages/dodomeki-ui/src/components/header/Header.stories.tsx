import type { Meta, StoryObj } from '@storybook/react';
import { DodomekiUiIcon } from '../../icons/DodomekiUiIcon';
import { Header } from './Header';
import { HeaderTitle } from './HeaderTitle';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Header theme="dark">
      <HeaderTitle icon={<DodomekiUiIcon />} title="Dodomeki UI" />
    </Header>
  ),
};
