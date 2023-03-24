import { Theme } from '@dodomeki-ui/theme';
import { css, CSSObject } from '@emotion/react';
import React, { ReactNode, Ref, createRef, forwardRef } from 'react';

export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonVariant = 'contained' | 'default' | 'text' | 'link';
export type ButtonColor = 'primary' | 'secondary';

type ButtonAnchorProps = {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonButtonProps = {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseCss = css({
  display: 'inline-block',
  textDecoration: 'none',
  borderRadius: '0.25rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
});

const buttonSizeCss = (theme: Theme, size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.25rem 0.5rem;
        font-size: ${theme.typography.small.fontSize};
      `;
    case 'default':
      return css`
        padding: 0.35rem 0.7rem;
        font-size: ${theme.typography.body.fontSize};
      `;
    case 'large':
      return css`
        padding: 0.45rem 0.9rem;
        font-size: 1.154rem;
      `;
  }
};

const buttonVariantCss = (
  theme: Theme,
  variant: ButtonVariant,
  color: ButtonColor,
) => {
  switch (variant) {
    case 'contained':
      return css`
        color: #fff;
        border: 1px solid ${theme.palette[color].dark};
        background-color: ${theme.palette[color].main};
        &:hover {
          background-color: ${theme.palette[color].light};
        }
        &:active {
          background-color: ${theme.palette[color].dark};
        }
      `;
    case 'default':
      return css`
        color: ${theme.palette[color].main};
        border: 1px solid ${theme.palette[color].main};
        background-color: transparent;
        &:hover {
          color: ${theme.palette[color].light};
          border: 1px solid ${theme.palette[color].light};
        }
        &:active {
          color: ${theme.palette[color].dark};
          border: 1px solid ${theme.palette[color].dark};
        }
      `;
    case 'text':
      return css`
        color: ${theme.palette[color].main};
        border: none;
        background-color: transparent;
        &:hover {
          background-color: rgba(0, 123, 255, 0.1);
        }
        &:active {
          background-color: rgba(0, 123, 255, 0.2);
        }
      `;
    case 'link':
      return css`
        color: ${theme.palette[color].main};
        border: none;
        background-color: transparent;
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
        &:active {
          text-decoration: none;
        }
      `;
  }
};

export type ButtonProps = {
  children: ReactNode;
  color?: ButtonColor;
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
      color = 'primary',
      css: cssProp,
      href,
      size = 'default',
      variant = 'default',
      ...otherProps
    } = props;

    return (
      <a
        css={(theme) => css`
          ${cssProp}
          ${buttonBaseCss}
          ${buttonSizeCss(theme, size)}
          ${buttonVariantCss(theme, variant, color)}
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
    color = 'primary',
    css: cssProp,
    size = 'default',
    variant = 'default',
    ...otherProps
  } = props;

  return (
    <button
      css={(theme) => css`
        ${cssProp}
        ${buttonBaseCss}
        ${buttonSizeCss(theme, size)}
        ${buttonVariantCss(theme, variant, color)}
      `}
      ref={buttonRef as Ref<HTMLButtonElement>}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
});
