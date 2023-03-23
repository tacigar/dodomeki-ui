import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const ButtonOverview = () => {
  return (
    <div
      css={css`
        & > :not(:last-child) {
          margin-bottom: 16px;
        }
      `}
    >
      <div
        css={css`
          & > :not(:last-child) {
            margin-bottom: 8px;
          }
        `}
      >
        {(['contained', 'default', 'text', 'link'] as const).map((variant) => (
          <div
            key={variant}
            css={css`
              & > :not(:last-child) {
                margin-right: 8px;
              }
            `}
          >
            {(['primary', 'secondary'] as const).map((color) => (
              <Button key={color} color={color} variant={variant}>
                {color} button
              </Button>
            ))}
          </div>
        ))}
      </div>
      <div
        css={css`
          & > :not(:last-child) {
            margin-bottom: 8px;
          }
        `}
      >
        {(['contained', 'default', 'text', 'link'] as const).map((variant) => (
          <div
            key={variant}
            css={css`
              & > :not(:last-child) {
                margin-right: 8px;
              }
            `}
          >
            {(['small', 'default', 'large'] as const).map((size) => (
              <Button key={size} color="primary" variant={variant} size={size}>
                Primary Button
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'buttons/ButtonOverview',
  component: ButtonOverview,
} as ComponentMeta<typeof ButtonOverview>;

const Template: ComponentStory<typeof ButtonOverview> = () => (
  <ButtonOverview />
);

export const Simple = Template.bind({});
