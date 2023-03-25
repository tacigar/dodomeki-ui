import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';

export default {
  title: 'buttons/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  children: <FontAwesomeIcon icon={faHome} />,
};
