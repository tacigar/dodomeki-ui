import React, { ReactNode, Ref, createRef, forwardRef } from 'react';

type ButtonAnchorProps = {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonButtonProps = {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  children: ReactNode;
} & (ButtonAnchorProps | ButtonButtonProps);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const buttonRef = ref || createRef<HTMLButtonElement | HTMLAnchorElement>();

  if (props.href) {
    const { href, children, ...otherProps } = props;
    return (
      <a href={href} ref={buttonRef as Ref<HTMLAnchorElement>} {...otherProps}>
        {children}
      </a>
    );
  }

  if ('href' in props) {
    return null;
  }

  const { children, ...otherProps } = props;
  return (
    <button
      type="button"
      ref={buttonRef as Ref<HTMLButtonElement>}
      {...otherProps}
    >
      {children}
    </button>
  );
});
