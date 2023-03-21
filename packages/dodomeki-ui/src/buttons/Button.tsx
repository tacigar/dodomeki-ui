import React from 'react';

type ButtonAnchorProps = {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonButtonProps = {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  label: string;
} & (ButtonAnchorProps | ButtonButtonProps);

export const Button = (props: ButtonProps) => {
  if (props.href) {
    const { href, label, ...otherProps } = props;
    return (
      <a href={href} {...otherProps}>
        {label}
      </a>
    );
  }

  if ('href' in props) {
    return null;
  }

  const { label, ...otherProps } = props;
  return (
    <button type="button" {...otherProps}>
      {label}
    </button>
  );
};
