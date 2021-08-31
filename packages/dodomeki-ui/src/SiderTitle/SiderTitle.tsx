import React from 'react';
import styled, { css } from 'styled-components';

export interface SiderTitleProps {
  isSub?: boolean;
}

export const SiderTitle: React.FC<SiderTitleProps> = ({
  children,
  isSub = false,
}) => {
  return <Root isSub={isSub}>{children}</Root>;
};

const Root = styled.div<{ isSub: boolean }>`
  padding: 10px 18px;
  ${(props) =>
    props.isSub
      ? css`
          font-size: ${props.theme.text.fontSize.lg};
          color: ${props.theme.palette.grey.light[9]};
        `
      : css`
          font-size: ${props.theme.text.fontSize.xl};
          font-weight: 400;
        `}
`;
