import styled, { css } from 'styled-components';

export type TagVariantType = 'filled' | 'outlined';

export type TagColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface TagProps {
  variant?: TagVariantType;
  color?: TagColorType;
}

export const Tag = styled.div<TagProps>`
  display: inline-block;
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
