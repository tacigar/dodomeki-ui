import styled, { css } from 'styled-components';

export type BadgeVariantType = 'filled' | 'outlined';

export type BadgeColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface BadgeProps {
  variant?: BadgeVariantType;
  color?: BadgeColorType;
}

export const Badge = styled.div<BadgeProps>`
  display: inline-block;
  padding: 1px 8px;
  font-size: ${(props) => props.theme.text.fontSize.small};

  ${(props) => {
    const color = props.color || 'primary';
    const variant = props.variant || 'outlined';

    const mainColor = props.theme.palette[color][7];
    switch (variant) {
      case 'filled':
        return css`
          background-color: ${mainColor};
          color: ${props.theme.palette.white};
          border-radius: 3px;
        `;
      case 'outlined':
        return css`
          border: 1px solid ${mainColor};
          border-radius: 3px;
        `;
      default:
        return '';
    }
  }};
`;
