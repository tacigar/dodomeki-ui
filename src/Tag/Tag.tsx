import React from 'react';
import styled, { css } from 'styled-components';

export type TagVariantType = 'filled' | 'outlined';

export type TagColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  color?: TagColorType;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: TagVariantType;
}

export const Tag: React.FC<TagProps> = ({
  children,
  className,
  color = 'primary',
  icon,
  style,
  variant = 'outlined',
}) => {
  return (
    <Root variant={variant} color={color} className={className} style={style}>
      {icon}
      <Text icon={icon}>{children}</Text>
    </Root>
  );
};

const Root = styled.span<{ variant: TagVariantType; color: TagColorType }>`
  padding: 1px 8px;
  font-size: ${(props) => props.theme.text.fontSize.small};

  ${(props) => {
    const variant = props.variant || 'outlined';
    const color = props.color || 'primary';
    const mainColor = props.theme.palette[color][7];
    switch (variant) {
      case 'filled':
        return css`
          background-color: ${mainColor};
          color: ${props.theme.palette.white};
          border: 1px solid ${mainColor};
          border-radius: 2px;
        `;
      case 'outlined':
        return css`
          border: 1px solid ${mainColor};
          border-radius: 2px;
        `;
      default:
        return '';
    }
  }};
`;

const Text = styled.span<{ icon?: React.ReactNode }>`
  margin-left: ${({ icon }) => (icon ? '7px' : '0px')};
`;
