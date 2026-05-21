import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryFn } from '@storybook/react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ListSubheader } from './ListSubheader';

const meta: Meta<typeof List> = {
  title: 'Display/List',
  component: List,
};
export default meta;

export const SimpleList: StoryFn<typeof List> = (args) => (
  <List subheader={<ListSubheader title="Subheader" />} {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem selected>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
    <List>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
    <ListItem>Item 6</ListItem>
    <ListItem>Item 7</ListItem>
    <List>
      <ListItem href="#hello">Item 8</ListItem>
      <ListItem>Item 9</ListItem>
      <List>
        <ListItem>Item 10</ListItem>
        <ListItem>Item 11</ListItem>
        <List>
          <ListItem icon={<FontAwesomeIcon icon={faCoffee} size="sm" />}>
            Item 12
          </ListItem>
          <ListItem icon={<FontAwesomeIcon icon={faCoffee} size="sm" />}>
            Item 13
          </ListItem>
        </List>
      </List>
    </List>
  </List>
);
