import React, { ReactNode, MouseEvent, MouseEventHandler, FC } from 'react';

type SizeType = 'sm' | 'md' | 'lg';

type VariantType = 'filled' | 'outlined';

type ColorType = 'primary' | 'secondary' | 'default';

interface ButtonProps {
  size?: SizeType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children?: ReactNode;
  variant?: VariantType;
  color?: ColorType;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  size = 'md',
  href,
  onClick,
  children,
  variant = 'outlined',
  color = 'default',
  className = '',
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  if (href) {
    return (
      <a onClick={handleClick}>{children}</a>
    );
  }

  return (
    <button onClick={handleClick}>{children}</button>
  );
};

export default Button;
