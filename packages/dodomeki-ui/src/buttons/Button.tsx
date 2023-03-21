import { Theme } from '@dodomeki-ui/theme';
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

const buttonBaseCss = css({
  display: 'inline-block',
  textDecoration: 'none',
  borderRadius: '0.25rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
});

const buttonSizeCss = {
  small: css`
    padding: 0.23rem 0.46rem;
    font-size: 0.846rem;
  `,
  default: css`
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.46rem 0.92rem;
    font-size: 1.154rem;
  `,
} as const;

const buttonVariantCss = (theme: Theme) => {
  return {
    contained: css`
      color: #fff;
      border: 1px solid ${theme.palette.primary.dark};
      background-color: ${theme.palette.primary.main};
      &:hover {
        background-color: ${theme.palette.primary.light};
      }
      &:active {
        background-color: ${theme.palette.primary.dark};
      }
    `,
    default: css`
      color: ${theme.palette.primary.main};
      border: 1px solid ${theme.palette.primary.main};
      background-color: transparent;
      &:hover {
        color: ${theme.palette.primary.light};
        border: 1px solid ${theme.palette.primary.light};
      }
      &:active {
        color: ${theme.palette.primary.dark};
        border: 1px solid ${theme.palette.primary.dark};
      }
    `,
    text: css`
      color: ${theme.palette.primary.main};
      border: none;
      background-color: transparent;
      &:hover {
        background-color: rgba(0, 123, 255, 0.1);
      }
      &:active {
        background-color: rgba(0, 123, 255, 0.2);
      }
    `,
    link: css`
      color: ${theme.palette.primary.main};
      border: none;
      background-color: transparent;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
      &:active {
        text-decoration: none;
      }
    `,
  } as const;
};

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
        css={(theme) => css`
          ${cssProp}
          ${buttonBaseCss}
          ${buttonSizeCss[size]}
          ${buttonVariantCss(theme)[variant]}
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
      css={(theme) => css`
        ${cssProp}
        ${buttonBaseCss}
        ${buttonSizeCss[size]}
        ${buttonVariantCss(theme)[variant]}
      `}
      ref={buttonRef as Ref<HTMLButtonElement>}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
});
