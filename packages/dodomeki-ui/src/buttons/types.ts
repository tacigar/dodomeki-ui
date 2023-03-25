import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonVariant = 'contained' | 'default' | 'text' | 'link';
export type ButtonColor = 'primary' | 'secondary';

type ButtonAnchorProps = {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonButtonProps = {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonCommonProps = {
  children: ReactNode;
  color?: ButtonColor;
  css?: CSSObject;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & (ButtonAnchorProps | ButtonButtonProps);
