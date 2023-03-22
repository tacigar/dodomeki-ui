import { CSSObject } from '@emotion/react';
import React, { ReactElement, cloneElement } from 'react';
import { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './Button';

export type ButtonGroupProps = {
  children: ReactElement<ButtonProps>[];
  color?: ButtonColor;
  css?: CSSObject;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export const ButtonGroup = ({
  children,
  color,
  css,
  size,
  variant,
}: ButtonGroupProps) => {
  const injectedChildren = React.Children.map(children, (child) =>
    cloneElement(child, {
      color,
      size,
      variant,
    }),
  );

  return (
    <div
      css={`
        ${css}
      `}
    >
      {injectedChildren}
    </div>
  );
};
