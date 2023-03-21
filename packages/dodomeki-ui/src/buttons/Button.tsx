import React, { Ref, createRef, forwardRef } from 'react';

type ButtonAnchorProps = {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonButtonProps = {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  label: string;
} & (ButtonAnchorProps | ButtonButtonProps);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const buttonRef = ref || createRef<HTMLButtonElement | HTMLAnchorElement>();

  if (props.href) {
    const { href, label, ...otherProps } = props;
    return (
      <a href={href} ref={buttonRef as Ref<HTMLAnchorElement>} {...otherProps}>
        {label}
      </a>
    );
  }

  if ('href' in props) {
    return null;
  }

  const { label, ...otherProps } = props;
  return (
    <button
      type="button"
      ref={buttonRef as Ref<HTMLButtonElement>}
      {...otherProps}
    >
      {label}
    </button>
  );
});
