import { css } from '@emotion/react';
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const ButtonOverview = () => (
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
      {(['contained', 'default', 'text', 'link'] as const).map((variant) =>
        [
          { startIcon: undefined, endIcon: undefined },
          {
            startIcon: <FontAwesomeIcon icon={faPlus} />,
            endIcon: undefined,
          },
          {
            startIcon: undefined,
            endIcon: <FontAwesomeIcon icon={faCaretDown} />,
          },
        ].map(({ startIcon, endIcon }, i) => (
          <div
            key={`${variant}-${i}`}
            css={css`
              & > :not(:last-child) {
                margin-right: 8px;
              }
            `}
          >
            {(['primary', 'secondary'] as const).map((color) => (
              <Button
                key={color}
                color={color}
                variant={variant}
                startIcon={startIcon}
                endIcon={endIcon}
              >
                {color} button
              </Button>
            ))}
          </div>
        )),
      )}
    </div>
    <div
      css={css`
        & > :not(:last-child) {
          margin-bottom: 8px;
        }
      `}
    >
      {(['contained', 'default', 'text', 'link'] as const).map((variant) =>
        [
          { startIcon: undefined, endIcon: undefined },
          {
            startIcon: <FontAwesomeIcon icon={faPlus} />,
            endIcon: undefined,
          },
          {
            startIcon: undefined,
            endIcon: <FontAwesomeIcon icon={faCaretDown} />,
          },
        ].map(({ startIcon, endIcon }, i) => (
          <div
            key={`${variant}-${i}`}
            css={css`
              & > :not(:last-child) {
                margin-right: 8px;
              }
            `}
          >
            {(['small', 'default', 'large'] as const).map((size) => (
              <Button
                key={size}
                color="primary"
                variant={variant}
                size={size}
                startIcon={startIcon}
                endIcon={endIcon}
              >
                Primary Button
              </Button>
            ))}
          </div>
        )),
      )}
    </div>
  </div>
);

const meta: Meta<typeof ButtonOverview> = {
  title: 'buttons/ButtonOverview',
  component: ButtonOverview,
};
export default meta;

type Story = StoryObj<typeof ButtonOverview>;

export const Simple: Story = {};
