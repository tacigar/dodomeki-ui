import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardText } from './CardText';
import { CardTitle } from './CardTitle';

const meta: Meta<typeof Card> = {
  title: 'Display/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const SimpleCard: Story = {
  render: () => (
    <Card
      css={css`
        max-width: 300px;
      `}
    >
      <CardBody>
        <CardTitle title="Card Title" subtitle="Card Subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CardText>
      </CardBody>
    </Card>
  ),
};
