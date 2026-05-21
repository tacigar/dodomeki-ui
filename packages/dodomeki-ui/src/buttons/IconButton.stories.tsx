import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'buttons/IconButton',
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Simple: Story = {
  args: {
    children: <FontAwesomeIcon icon={faHome} />,
  },
};
