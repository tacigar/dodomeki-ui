import { css, CSSObject } from '@emotion/react';
import React, { ReactNode, Ref, createRef, forwardRef } from 'react';

export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonVariant = 'contained' | 'default' | 'text' | 'link';

type ButtonAnchorProps = {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonButtonProps = {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: ReactNode;
  css?: CSSObject;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & (ButtonAnchorProps | ButtonButtonProps);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const buttonRef = ref || createRef<HTMLButtonElement | HTMLAnchorElement>();

  if (props.href) {
    const {
      children,
      css: cssProp,
      href,
      size = 'default',
      variant = 'default',
      ...otherProps
    } = props;

    return (
      <a
        css={css`
          ${cssProp}
        `}
        href={href}
        ref={buttonRef as Ref<HTMLAnchorElement>}
        {...otherProps}
      >
        {children}
      </a>
    );
  }

  if ('href' in props) {
    return null;
  }

  const {
    children,
    css: cssProp,
    size = 'default',
    variant = 'default',
    ...otherProps
  } = props;

  return (
    <button
      css={css`
        ${cssProp}
      `}
      ref={buttonRef as Ref<HTMLButtonElement>}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
});
